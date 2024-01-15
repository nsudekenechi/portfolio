require("dotenv").config()
const express = require("express")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;

// Connecting to server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
