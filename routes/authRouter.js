const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const URL = process.env.URL;
// product push in provider
module.exports = {
    login: async (req,res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
              const cmp = await bcrypt.compare(req.body.password, user.password);
              if (cmp) {
                token = jwt.sign(
                  { id: user._id, role: user.__t},
                  process.env.SECRET,
                  { expiresIn: "50s" }
                );
                res.status(200).json({
                  message:"auth successful",
                  success:true,
                  token: token,
                });
              } else {
                res.status(404).json({
                  message:"Wrong username or password.",
                  success:false,
                });
              }
            } else {
              res.status(404).json({
                message:"Wrong username or password.",
                success:false,
              });
            }
          } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server error Occured");
          }
        

    }
}

