const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
//const { use } = require("../routes/userRoutes");
const saltRounds=10;

const updateUser = async (req, res) => {
  try {
    let id = req.id;
    console.log("id is ***********,",id);
    const { email, firstName, lastName, age, gender } = req.body;
    console.log(email)
    let user = await userSchema.findOne({_id:id});
    user.email = email ? email : user.email;
    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.age = age ? age : user.age;
    user.gender = gender ? gender : user.gender;

    let response = await user.save();
    res.json({
      message: "update User",
      
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const createUsers = async (req, res) => {
    try {
      const { email, firstName, lastName, age, gender, password } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (!err) {
            const createUser = new userSchema({
              email,
              firstName,
              lastName,
              age,
              gender,
              password: hash,
            });
            let response = await createUser.save();
            console.log('response of the data is: ',response);
            res.json({
              message: "getting all the user",
              data: response,
            });
          } else {
            res.json({
              message: err.message,
            });
          }
        });
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  
  module.exports ={createUsers,updateUser}
  