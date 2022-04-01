const express = require("express");
const router = express.Router();
const { Profile } = require("../../models/profile");

// get profiles
router.get("/", async (req, res) => {
  const profiles = await Profile.find();
  res.send(profiles);
  return profiles;
});

// get profile
router.get("/profile/:id", function (req, res) {
  Profile.findById(id);
  res.send("Use controller");
});

// create profile
router.post("/create", async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.send("saved");
});

module.exports = router;
