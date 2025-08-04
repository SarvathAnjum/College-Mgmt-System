const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsController");

router
  .route("/")
  .get(departmentsController.getAllDepartments)
  .post(departmentsController.createNewDept);

module.exports = router;
