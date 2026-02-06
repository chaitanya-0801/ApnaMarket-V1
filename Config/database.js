const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to DB");
    }
    catch (error)
    {
        console.error(error);
    }
}

module.exports=connectDB
