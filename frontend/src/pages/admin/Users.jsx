import { useState } from "react";

import { adminUsers } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/AdminUsers.css";

function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = adminUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="admin-users">
      <PageHeader
        title="Users"
        description="Manage users registered on the platform."
      />

      <div className="user-search">
        <input
          type="text"
          placeholder="Search users by name..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="users-table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
