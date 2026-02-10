const mongoose = require('mongoose');

const NewAccountSchema = new mongoose.Schema({
    accountType: {
        type: String,
        required: true,
        enum:["ShopOwner","User"],
    },
    email: {
        required: true,
        type: String,
        unique:true,
    },
    password: {
        required: true,
        type:String,
    },
    firstName: {
        required: true,
        type:String,
    },
    lastName: {
        required: true,
        type:String,
    },
    additional: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const NewAccountModel = mongoose.model('NewUserAccount', NewAccountSchema)
module.exports=NewAccountModel