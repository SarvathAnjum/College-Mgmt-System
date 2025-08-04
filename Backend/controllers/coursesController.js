const Courses = require("../model/Courses");
const Departments = require("../model/Departments");

const getCoursesByDepartment = async (req, res) => {
  const { deptId } = req.params;
  if (!deptId) {
    return res.status(400).json({ message: "Department ID is required" });
  }

  try {
    const department = await Departments.findOne({ deptId }).exec();
    console.log(department);
    if (!department) {
      return res
        .status(404)
        .json({ message: `Department not found for deptId: ${deptId}` });
    }

    const courses = await Courses.find({
      departmentId: department._id,
    }).exec();
    console.log(courses);
    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found for this department" });
    }

    res.status(200).json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createMultipleCourses = async (req, res) => {
  const courses = req.body;

  if (!Array.isArray(courses) || courses.length === 0) {
    return res.status(400).json({ message: "Course array is required" });
  }

  try {
    // Step 1: Get all departments and create map: { DEPT001: ObjectId(...) }
    const departments = await Departments.find({}, "deptId _id");
    const deptMap = {};
    departments.forEach((dept) => {
      deptMap[dept.deptId] = dept._id;
    });
    console.log(deptMap)

    // Step 2: Replace departmentId string with actual ObjectId
    const updatedCourses = courses.map((course) => {
      const deptObjectId = deptMap[course.departmentId];
      if (!deptObjectId) throw new Error(`Invalid departmentId: ${course.departmentId}`);
      return {
        ...course,
        departmentId: deptObjectId,
      };
    });

    // Step 3: Insert courses
    const result = await Courses.insertMany(updatedCourses, { ordered: false });
    res.status(200).json(result);
  } catch (err) {
    console.error("InsertMany Error:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCoursesByDepartment,
  createMultipleCourses,
};
