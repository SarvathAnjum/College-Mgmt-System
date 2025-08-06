const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users Found." });
  res.json(users);
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = await User.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
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
    // Send authorization roles and access token to username
    res.json({ accessToken, UserInfo });
  } else {
    res.status(401).json({ message: "You are not authorised!" });
  }
};

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  //check for duplicate usernames in db
  const duplicate = await User.findOne({ username: username }).exec();

  if (duplicate) return res.sendStatus(409);

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new username
    const result = await User.create({
      username: username,
      password: hashedPwd,
    });

    res.status(201).json({ success: `New username ${username} !` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { handleLogin, handleNewUser,getAllUsers };
