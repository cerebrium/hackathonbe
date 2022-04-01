const { model, Schema } = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var HeatmapSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  viewer: {
    type: String,
    required: true,
  },
  heatmap: {
    type: [
      {
        x: Number,
        y: Number,
        r: Number,
        color: String,
      },
    ],
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  },
});

HeatmapSchema.plugin(mongoosePaginate);

module.exports.Heatmap = model("Heatmap", HeatmapSchema);
