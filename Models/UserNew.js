const mongoose = require('mongoose');

const UserFull = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile",
        required:true,
    },
    isEmailVerified: {
        type: String,
        required: true,
        enum:['Yes','No'],
    }
})

const UserFullModel =  mongoose.model("FullUser", UserFull)
module.exports=UserFullModel