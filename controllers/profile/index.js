const express = require("express");
const router = express.Router();
const { Profile } = require("../../models/profile");

//get profiles
router.get("/:userEmail", async (req, res) => {
  const profiles = await Profile.find({ user: { $ne: req.params.userEmail } });
  res.send(profiles);
  return profiles;
});

//get profile by user email
router.get("/profile/:userEmail", async (req, res) => {
  const userProfile = await Profile.findOne({
    user: req.params.userEmail,
  }).exec();
  res.send(userProfile);
  if (userProfile) {
    return userProfile;
  } else {
    return false;
  }
});

// create profile
router.post("/create", async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.send("saved");
});

module.exports = router;
