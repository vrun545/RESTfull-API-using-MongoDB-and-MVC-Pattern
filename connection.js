const mongoose = require("mongoose");

// Connecting with Databse
async function connectMongoDB(url) {
    return  mongoose.connect(url);
}

module.exports = { connectMongoDB };