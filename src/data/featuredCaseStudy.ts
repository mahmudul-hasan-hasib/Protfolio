export type FeaturedCaseStudyType = {
  badge: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  metrics: {
    value: string;
    label: string;
  }[];
  sections: {
    heading: string;
    content: string;
  }[];
  techStack: string[];
  result: string;
};

export const featuredCaseStudy: FeaturedCaseStudyType = {
  badge: "Machine Learning",
  title: "Customer Churn Prediction System",
  description:
    "Production-ready ML system that predicts customer churn with strong model performance, exposed through a RESTful API and structured for real-world business integration.",

  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",

  liveUrl: "#",
  githubUrl: "#",

  metrics: [
    { value: "89%", label: "Model Accuracy" },
    { value: "92%", label: "Precision Score" },
    { value: "7K+", label: "Records Analyzed" },
    { value: "<100ms", label: "API Response" },
  ],

  sections: [
    {
      heading: "Problem Statement",
      content:
        "A telecom business needed a way to identify customers likely to churn so retention efforts could be prioritized and revenue loss reduced.",
    },
    {
      heading: "Dataset",
      content:
        "The solution was built on 7,000+ customer records with structured features such as service usage, subscription patterns, customer profile data, and churn history.",
    },
    {
      heading: "Approach",
      content:
        "I performed data cleaning, feature engineering, model training, and evaluation using Scikit-learn and XGBoost. The final workflow was integrated into a Django REST API with database support and production-oriented backend structure.",
    },
  ],

  techStack: [
    "Python",
    "Scikit-learn",
    "XGBoost",
    "Django REST Framework",
    "PostgreSQL",
    "Redis",
    "Celery",
  ],

  result:
    "The project demonstrates an end-to-end ML workflow from data preprocessing and model development to backend integration and deployment-ready API architecture, making it suitable for real business use cases.",
};