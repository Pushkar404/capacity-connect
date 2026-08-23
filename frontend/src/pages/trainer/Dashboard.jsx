import courses, { trainerCourses, trainerActivity } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/TrainerDashboard.css";

function Dashboard() {
  const totalLearners = trainerCourses.reduce(
    (total, course) => total + course.learners,
    0,
  );

  return (
    <div className="trainer-dashboard">
      <PageHeader
        title="Trainer Dashboard"
        description="Overview of your courses and learners."
      />

      <section className="trainer-stats">
        <div className="trainer-stat-card">
          <h3>My Courses</h3>
          <p>{trainerCourses.length}</p>
        </div>

        <div className="trainer-stat-card">
          <h3>Total Learners</h3>
          <p>{totalLearners}</p>
        </div>

        <div className="trainer-stat-card">
          <h3>Assessments</h3>
          <p>4</p>
        </div>
      </section>

      <section>
        <h2>My Courses</h2>

        <div className="trainer-course-list">
          {trainerCourses.map((item) => {
            const course = courses.find(
              (course) => course.id === item.courseId,
            );

            return (
              <div className="trainer-course-card" key={item.courseId}>
                <h3>{course.title}</h3>

                <p>Learners: {item.learners}</p>

                <p>Status: {item.status}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Recent Activity</h2>

        <div className="trainer-activity">
          {trainerActivity.map((activity) => (
            <div className="activity-item" key={activity.id}>
              <p>{activity.message}</p>

              <small>{activity.time}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
