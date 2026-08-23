import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicLayout from "./layouts/PublicLayout";
import TraineeDashboard from "./pages/trainee/Dashboard";
import TraineeCourses from "./pages/trainee/Courses";
import TraineeMyCourses from "./pages/trainee/MyCourses";
import TraineeAssessments from "./pages/trainee/Assessments";
import TraineeProfile from "./pages/trainee/Profile";
import TraineeLayout from "./layouts/TraineeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/trainee" element={<TraineeLayout />}>
            <Route index element={<TraineeDashboard />} />
            <Route path="courses" element={<TraineeCourses />} />
            <Route path="my-courses" element={<TraineeMyCourses />} />
            <Route path="assessments" element={<TraineeAssessments />} />
            <Route path="profile" element={<TraineeProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
