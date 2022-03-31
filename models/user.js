const { model, Schema } = require("mongoose");
//const { emailValidator } = require("./validators/email-validator");

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    //validate: emailValidator,
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
});

exports.User = model("User", UserSchema);
