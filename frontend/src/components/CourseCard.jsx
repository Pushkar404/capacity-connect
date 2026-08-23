function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>

      <p>Trainer: {course.trainer}</p>
      <p>Students: {course.students}</p>
      <p>Category: {course.category}</p>
      <p>Level: {course.level}</p>

      <button>View Course</button>
    </div>
  );
}

export default CourseCard;
