const express = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({
//     message: "USER ROUTE IS WORKING",
//   });
// });

// module.exports = router;
