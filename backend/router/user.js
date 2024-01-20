const express = require("express");
const { Login } = require("../controller/user");
const router = express.Router()
router.route("/").post(Login)
module.exports = router;