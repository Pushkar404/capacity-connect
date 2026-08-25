import { useState } from "react";

import { adminCourses } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/AdminCourses.css";

function Courses() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  console.log("ADMIN COURSES:", adminCourses);

  const filteredCourses = adminCourses.filter((course) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.trainer.toLowerCase().includes(searchTerm) ||
      course.status.toLowerCase().includes(searchTerm) ||
      course.learners.toString().includes(searchTerm);

    const matchesStatus = status === "All" || course.status === status;

    return matchesSearch && matchesStatus;
  });
  console.log("FILTERED COURSES:", filteredCourses);

  return (
    <div className="admin-courses">
      <PageHeader
        title="Courses"
        description="Manage all courses available on the platform."
      />

      <div className="course-filters">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      <div className="courses-table-container">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Trainer</th>
              <th>Learners</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>

                <td>{course.trainer}</td>

                <td>{course.learners}</td>

                <td>{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
