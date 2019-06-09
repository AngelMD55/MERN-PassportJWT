const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");
const passport = require("passport");

// route to authenticate user
router.get('/currentUser', passport.authenticate('jwt', {session: false}), userControllers.findLoggedInUser)

//gets all users
router.route("/")
    .get(userControllers.findAll);

module.exports = router