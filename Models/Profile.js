const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    ShopName: {
        type:String,
    },
    PhoneNo: {
        type:Number,
    }
})

const ProfileModel = mongoose.model("Profile", ProfileSchema)
module.exports=ProfileModel