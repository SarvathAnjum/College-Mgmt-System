const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { username } = req.body;
  if (!username)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = await User.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  const roles = [foundUser.roles];

  // create JWTs
  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        roles: roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );

  const UserInfo = {
    ...foundUser._doc,
    rolename: roles == 1 ? "Admin" : roles == 2 ? "User" : "",
  };
  console.log("UserInfo", UserInfo);

  // Send authorization roles and access token to username
  res.json({ accessToken, UserInfo });
};
module.exports = { handleLogin };
