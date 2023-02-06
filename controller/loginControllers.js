const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
console.log('hiiiiiiiiiiiiii');
const login = async (req, res) => {
  try {
    console.log('id*****************')
    const { email, password } = req.body;
    console.log('id is********',email,password)
    let user = await userSchema.findOne({ email: email });
    console.log(user)
    bcrypt.compare(password, user.password, function (err, result) {
        console.log('********************')
      if (result === true) {
        var token =  jwt.sign(
          { email: user.email, id: user._id, firstName: user.firstName },
          process.env.SECRETKEY
        );
        res.json({
          message: "login in",
          token,
        });
      } else {
        res.json({
          message: "login in Error",
          error: err,
        });
      }
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports = login;
