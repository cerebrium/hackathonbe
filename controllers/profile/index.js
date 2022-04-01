const express = require("express");
const router = express.Router();
const { Profile } = require("../../models/profile");

//get profiles
router.get("/:userEmail", async (req, res) => {
  const profiles = await Profile.find({
    rejections: { $nin: [req.params.userEmail] },
    matches: { $nin: [req.params.userEmail] },
    user: { $ne: req.params.userEmail },
  });
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
  const user = await Profile.findOne({ user: req.body.user }).exec();

  user.likes.push(req.body.likedUser);
  await user.save();

  const likedProfile = await Profile.findOne({
    user: req.body.likedUser,
  }).exec();

  //match
  if (likedProfile.likes.find((like) => like === req.body.user)) {
    const user = await Profile.findOne({ user: req.body.user }).exec();
    user.matches.push(req.body.likedUser);
    await user.save();

    const likedProfile = await Profile.findOne({
      user: req.body.likedUser,
    }).exec();
    likedProfile.matches.push(req.body.user);
    await likedProfile.save();
  }
});

// dislike profile
router.post("/profile/dislike", async (req, res) => {
  //add user email to rejection

  const dislikedUser = await Profile.findOne({
    user: req.body.dislikedUser,
  }).exec();

  dislikedUser.rejections.push(req.body.user);
  await dislikedUser.save();
  res.send("test");
});

module.exports = router;
