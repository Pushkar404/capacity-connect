import { NavLink, Outlet } from "react-router-dom";
import "../css/TraineeLayout.css";

function TraineeLayout() {
  return (
    <div>
      <header className="trainee-header">
        <h2>CAPACITY CONNECT</h2>
      </header>

      <div className="trainee-container">
        <aside className="trainee-sidebar">
          <nav className="trainee-nav">
            <NavLink to="/trainee" end>
              Dashboard
            </NavLink>
            <NavLink to="/trainee/courses">Courses</NavLink>
            <NavLink to="/trainee/my-courses">My Courses</NavLink>
            <NavLink to="/trainee/assessments">Assessments</NavLink>
            <NavLink to="/trainee/profile">Profile</NavLink>
          </nav>
        </aside>

        <main className="trainee-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TraineeLayout;
