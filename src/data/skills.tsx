import {
  BarChart3,
  Boxes,
  Brain,
  Database,
  Layout,
  Server,
  Terminal,
} from "lucide-react";
import { ReactNode } from "react";

export interface SkillCategory {
  title: string;
  icon: ReactNode; // ✅ FIXED (JSX.Element ❌)
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Server size={22} />,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST API Development",
      "JWT Authentication",
      "Celery",
      "Redis",
    ],
  },
  {
    title: "Frontend Development",
    icon: <Layout size={22} />,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Data Analysis & Visualization",
    icon: <BarChart3 size={22} />,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA (Exploratory Data Analysis)",
    ],
  },
  {
    title: "Machine Learning",
    icon: <Brain size={22} />,
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Model Training & Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Computer Vision",
    icon: <Boxes size={22} />,
    skills: [
      "OpenCV",
      "YOLO (Object Detection)",
      "Image Processing",
    ],
  },
  {
    title: "Databases",
    icon: <Database size={22} />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Tools & Environment",
    icon: <Terminal size={22} />,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Command Line",
      "Vite",
      "Deployment (Render/Vercel)",
    ],
  },
];