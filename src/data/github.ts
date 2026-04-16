export type GithubStatsType = {
  contributions: number;
  repositories: number;
  stars: number;
};

export type RepositoryType = {
  id: string;
  name: string;
  desc: string;
  lang: string;
  stars: number;
  url: string;
};

export const githubStats: GithubStatsType = {
  contributions: 150,
  repositories: 25,
  stars: 15,
};

export const topRepositories: RepositoryType[] = [
  {
    id: "online-shopping-platform",
    name: "online-shopping-platform",
    desc: "A full-stack e-commerce project with backend-driven workflows and practical business logic.",
    lang: "Python",
    stars: 8,
    url: "https://github.com/your-username/online-shopping-platform",
  },
  {
    id: "django-blog-project",
    name: "django-blog-project",
    desc: "A Django-based blog application with clean CRUD flow, authentication, and structured backend logic.",
    lang: "Python",
    stars: 5,
    url: "https://github.com/your-username/django-blog-project",
  },
  {
    id: "bostonhousepricing",
    name: "bostonhousepricing",
    desc: "A machine learning project focused on data preprocessing, analysis, and predictive modeling.",
    lang: "Python",
    stars: 4,
    url: "https://github.com/your-username/bostonhousepricing",
  },
  {
    id: "student-management",
    name: "Student_Management_C_Project",
    desc: "A management system project for handling structured records and application workflows.",
    lang: "C",
    stars: 2,
    url: "https://github.com/your-username/Student_Management_C_Project",
  },
];