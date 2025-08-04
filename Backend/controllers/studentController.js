const Students = require("../model/Students");

const getAllStudents = async (req, res) => {
  const students = await Students.find();
  if (!students) return res.status(204).json({ message: "No students Found." });
  res.json(students);
};

const createNewStudent = async (req, res) => {
  if (!req.body.studentId || !req.body.studentName)
    return res
      .sendStatus(400)
      .json({ message: "Students Id and name are required" });
  try {
    const result = await Students.create({
      studentId: req.body.studentId,
      studentName: req.body.studentName,
      roll: req.body.roll,
      birthday: new Date(req.body.birthday),
      address: req.body.address,
    });
    res.sendStatus(200).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateStudent = async (req, res) => {
  if (!req.body.studentId) {
    return res.sendStatus(400).json({ message: "Students ID is required" });
  }
  const studentToUpdate = await Students.findOne({
    studentId: req.body.studentId,
  }).exec(); //exec() gives a full Promise behavior especially in async await functions
  if (!studentToUpdate) {
    return res
      .sendStatus(204)
      .json({ message: `${req.body.studentId} does not exists to update ` });
  }
  if (req.body.studentId) studentToUpdate.studentId = req.body.studentId;
  if (req.body.studentName) studentToUpdate.studentName = req.body.studentName;
  if (req.body.roll) studentToUpdate.roll = req.body.roll;
  if (req.body.birthday) studentToUpdate.birthday = new Date(req.body.birthday);
  if (req.body.address) studentToUpdate.address = req.body.address;
  const result = await studentToUpdate.save();
  res.json(result);
};

const deleteStudent = async (req, res) => {
  if (!req.body.studentId) {
    return res.status(400).json({ message: "Students ID is required" });
  }
  const studentToDelete = await Students.findOne({
    studentId: req.body.studentId,
  }).exec();
  if (!studentToDelete) {
    return res
      .sendStatus(204)
      .json({ message: `${req.body.studentId} does not exists to update ` });
  }
  const result = await studentToDelete.deleteOne({
    studentId: req.body.studentId,
  });
  res.json(result);
};

const getStudent = async (req, res) => {
  const studentID = parseInt(req.params.studentId);
  if (!studentID) {
    return res
      .status(400)
      .json({ message: "Students ID Parameter is required" });
  }
  const student = await Students.findOne({
    studentId: studentID,
  }).exec();

  if (!student) {
    return res
      .status(404)
      .json({ message: `No student matches ID ${studentID} ` });
  }
  res.json(student);
};
module.exports = {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getStudent,
};
