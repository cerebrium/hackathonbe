var express = require("express");
var router = express.Router();

//get heatmaps
router.get("/", function (req, res) {
  res.send("heatmap controller");
});

//get heatmaps by user
router.get("/heatmaps/:userId", function (req, res) {
  res.send("heatmaps page");
});

//get heatmaps by match
router.get("/heatmaps/match/:userId", function (req, res) {
  res.send("heatmaps by match page");
});

module.exports = router;
