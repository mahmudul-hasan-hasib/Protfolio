export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: ProjectType[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, authentication, cart flow, and backend-driven business logic for scalable online shopping experiences.",
    image: "/images/projects/ecommerce.jpg",
    tech: ["Django", "React.js", "PostgreSQL", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "django-blog",
    title: "Django Blog System",
    description:
      "A content-focused web application with clean backend architecture, CRUD functionality, authentication, and structured database design for blog publishing workflows.",
    image: "/images/projects/blog.jpg",
    tech: ["Python", "Django", "SQLite", "HTML/CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description:
      "A machine learning project that analyzes housing data, performs preprocessing and feature engineering, and predicts prices using regression-based modeling techniques.",
    image: "/images/projects/house-price.jpg",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "student-management",
    title: "Student Management System",
    description:
      "A backend-driven management system for handling student records, structured data operations, and administrative workflows with a clean application structure.",
    image: "/images/projects/student-management.jpg",
    tech: ["Python", "Django", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
];