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
});

HeatmapSchema.plugin(mongoosePaginate);

module.exports.Heatmap = model("Heatmap", HeatmapSchema);
