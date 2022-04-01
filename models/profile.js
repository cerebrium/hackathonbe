const { model, Schema } = require("mongoose");

const ProfileSchema = new Schema({
  user: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  pictures: {
    type: [String],
    default: [
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    ],
    required: false,
  },
  likes: {
    type: [String],
    required: false,
  },
  rejections: {
    type: [String],
    required: false,
  },
  matches: {
    type: [String],
    required: false,
  },
  heatmap: {
    type: [String],
    required: false,
  },
});

module.exports.Profile = model("Profile", ProfileSchema);
