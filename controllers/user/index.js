const express = require("express");
const router = express.Router();
const { User } = require("../../models/user");

//get users
router.get("/", async function (req, res) {
  const users = await User.find();
  res.send(users);
  res.send("test");
});

//get user
router.get("/user/:id", function (req, res) {
  //User.findById(id);
  res.send("Use controller");
});

//signup user
router.post("/signup", function (req, res) {
  res.send("Signup page");
});

//login user
router.post("/login", function (req, res) {
  res.send("Login page");
});

module.exports = router;
