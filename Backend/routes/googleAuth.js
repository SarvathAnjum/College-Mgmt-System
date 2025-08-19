const express = require("express");
const passport = require("passport");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}`);
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(`${process.env.FRONTEND_URL}`);
  });
});

router.get("/user", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const name = req.user.name.givenName;
  const emailId = req.user.emails[0].value;
  try {
    // For OAuth login, usually req.user will have email / id from provider
    const foundUser = await User.findOne({ username: name }).exec();
    if (!foundUser) {
      // User doesn't exist in DB
      return res.status(403).json({ message: "User not registered in system" });
    }

    // ✅ User exists → Generate JWT tokens
    const roles = [foundUser.roles]; // same as in your handleLogin
    const profilePic = req.user.photos[0].value;
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

    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );

    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const UserInfo = {
      ...foundUser._doc,
      rolename: roles == 1 ? "Admin" : roles == 2 ? "User" : "",
      profilePic: profilePic,
    };
    res.json({ accessToken, UserInfo });
  } catch (err) {
    console.error("Error verifying user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;
