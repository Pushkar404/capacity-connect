const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of modern web development.",
    },
    {
      id: 2,
      title: "Leadership Skills",
      description: "Develop effective leadership and communication skills.",
    },
  ]);
});

module.exports = router;
