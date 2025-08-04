const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamsSchema = new Schema({
  name: String,
  courseId: ObjectId, // Reference to Courses
  date: Date,
  maxMarks: Number,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Exams", ExamsSchema);
