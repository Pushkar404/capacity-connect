import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>CAPACITY CONNECT</h1>

      <h2>Available Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
