const express = require("express");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api/courses", courseRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("CAPACITY CONNECT BACKEND IS RUNNING");
});

app.get("/api/health", (req, res) => {
  res.json({
    message: "Capacity Connect API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
