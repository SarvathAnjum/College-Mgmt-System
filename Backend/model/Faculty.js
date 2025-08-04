const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
  name: String,
  email: String,
  phone: String,
  departmentId: ObjectId, // Reference to Departments
  designation: String,
  coursesTaught: [ObjectId], // References to Courses
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Faculty", FacultySchema);