const db = require("../models/Users");

module.exports = {
    findAll: (req, res) => {
        db.find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findById: function(req,res){
        db.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findLoggedInUser: function(req, res){
        let user = req.user;
        user.password = null;
        res.json({user});
    }
}