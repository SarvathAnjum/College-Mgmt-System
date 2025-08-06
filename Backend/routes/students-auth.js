const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router
  .post("/", authController.handleLogin)
  .get("/getAllUsers", authController.getAllUsers);
router.post("/addNewUser", authController.handleNewUser);

module.exports = router;
