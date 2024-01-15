const express = require("express");
const { Login } = require("../controller/user");
const router = express.Router()
router.route("/login").post(Login)
module.exports = router;