const Course = require("../models/Course");

// GET /api/courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("trainer", "name email");

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};

// GET /api/courses/:id
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "trainer",
      "name email",
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch course",
      error: error.message,
    });
  }
};

// POST /api/courses
const createCourse = async (req, res) => {
  try {
    const { title, description, subject, trainer, status } = req.body;

    const course = await Course.create({
      title,
      description,
      subject,
      trainer,
      status,
    });

    const result = await course.populate("trainer", "name email");

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create course",
      error: error.message,
    });
  }
};

// PUT /api/courses/:id
const updateCourse = async (req, res) => {
  try {
    const { title, description, subject, trainer, status } = req.body;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        subject,
        trainer,
        status,
      },
      {
        new: true,
        runValidators: true,
      },
    ).populate("trainer", "name email");

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update course",
      error: error.message,
    });
  }
};

// DELETE /api/courses/:id
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete course",
      error: error.message,
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
