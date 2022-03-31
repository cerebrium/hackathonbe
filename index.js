require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./db/database");
const userController = require("./controllers/user/index.js");
const heatmapController = require("./controllers/heatmap/index.js");

// middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("backend"));
app.use(helmet());
app.use("/users", userController);
app.use("/heatmaps/", heatmapController);

mongoose.set("debug", true);

(async () => {
  db.connect();
})().catch((e) => {
  console.log(e);
  process.exit(1);
});

// middleware ended, app getting
app.get("/", function (req, res) {
  res.status(200).send("The backend is up and running");
});

// have it listen to the localhost port
var server = app.listen(process.env.PORT || 3001);

module.exports = server;
