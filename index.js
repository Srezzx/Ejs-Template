var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
var app = express();
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname + "/public"));

//Initializing the models
var User = require("./Models/User");

//ROUTES
app.use("/", require("./Routes/basic"));

//STARTING THE SERVER
app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
  console.log("Server has started  at PORT 3000");
});
