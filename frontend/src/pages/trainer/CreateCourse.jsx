import { useState } from "react";
import PageHeader from "../../components/PageHeader";

import "../../css/CreateCourse.css";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Computer Science");
  const [level, setLevel] = useState("Beginner");
  const [duration, setDuration] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      title,
      description,
      category,
      level,
      duration,
    });

    alert("Course created successfully!");
  }

  return (
    <div className="create-course">
      <PageHeader
        title="Create Course"
        description="Create a new learning course."
      />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Title</label>

          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter course title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter course description"
            rows="5"
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Computer Science</option>
            <option>Development</option>
            <option>Database</option>
            <option>Professional Skills</option>
          </select>
        </div>

        <div className="form-group">
          <label>Level</label>

          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Duration</label>

          <input
            type="text"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            placeholder="Example: 6 weeks"
          />
        </div>

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
}

export default CreateCourse;
