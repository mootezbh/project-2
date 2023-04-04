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
          let refreshtoken = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: "10m",
          });
          refreshtokens.push(refreshtoken);
          console.log("after login ", refreshtokens);
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
      res.status(500).send("Internal Server error Occurred");
    }
  },
  logout: async (req, res) => {
    try {
      let refreshtoken = req.body.refresh_token;
      refreshtokens = refreshtokens.filter((token) => token != refreshtoken);
      console.log("after logout :", refreshtokens);
      res.send("logged out");
    } catch (error) {
      res.send("error logging out");
      console.log(error);
    }
  },
  verify: async (req, res) => {
    try {
      const user = await User.findOne({ verf_code: req.params.code });
      user.verified = true;
      user.verf_code = undefined;
      user.save();
      //res.sendFile(join(__dirname, "../views/success.html"));
      res.sendFile(join(__dirname, "../views/success.html"));
    } catch (error) {
      res.sendFile(join(__dirname, "../views/fail.html"));
    }
  },
};
