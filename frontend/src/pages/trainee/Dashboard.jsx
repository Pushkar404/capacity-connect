import courses, {
  learningProgress,
  upcomingAssessments,
} from "../../data/courses";

import ProgressBar from "../../components/ProgressBar";

import "../../css/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Trainee Dashboard</h1>

      <p>Welcome back! Here's your learning overview.</p>

      <section className="stats">
        <div className="stat-card">
          <h3>Courses</h3>
          <p>{courses.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>2</p>
        </div>

        <div className="stat-card">
          <h3>Assessments</h3>
          <p>{upcomingAssessments.length}</p>
        </div>
      </section>

      <section>
        <h2>Continue Learning</h2>

        <div className="learning-list">
          {learningProgress.map((item) => {
            const course = courses.find(
              (course) => course.id === item.courseId,
            );

            return (
              <div className="learning-card" key={item.courseId}>
                <h3>{course.title}</h3>

                <p>
                  {item.completedLessons} of {item.totalLessons} lessons
                  completed
                </p>

                <ProgressBar progress={item.progress} />

                <p>{item.progress}% complete</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Upcoming Assessments</h2>

        {upcomingAssessments.map((assessment) => (
          <div className="assessment-card" key={assessment.id}>
            <h3>{assessment.title}</h3>

            <p>{assessment.date}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
