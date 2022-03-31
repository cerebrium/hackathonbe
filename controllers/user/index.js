var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("User controller");
});

router.get("/signup", function (req, res) {
  res.send("Signup page");
});

router.get("/login", function (req, res) {
  res.send("Login page");
});

module.exports = router;
