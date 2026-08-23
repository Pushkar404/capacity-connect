import { NavLink, Outlet } from "react-router-dom";

import "../css/AdminLayout.css";

function AdminLayout() {
  return (
    <div>
      <header className="admin-header">
        <h2>CAPACITY CONNECT</h2>
      </header>

      <div className="admin-container">
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <NavLink to="/admin" end>
              Dashboard
            </NavLink>

            <NavLink to="/admin/users">Users</NavLink>

            <NavLink to="/admin/courses">Courses</NavLink>

            <NavLink to="/admin/announcements">Announcements</NavLink>

            <NavLink to="/admin/competency-mapping">Competency Mapping</NavLink>
          </nav>
        </aside>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
