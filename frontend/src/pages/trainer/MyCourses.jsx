import courses, { trainerCourses } from "../../data/courses";
import PageHeader from "../../components/PageHeader";

import "../../css/TrainerMyCourses.css";

function MyCourses() {
  return (
    <div className="trainer-my-courses">
      <PageHeader
        title="My Courses"
        description="Manage the courses you have created."
      />

      <div className="trainer-courses-grid">
        {trainerCourses.map((item) => {
          const course = courses.find((course) => course.id === item.courseId);

          return (
            <div className="trainer-manage-card" key={item.courseId}>
              <h2>{course.title}</h2>

              <p>Category: {course.category}</p>

              <p>Level: {course.level}</p>

              <p>Learners: {item.learners}</p>

              <p>Status: {item.status}</p>

              <button>Manage Course</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyCourses;
