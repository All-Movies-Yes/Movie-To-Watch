const router = require("express").Router()
let User1 = require("../database-mongo/index.js")

router.get(('/'), (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' + err))
});


router.post("/signup", function(req, res) {
    data = req.body;
    console.log(data)
    User1.findOne(data.username, (err, result) => {
      if (err) {
        return console.log("error");
      }
      if (result.length > 0) {
        res.send("user-exist");
      } else {
        User1.insertOne(data, function(err, result) {
          if (err) {
            console.log(err);
          } else {
            res.send("user-not-exist");
          }
        });
      }
    });
  });
  
  
  router.post('/signin', function(req, res){   
  
    User1.findOne(req.body.username, function(err, result) {
          if (err) {
              console.log(err);
              return;
          }
          if (result.length > 0) {
              if (result[0].password === req.body.password) {
                  res.send("successAuth");
              } else {
                  res.send("noAuth");
              }
          } else {
              res.send("noUser");
          }
      })
  });

module.exports = router