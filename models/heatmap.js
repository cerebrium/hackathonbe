import { model, Schema } from "mongoose";
var mongoosePaginate = require("mongoose-paginate");

const options = {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
};

var UserSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  viewer: {
    type: String,
    required: true,
  },
  heatmap: {
    type: [Number],
    required: true,
  },
  options,
});

UserSchema.plugin(mongoosePaginate);

export var User = model("User", UserSchema);
