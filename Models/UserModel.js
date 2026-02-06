const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    required: true,
    type: String,
    lowercase: true,
  },
  password: {
    required: true,
    type: String,
  },
});

const AccountSchema = mongoose.model("account", accountSchema);
module.exports = AccountSchema;
