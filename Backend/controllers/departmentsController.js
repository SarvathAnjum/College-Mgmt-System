const Departments = require("../model/Departments");

const getAllDepartments = async (req, res) => {
  const departments = await Departments.find();
  if (!departments)
    return res.status(204).json({ message: "No departments Found." });
  res.json(departments);
};

const createNewDept = async (req, res) => {
  if (!req.body.deptId || !req.body.deptName) {
    return res
      .status(400)
      .json({ message: "Dept Id and name are required" });
  }

  try {
    const result = await Departments.create({
      deptId: req.body.deptId,
      deptName: req.body.deptName,
      headOfDepartment: req.body.headOfDepartment,
      deptEmail: req.body.deptEmail,
      deptPhone: req.body.deptPhone,
    });

    res.status(201).json(result); // 201 = created
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDepartments,
  createNewDept
};
