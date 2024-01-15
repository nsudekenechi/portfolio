require("dotenv").config()
const express = require("express")
const app = express();
const cors = require("cors")
const connectDB = require("./DB")
const port = process.env.PORT || 3001;
const bcrypt = require("bcryptjs")
// Connecting DB
connectDB();
// Allowing cors from different api endpoints
app.use(cors())
// Allowing body to accept JSON
app.use(express.json());
// Allowing body to accept URL Encoded Data
app.use(express.urlencoded({ extended: false }))

// Api Routes
app.use("/api/user", require("./router/user"))
// Connecting to server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});
 