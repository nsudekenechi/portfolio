const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            enum: ["kenechi"],
            unique: true
        },
        email: {
            type: String,
            required: true,
            enum: ["nsudekenechi2@gmail.com"],
            unique: true

        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("user", User);