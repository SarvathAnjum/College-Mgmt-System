const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.route("/").post(coursesController.createMultipleCourses);

router.route("/:deptId").get(coursesController.getCoursesByDepartment);

module.exports = router;
