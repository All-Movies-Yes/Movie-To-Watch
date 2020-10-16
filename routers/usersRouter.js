const router = require("express").Router()
let User = require("../database-mongo/user")

router.get(('/'), (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' + err))
});



module.exports = router