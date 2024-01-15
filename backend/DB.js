const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URL)
        console.log("DB connected...");
    } catch (err) {
        console.err(`Error Connecting to DB: ${err}`)
    }
}

module.exports = connectDB;
