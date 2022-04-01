const express = require("express");
const router = express.Router();
const { Heatmap } = require("../../models/heatmap");

//get heatmaps
router.get("/", async (req, res) => {
  const heatmaps = await Heatmap.find();
  res.send("heatmap controller: ", heatmaps);
});

//get heatmaps by user
router.get("/:userId", async (req, res) => {
  const heatmaps = await Heatmap.find({ user: req.params.userId });
  if (!heatmaps) {
    res.status(404).send("No heatmaps found");
  } else {
    res.send(heatmaps);
  }
});

//get heatmaps by match
router.get("/match/:userId/:viewerId", async (req, res) => {
  // Find where user matches this user && viewer matches param user
  const userId = req.params.userId;
  const viewerId = req.params.viewerId;
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
router.post("/create", async (req, res) => {
  const body = req.body;
  try {
    const heatmap = new Heatmap(req.body);
    await heatmap.save();
    res.send("saved");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/create", async (req, res) => {
  // const heatmap = new Heatmap(req.body);
  // await heatmap.save();
  res.send("saved");
});

// Delete a heatmap
router.delete("/:id", async (req, res) => {
  try {
    await Heatmap.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
