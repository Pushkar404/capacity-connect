import { NavLink, Outlet } from "react-router-dom";

import "../css/TrainerLayout.css";

function TrainerLayout() {
  return (
    <div>
      <header className="trainer-header">
        <h2>CAPACITY CONNECT</h2>
      </header>

      <div className="trainer-container">
        <aside className="trainer-sidebar">
          <nav className="trainer-nav">
            <NavLink to="/trainer" end>
              Dashboard
            </NavLink>

            <NavLink to="/trainer/courses">My Courses</NavLink>

            <NavLink to="/trainer/create-course">Create Course</NavLink>

            <NavLink to="/trainer/assessments">Assessments</NavLink>

            <NavLink to="/trainer/profile">Profile</NavLink>
          </nav>
        </aside>

        <main className="trainer-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TrainerLayout;
