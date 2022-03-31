var express = require("express");
var router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("User controller");
});

// About page route.
router.get("/signup", function (req, res) {
  res.send("Signup page");
});

module.exports = router;
