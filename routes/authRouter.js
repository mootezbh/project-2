const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { join } = require("path");
const URL = process.env.URL;
let refreshtokens = [];
module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          token = jwt.sign(
            { id: user._id, role: user.__t },
            process.env.SECRET,
            { expiresIn: "50s" }
          );
          refreshtoken = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: "10m",
          });
          refreshtokens.push(refreshtoken);
          res.status(200).json({
            message: "auth successful",
            success: true,
            token: token,
            refresh_token: refreshtoken,
          });
        } else {
          res.status(404).json({
            message: "Wrong username or password.",
            success: false,
          });
        }
      } else {
        res.status(404).json({
          message: "Wrong username or password.",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  },
  verify: async (req, res) => {
    try {
      user = await User.findOne({ verf_code: req.params.code });
      user.verified = true;
      user.verf_code = undefined;
      user.save();
      res.sendFile(join(__dirname, "../views/success.html"));
    } catch (error) {
      res.sendFile(join(__dirname, "../views/fail.html"));
    }
  },
};
