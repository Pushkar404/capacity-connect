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

export const trainerCourses = [
  {
    courseId: 1,
    learners: 42,
    status: "Published",
  },
  {
    courseId: 2,
    learners: 65,
    status: "Published",
  },
  {
    courseId: 3,
    learners: 38,
    status: "Draft",
  },
];

export const trainerActivity = [
  {
    id: 1,
    message: "Rahul enrolled in Operating Systems",
    time: "10 minutes ago",
  },
  {
    id: 2,
    message: "Priya completed Web Development assessment",
    time: "1 hour ago",
  },
  {
    id: 3,
    message: "Ankit enrolled in Database Management",
    time: "3 hours ago",
  },
];
export const trainerAssessments = [
  {
    id: 1,
    courseId: 1,
    title: "Operating Systems Assessment",
    questions: 20,
    duration: "30 minutes",
    status: "Published",
  },
  {
    id: 2,
    courseId: 2,
    title: "Web Development Quiz",
    questions: 15,
    duration: "20 minutes",
    status: "Draft",
  },
  {
    id: 3,
    courseId: 3,
    title: "Database Management Test",
    questions: 25,
    duration: "40 minutes",
    status: "Published",
  },
];

export const trainerProfile = {
  name: "Rahul Sharma",
  email: "rahul@example.com",
  role: "Trainer",
  department: "Computer Science",
  organization: "Capacity Connect",
  coursesCreated: 3,
  totalLearners: 145,
  assessmentsCreated: 3,
  expertise: ["Operating Systems", "Web Development", "Database Management"],
};
export const adminStats = {
  totalUsers: 250,
  totalLearners: 210,
  totalTrainers: 40,
  totalCourses: 12,
};

export const adminActivity = [
  {
    id: 1,
    message: "New user registered",
    time: "15 minutes ago",
  },
  {
    id: 2,
    message: "Operating Systems course was published",
    time: "1 hour ago",
  },
  {
    id: 3,
    message: "New assessment created",
    time: "2 hours ago",
  },
  {
    id: 4,
    message: "Trainer profile updated",
    time: "4 hours ago",
  },
];
export const adminUsers = [
  {
    id: 1,
    name: "Aman Kumar",
    email: "aman@example.com",
    role: "Trainee",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Trainer",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Trainee",
    status: "Active",
  },
  {
    id: 4,
    name: "Ankit Kumar",
    email: "ankit@example.com",
    role: "Trainer",
    status: "Inactive",
  },
];

export const adminCourses = [
  {
    id: 1,
    title: "Operating Systems",
    trainer: "Rahul Sharma",
    learners: 42,
    status: "Published",
  },
  {
    id: 2,
    title: "Web Development",
    trainer: "Ankit Kumar",
    learners: 65,
    status: "Published",
  },
  {
    id: 3,
    title: "Database Management",
    trainer: "Rahul Sharma",
    learners: 38,
    status: "Draft",
  },
  {
    id: 4,
    title: "Computer Networks",
    trainer: "Priya Singh",
    learners: 25,
    status: "Published",
  },
];
export const adminAnnouncements = [
  {
    id: 1,
    title: "New Training Program",
    message: "A new training program is now available on Capacity Connect.",
    audience: "All Users",
    date: "25 August 2026",
    status: "Published",
  },
  {
    id: 2,
    title: "Web Development Assessment",
    message: "The Web Development assessment will be available this week.",
    audience: "Trainees",
    date: "24 August 2026",
    status: "Published",
  },
  {
    id: 3,
    title: "Trainer Meeting",
    message:
      "All trainers are requested to attend the upcoming platform meeting.",
    audience: "Trainers",
    date: "23 August 2026",
    status: "Draft",
  },
];
export const competencyMappings = [
  {
    id: 1,
    course: "Operating Systems",
    competencies: ["Process Management", "Memory Management", "File Systems"],
  },
  {
    id: 2,
    course: "Web Development",
    competencies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    course: "Database Management",
    competencies: ["SQL", "Database Design", "Data Modeling"],
  },
  {
    id: 4,
    course: "Leadership Skills",
    competencies: ["Communication", "Team Management", "Decision Making"],
  },
];
