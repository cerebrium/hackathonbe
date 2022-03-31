import { model, Schema } from "mongoose";
import { emailValidator } from "./validators/email-validator";
var mongoosePaginate = require("mongoose-paginate");

const options = {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
};

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: emailValidator,
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
  pictures: {
    type: [String],
    required: true,
  },
  likes: {
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
  options,
});

UserSchema.plugin(mongoosePaginate);

export var User = model("User", UserSchema);
