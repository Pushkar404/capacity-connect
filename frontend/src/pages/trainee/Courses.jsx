import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses";
import "../../css/Courses.css";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>

      <p>Explore available learning programs.</p>

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
