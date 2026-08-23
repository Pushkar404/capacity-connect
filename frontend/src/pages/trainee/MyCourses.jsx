import courses, { myCourses } from "../../data/courses";
import CourseCard from "../../components/CourseCard";

import "../../css/MyCourses.css";
import PageHeader from "../../components/PageHeader";

function MyCourses() {
  return (
    <div className="my-courses">
      <PageHeader
        title="My Courses"
        description="Courses you are currently enrolled in."
      />

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
