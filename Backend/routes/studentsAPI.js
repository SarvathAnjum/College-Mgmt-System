const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const verifyRoles = require("../middleware/verifyRoles");
const Roles = require("../config/roles");

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(verifyRoles(Roles.Admin), studentController.createNewStudent)
  .put(verifyRoles(Roles.Admin), studentController.updateStudent)
  .delete(verifyRoles(Roles.Admin), studentController.deleteStudent);

router.route("/:studentId").get(studentController.getStudent);
module.exports = router;
