export type TimelineItem = {
  id: string;
  type: "project" | "learning" | "experience";
  period: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    id: "ml-project",
    type: "project",
    period: "2025",
    title: "Machine Learning Projects",
    description:
      "Built multiple ML projects including churn prediction and price prediction systems using Scikit-learn, TensorFlow, and real-world datasets.",
  },
  {
    id: "backend-dev",
    type: "project",
    period: "2025",
    title: "Backend & API Development",
    description:
      "Developed REST APIs using Django and DRF with authentication, database design, and async task handling using Redis and Celery.",
  },
  {
    id: "fullstack",
    type: "project",
    period: "2025",
    title: "Full-Stack Development",
    description:
      "Built full-stack applications using React and Django, focusing on clean UI, API integration, and real-world functionality.",
  },
  {
    id: "learning-phase",
    type: "learning",
    period: "2024 - Present",
    title: "Continuous Learning",
    description:
      "Focused on improving problem-solving, data structures, backend architecture, and machine learning workflows through hands-on projects.",
  },
];