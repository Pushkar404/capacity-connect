import courses, { myCourses } from "../../data/courses";
import CourseCard from "../../components/CourseCard";

import "../../css/MyCourses.css";

function MyCourses() {
  return (
    <div className="my-courses">
      <h1>My Courses</h1>

      <p>Courses you are currently enrolled in.</p>

      <div className="courses-grid">
        {myCourses.map((enrollment) => {
          const course = courses.find(
            (course) => course.id === enrollment.courseId,
          );

          return <CourseCard key={enrollment.courseId} course={course} />;
        })}
      </div>
    </div>
  );
}

export default MyCourses;
