import { traineeProfile } from "../../data/courses";

import "../../css/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>My Profile</h1>

      <section className="profile-card">
        <h2>{traineeProfile.name}</h2>

        <p>
          <strong>Email:</strong> {traineeProfile.email}
        </p>

        <p>
          <strong>Role:</strong> {traineeProfile.role}
        </p>

        <p>
          <strong>Department:</strong> {traineeProfile.department}
        </p>

        <p>
          <strong>Organization:</strong> {traineeProfile.organization}
        </p>
      </section>

      <section>
        <h2>Learning Statistics</h2>

        <div className="profile-stats">
          <div>
            <h3>Completed Courses</h3>
            <p>{traineeProfile.coursesCompleted}</p>
          </div>

          <div>
            <h3>Courses in Progress</h3>
            <p>{traineeProfile.coursesInProgress}</p>
          </div>

          <div>
            <h3>Assessments Completed</h3>
            <p>{traineeProfile.assessmentsCompleted}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          {traineeProfile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
