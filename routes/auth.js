const express = require("express")
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
var passport = require('passport');
var secret = require('../config/secret');
require('../config/passport')(passport);

// Validate password
const comparePassword = function (typedPassword, password) {
    return bcrypt.compareSync(typedPassword, password)
}

// Signup route
router.post("/register", (req, res, next) => {
    //find if user has been registered with same email
    Users.find({ email: req.body.email })
        .then(user => {
            if (user.length >= 1) {
                return res.json({error:"An account with that email already exist"})
            } else {
                //hash password 
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        let newUser = new Users({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash
                        });
                        //save newUser
                        newUser.save()
                            .then(result => {
                                res.status(201).json({
                                    message: "User Created"
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    message: "Unable to create user",
                                    error: err
                                });
                            });
                    }
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
});

//Login route
router.post("/login", (req, res) => {
    // example with headers object
    Users.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.json({error:"Please enter a valid email or password"})
            } else {
                // check if password match db
                if (comparePassword(req.body.password, user.password)) {
                    // create a JWT Token if password matched
                    let token = jwt.sign(user.toJSON(), secret.secret);
                    // return the information including jwt token as json
                    res.json({ success: true, token: "JWT " + token });
                }
                else {
                    return res.json({error:"Please enter a valid email or password"})
                }
            }
        })
        .catch(err => console.log(err))
});

router.get("/logout")

module.exports = router;