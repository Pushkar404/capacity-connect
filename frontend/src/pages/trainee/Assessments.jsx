import courses, { upcomingAssessments } from "../../data/courses";

import "../../css/Assessments.css";

function Assessments() {
  return (
    <div className="assessments">
      <h1>Assessments</h1>

      <p>View your upcoming assessments and tests.</p>

      <div className="assessment-list">
        {upcomingAssessments.map((assessment) => {
          const course = courses.find(
            (course) => course.id === assessment.courseId,
          );

          return (
            <div className="assessment-card" key={assessment.id}>
              <h2>{assessment.title}</h2>

              <p>
                <strong>Course:</strong> {course.title}
              </p>

              <p>
                <strong>Date:</strong> {assessment.date}
              </p>

              <p>
                <strong>Duration:</strong> {assessment.duration}
              </p>

              <p>
                <strong>Questions:</strong> {assessment.questions}
              </p>

              <p>
                <strong>Status:</strong> {assessment.status}
              </p>

              <button>View Assessment</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Assessments;
