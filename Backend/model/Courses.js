const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoursesSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
      unique: true,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    courseCredits: {
      type: Number,
      required: true,
    },
    courseSemester: {
      type: Number,
      required: true,
    },
  },
);

module.exports = mongoose.model("Course", CoursesSchema);