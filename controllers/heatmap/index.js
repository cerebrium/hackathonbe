var express = require("express");
var router = express.Router();
import { Heatmap } from "../models/heatmap";

//get heatmaps
router.get("/", function (req, res) {
  res.send("heatmap controller");
});

//get heatmaps by user
router.get("/heatmaps/:userId", function (req, res) {
  const heatmaps = await Heatmap.find({ user: req.body.userId });
  if (!heatmaps) {
    res.status(404).send("No heatmaps found");
  } else {
    res.send(heatmaps);
  }
});

//get heatmaps by match
router.get("/heatmaps/match/:userId", function (req, res) {
  // Find where user matches this user && viewer matches param user
  const userId = req.body.userId;
  const viewerId = req.body.viewerId;
  const heatmap = await Heatmap.find({
    $and: [{ user: userId }, { viewer: viewerId }],
  });

  if (!heatmap) {
    res.status(404).send("No heatmap found");
  } else {
    res.json(heatmap);
  }
});

// Save a heatmap
router.post("/heatmaps", async (req, res) => {
  const heatmap = new Heatmap(req.body);
  await heatmap.save();
  res.send("saved");
});

// Delete a heatmap
router.delete("/heatmaps/:id", async (req, res) => {
  try {
    await Heatmap.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
