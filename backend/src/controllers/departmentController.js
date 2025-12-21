const Department = require("../models/Department");

// CREATE DEPARTMENT
exports.createDepartment = async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res.status(400).json({ message: "Department name required" });

  const link = `http://localhost:3000/register/department/${Date.now()}`; // or use id after save

  const dept = await Department.create({ name, link });
  // Update link with id
  dept.link = `http://localhost:3000/register/department/${dept._id}`;
  await dept.save();

  res.json(dept);
};

// GET ALL DEPARTMENTS
exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};
