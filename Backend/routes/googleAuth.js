const express = require("express");
const passport = require("passport");
const router = express.Router();

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

router.get("/user", (req, res) => {
  console.log("🔍 Session:", req.session);
  console.log("🔍 User:", req.user);

  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.status(200).json(req.user);
});

router.get("/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;
