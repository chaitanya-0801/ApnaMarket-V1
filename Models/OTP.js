const mongoose = require("mongoose");

const otpSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
    lowercase: true,
  },
  otp: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});
const OTPModel = mongoose.model("otp", otpSchema);
module.exports = OTPModel;
