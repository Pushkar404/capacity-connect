import { adminAnnouncements } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/AdminAnnouncements.css";

function Announcements() {
  return (
    <div className="admin-announcements">
      <PageHeader
        title="Announcements"
        description="Create and manage platform announcements."
      />

      <button className="create-announcement-button">
        + Create Announcement
      </button>

      <div className="announcement-list">
        {adminAnnouncements.map((announcement) => (
          <div className="announcement-card" key={announcement.id}>
            <h2>{announcement.title}</h2>

            <p>{announcement.message}</p>

            <div className="announcement-details">
              <span>Audience: {announcement.audience}</span>

              <span>Published: {announcement.date}</span>

              <span>Status: {announcement.status}</span>
            </div>

            <div className="announcement-actions">
              <button>Edit</button>

              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
