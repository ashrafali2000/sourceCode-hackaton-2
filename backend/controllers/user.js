const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecretKey = require("../constants")
//  Create User
const createUser = async (data) => {
  try {
    const hashPassword = await bcrypt.hash(data.password, 12);
    const user = new User({ ...data, password: hashPassword });
    const newUser = await user.save();
    const token = jwt.sign({_id:newUser._id, email: newUser.email},jwtSecretKey,{ expiresIn: '1h' })
    return ({message:"User Created Successfully", newUser ,token});
  } catch (err) {
    return "User Already Exist";
  }
};

// Login User
const loginUser = async (data) => {
  try {
    const { email, password } = data;
    // const userFound = await User.findOne({ email }).then(res => res.toObject());
    const userFound = await User.findOne({ email });
    if (userFound) {
      const comparePassword = await bcrypt.compare(
        password,
        userFound.password
      );
      if (comparePassword) {
        delete userFound.password;
        const token = jwt.sign({_id:userFound._id, email: userFound.email},"user!",{ expiresIn: '1h' })
        return ({message:"Login Successful", userFound, token});
      } else if (!comparePassword) {
        throw new Error("Incorrect Password");
      }
    }
    throw new Error("User not Found");
  } catch (err) {
    throw err;
  }
};
module.exports = { createUser, loginUser };
