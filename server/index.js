const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Movies = require("../database-mongo");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.get("/dashboard", function (req, res) {
//   res.render("/../react-client/dist")
// })


const movieRouter = require("../routers/movieRouter");
const user = require("../routers/usersRouter");

app.use("/movie", movieRouter);
app.use("/user", user);

app.use(express.static(__dirname + "/../react-client/dist"));
app.listen(3000, () => {
  console.log("listening on port 3000!");
});
