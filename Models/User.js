const mongoose = require('mongoose');
// const OTPModel = require("./OTP");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    otp: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "otp",  
    }
})

const UserModel = mongoose.model('UserKaModel', userSchema);
module.exports = UserModel;