import courses, { trainerAssessments } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/TrainerAssessments.css";

function Assessments() {
  return (
    <div className="trainer-assessments">
      <PageHeader
        title="Assessments"
        description="Create and manage assessments for your courses."
      />

      <button className="create-assessment-button">Create Assessment</button>

      <div className="trainer-assessment-list">
        {trainerAssessments.map((assessment) => {
          const course = courses.find(
            (course) => course.id === assessment.courseId,
          );

          return (
            <div className="trainer-assessment-card" key={assessment.id}>
              <h2>{assessment.title}</h2>

              <p>
                <strong>Course:</strong> {course.title}
              </p>

              <p>
                <strong>Questions:</strong> {assessment.questions}
              </p>

              <p>
                <strong>Duration:</strong> {assessment.duration}
              </p>

              <p>
                <strong>Status:</strong> {assessment.status}
              </p>

              <div className="assessment-actions">
                <button>Edit</button>

                <button>View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Assessments;
