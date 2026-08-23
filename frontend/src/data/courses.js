const courses = [
  {
    id: 1,
    title: "Operating Systems",
    trainer: "Rahul Sharma",
    students: 42,
    category: "Computer Science",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Web Development",
    trainer: "Ankit Kumar",
    students: 65,
    category: "Development",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Database Management",
    trainer: "Priya Singh",
    students: 38,
    category: "Database",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Leadership Skills",
    trainer: "Neha Verma",
    students: 51,
    category: "Professional Skills",
    level: "Beginner",
  },
];

export default courses;

export const learningProgress = [
  {
    courseId: 1,
    progress: 72,
    completedLessons: 18,
    totalLessons: 25,
  },
  {
    courseId: 2,
    progress: 45,
    completedLessons: 9,
    totalLessons: 20,
  },
];

export const upcomingAssessments = [
  {
    id: 1,
    courseId: 1,
    title: "Operating Systems Assessment",
    date: "25 August 2026",
    duration: "30 minutes",
    questions: 20,
    status: "Upcoming",
  },
  {
    id: 2,
    courseId: 2,
    title: "Web Development Quiz",
    date: "28 August 2026",
    duration: "20 minutes",
    questions: 15,
    status: "Upcoming",
  },
];

export const myCourses = [
  {
    courseId: 1,
    progress: 72,
    status: "In Progress",
  },
  {
    courseId: 2,
    progress: 45,
    status: "In Progress",
  },
];

export const traineeProfile = {
  name: "Aman Kumar",
  email: "aman@example.com",
  role: "Trainee",
  department: "Computer Science",
  organization: "Capacity Connect",
  coursesCompleted: 2,
  coursesInProgress: 2,
  assessmentsCompleted: 5,
  skills: ["JavaScript", "React", "Node.js", "Database Management"],
};
