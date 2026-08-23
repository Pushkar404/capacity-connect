import { trainerProfile } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/TrainerProfile.css";

function Profile() {
  return (
    <div className="trainer-profile">
      <PageHeader
        title="Trainer Profile"
        description="View your trainer information and teaching statistics."
      />

      <section className="trainer-profile-card">
        <h2>{trainerProfile.name}</h2>

        <p>
          <strong>Email:</strong> {trainerProfile.email}
        </p>

        <p>
          <strong>Role:</strong> {trainerProfile.role}
        </p>

        <p>
          <strong>Department:</strong> {trainerProfile.department}
        </p>

        <p>
          <strong>Organization:</strong> {trainerProfile.organization}
        </p>
      </section>

      <section>
        <h2>Teaching Statistics</h2>

        <div className="trainer-profile-stats">
          <div>
            <h3>Courses Created</h3>
            <p>{trainerProfile.coursesCreated}</p>
          </div>

          <div>
            <h3>Total Learners</h3>
            <p>{trainerProfile.totalLearners}</p>
          </div>

          <div>
            <h3>Assessments Created</h3>
            <p>{trainerProfile.assessmentsCreated}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Expertise</h2>

        <div className="trainer-expertise">
          {trainerProfile.expertise.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
