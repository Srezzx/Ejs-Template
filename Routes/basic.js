const express = require("express");
const router = express.Router();
require("dotenv").config();

// Load User model
const User = require("../Models/User");

router.get("/", async (req, res) => {
  res.render("index.ejs", { title: "Shankar testing" });
});

router.get("/about", async (req, res) => {
  res.render("about.ejs", { title: "About page testing" });
});

module.exports = router;
