const model = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Login = async (req, res) => {
   try {
      const { username, password } = req.body;
      if (!username || !password) {
         res.status(400).json("Username and Password are required");
         return
      }
      const user = await model.findOne({ $or: [{ username }, { email: username }] })
      if (!user) {
         res.status(404).json("User Doesn't Exist");
         return
      }
      if (! await bcrypt.compare(password, user.password)) {
         res.status(400).json("Incorrect Password")
         return
      }
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY)
      res.status(200).json(token);
   } catch (err) {
      res.status(400).json(err);
   }
}

module.exports = {
   Login
}