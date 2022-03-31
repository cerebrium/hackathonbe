const validator = require("validator");

export const emailValidator = {
  validator: function (v) {
    return validator.isEmail(v);
  },
  message: "{VALUE} is not a valid email",
};
