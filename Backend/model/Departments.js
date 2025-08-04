const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentsSchema = new Schema(
  {
    deptId: {
      type: String,
      required: true,
      unique: true
    },
    deptName: {
      type: String,
      required: true,
      unique: true
    },
    headOfDepartment: {
      type: String,
      required: true
    },
    deptEmail: {
      type: String,
      required: true,
      unique: true
    },
    deptPhone: {
      type: String,
      required: true
    }
  },
);

module.exports = mongoose.model("Department", DepartmentsSchema);
