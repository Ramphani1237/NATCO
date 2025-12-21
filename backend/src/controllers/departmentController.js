const Department = require("../models/Department");

// CREATE DEPARTMENT
exports.createDepartment = async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ message: "Department name required" });

  const dept = await Department.create({ name });
  res.json(dept);
};

// GET ALL DEPARTMENTS
exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};
