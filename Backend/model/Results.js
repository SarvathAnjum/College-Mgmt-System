const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultsSchema = new Schema({
  studentId: ObjectId, // Reference to Students
  courseId: ObjectId, // Reference to Courses
  examId: ObjectId, // Reference to Exams
  marksObtained: Number,
  grade: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Results", ResultsSchema);
