const mongoose = require('mongoose')

const EmailLinkSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    link: {
        type: String,
        required: true,
    },
     createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
})

const EmailLinkModel = mongoose.model('EmailLink', EmailLinkSchema)
module.exports=EmailLinkModel