import { adminStats, adminActivity } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/AdminDashboard.css";

function Dashboard() {
  return (
    <div className="admin-dashboard">
      <PageHeader
        title="Admin Dashboard"
        description="Overview of the Capacity Connect platform."
      />

      <section className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <p>{adminStats.totalUsers}</p>
        </div>

        <div className="admin-stat-card">
          <h3>Total Learners</h3>
          <p>{adminStats.totalLearners}</p>
        </div>

        <div className="admin-stat-card">
          <h3>Total Trainers</h3>
          <p>{adminStats.totalTrainers}</p>
        </div>

        <div className="admin-stat-card">
          <h3>Total Courses</h3>
          <p>{adminStats.totalCourses}</p>
        </div>
      </section>

      <section>
        <h2>Recent Platform Activity</h2>

        <div className="admin-activity">
          {adminActivity.map((activity) => (
            <div className="admin-activity-item" key={activity.id}>
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
