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
import TrainerLayout from "./layouts/TrainerLayout";

import TrainerDashboard from "./pages/trainer/Dashboard";
import TrainerMyCourses from "./pages/trainer/MyCourses";
import CreateCourse from "./pages/trainer/CreateCourse";
import TrainerAssessments from "./pages/trainer/Assessments";
import TrainerProfile from "./pages/trainer/Profile";

import AdminLayout from "./layouts/AdminLayout";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminCourses from "./pages/admin/Courses";
import AdminAnnouncements from "./pages/admin/Announcements";
import CompetencyMapping from "./pages/admin/CompetencyMapping";

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
        <Route path="/trainer" element={<TrainerLayout />}>
          <Route index element={<TrainerDashboard />} />

          <Route path="courses" element={<TrainerMyCourses />} />

          <Route path="create-course" element={<CreateCourse />} />

          <Route path="assessments" element={<TrainerAssessments />} />

          <Route path="profile" element={<TrainerProfile />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />

          <Route path="users" element={<AdminUsers />} />

          <Route path="courses" element={<AdminCourses />} />

          <Route path="announcements" element={<AdminAnnouncements />} />

          <Route path="competency-mapping" element={<CompetencyMapping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
