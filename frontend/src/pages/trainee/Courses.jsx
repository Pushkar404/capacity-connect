import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses";
import "../../css/Courses.css";
import PageHeader from "../../components/PageHeader";

function Courses() {
  return (
    <div>
      <PageHeader
        title="Courses"
        description="Explore available learning programs."
      />

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
