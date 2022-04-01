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

// like profile
router.post("/profile/like", async (req, res) => {
  //add that users email to your likes
  //check if that user has your email on their likes
  //if so then its a match
  const query = { user: req.body.user };
  await Profile.findOneAndUpdate(query, likes.push(req.body.likedUser));

  const likedProfile = await Profile.findOne({
    user: req.params.likedUser,
  }).exec();

  if (likedProfile.likes.find(req.body.user)) {
    await Profile.findOneAndUpdate(query, matches.push(req.body.likedUser));
    await Profile.findOneAndUpdate(
      { user: req.body.likedUser },
      matches.push(req.body.user)
    );
  }
  res.send("saved");
});

module.exports = router;
