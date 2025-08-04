const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentId: { type: Number, required: true },
  studentName: { type: String, required: true },
  roll: Number,
  birthday: Date,
  address: String,
});

module.exports = mongoose.model("Students", StudentSchema);
