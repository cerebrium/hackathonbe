import { model, Schema } from "mongoose";
var mongoosePaginate = require("mongoose-paginate");

const options = {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
};

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
  options,
});

HeatmapSchema.plugin(mongoosePaginate);

export var Heatmap = model("Heatmap", HeatmapSchema);
