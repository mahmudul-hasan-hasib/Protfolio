import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Code2, Database, Brain, Layers, GitBranch, Terminal, Layout, Server, FileJson, Box, CheckCircle, TrendingUp, Calendar, Briefcase } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillCategories = [
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Python", "Django", "Django REST Framework", "FastAPI"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "Docker", "GitHub Actions", "AWS", "Linux"]
    }
  ];

  const projects = [
    {
      title: "Customer Churn Prediction API",
      description: "Production-ready REST API for predicting customer churn using ML models with 89% accuracy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["Python", "Django", "Scikit-learn", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Backend Platform",
      description: "Scalable Django REST API with user authentication, payment integration, and order management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tech: ["Django", "DRF", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis tool for social media data with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tech: ["Python", "NLP", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Image Classification Service",
      description: "Deep learning model deployed as microservice for classifying images with 94% accuracy.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      tech: ["PyTorch", "FastAPI", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const timeline = [
    {
      period: "2025 - Present",
      title: "Machine Learning Projects",
      description: "Building end-to-end ML pipelines for real-world problems including predictive models and NLP applications.",
      type: "project"
    },
    {
      period: "2024 - 2025",
      title: "Backend Development Internship",
      description: "Developed RESTful APIs using Django and PostgreSQL, improving response times by 40%.",
      type: "experience"
    },
    {
      period: "2023 - 2024",
      title: "Python & Data Science Learning",
      description: "Completed comprehensive courses in Python, Machine Learning, and Deep Learning fundamentals.",
      type: "learning"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050014] text-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-25 blur-[130px]"
          style={{ background: 'radial-gradient(circle, #1e40af 0%, #7c3aed 100%)' }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[-15%] w-[600px] h-[600px] rounded-full opacity-25 blur-[110px]"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, #1e40af 100%)' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-[50%] left-[40%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, #a855f7 100%)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#050014]/90 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">MH</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-7">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors text-sm">Home</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors text-sm">About</button>
                <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors text-sm">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors text-sm">Projects</button>
                <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition-colors text-sm">Experience</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors text-sm">Contact</button>
              </div>

              <div className="hidden lg:block">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 text-sm font-medium">
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden border-t border-white/5 bg-[#050014]/95 backdrop-blur-md"
            >
              <div className="px-6 py-4 space-y-3">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-blue-400 transition-colors">Contact</button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-full justify-center mt-4">
                  <Download size={18} />
                  <span>Download CV</span>
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-full mb-6"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Open to opportunities</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">MH</span>
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Python Developer | ML Engineer | Fullstack Developer
                </h2>

                <p className="text-base md:text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                  Specializing in building scalable backend systems, RESTful APIs, and machine learning solutions.
                  Experienced in Django, Python, and modern ML frameworks with a focus on delivering production-ready applications.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 font-medium text-sm"
                  >
                    View Projects
                  </button>
                  <button className="px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-2 text-sm">
                    <Download size={18} />
                    Download CV
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 font-medium text-sm"
                  >
                    Contact Me
                  </button>
                </div>
              </motion.div>

              {/* Right Content - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-1 shadow-[0_0_70px_rgba(59,130,246,0.5)]">
                    <div className="w-full h-full rounded-full bg-[#050014] p-2">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 blur-3xl -z-10"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Backend Development</h3>
                  <p className="text-white/70 leading-relaxed">
                    Expertise in Python and Django for building scalable REST APIs, authentication systems,
                    and complex backend architectures with PostgreSQL and Redis.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Machine Learning</h3>
                  <p className="text-white/70 leading-relaxed">
                    Building predictive models and ML pipelines using Scikit-learn, TensorFlow, and PyTorch.
                    Experience with NLP, computer vision, and deploying models to production.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-base text-white/80 leading-relaxed mb-4">
                  I'm a Python developer and junior ML engineer with a problem-solving mindset and passion for building
                  real-world applications. My experience spans from developing RESTful APIs and fullstack web applications
                  to creating machine learning models for classification, regression, and NLP tasks.
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  I focus on writing clean, maintainable code and deploying production-ready solutions. Whether it's
                  optimizing database queries, implementing authentication systems, or fine-tuning ML models, I enjoy
                  the challenge of solving complex problems with elegant solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Case Study</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
                  <div>
                    <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
                      <span className="text-blue-400 text-sm font-medium">Machine Learning</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Customer Churn Prediction System
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Production-ready ML system that predicts customer churn with 89% accuracy, deployed as
                      a RESTful API with Django and integrated into business workflows.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">PROBLEM STATEMENT</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Telecom company needed to identify customers at risk of leaving to reduce revenue loss
                          and improve retention strategies.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">DATASET</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          7,000+ customer records with 20 features including usage patterns, service plans,
                          customer demographics, and historical churn data.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">APPROACH</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Implemented Random Forest and XGBoost models with feature engineering, SMOTE for class
                          imbalance, and hyperparameter tuning. Built Django REST API with caching and authentication.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                        alt="Dashboard Preview"
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold text-blue-400 mb-1">89%</div>
                        <div className="text-sm text-white/60">Model Accuracy</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold text-purple-400 mb-1">92%</div>
                        <div className="text-sm text-white/60">Precision Score</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold text-blue-400 mb-1">7K+</div>
                        <div className="text-sm text-white/60">Records Analyzed</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold text-purple-400 mb-1">&lt;100ms</div>
                        <div className="text-sm text-white/60">API Response</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-sm font-medium text-blue-400 mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "Scikit-learn", "XGBoost", "Django REST Framework", "PostgreSQL", "Docker", "AWS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-0.5" size={20} />
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-1">RESULT & IMPACT</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Deployed system now processes 500+ predictions daily, helping the retention team reduce
                          churn by 15% in the first quarter. API serves multiple internal applications with 99.8% uptime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Demo</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Other <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050014] to-transparent opacity-70" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{project.title}</h3>
                      <p className="text-white/70 mb-4 leading-relaxed text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-[#050014] transform -translate-x-1/2 z-10" />

                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-16 md:pl-0`}>
                        <div className="inline-block">
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
                            <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : 'md:flex-row'} flex-row`}>
                              <div className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
                                <span className="text-blue-400 text-xs font-medium">{item.period}</span>
                              </div>
                              {item.type === 'project' && <Briefcase size={16} className="text-purple-400" />}
                              {item.type === 'experience' && <TrendingUp size={16} className="text-blue-400" />}
                              {item.type === 'learning' && <Calendar size={16} className="text-green-400" />}
                            </div>
                            <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alternating layout on desktop */}
                      <div className="hidden md:block flex-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* GitHub Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                GitHub <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Activity</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                  <GitBranch className="mx-auto mb-3 text-blue-400" size={32} />
                  <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                  <div className="text-white/60 text-sm">Contributions</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                  <Code2 className="mx-auto mb-3 text-purple-400" size={32} />
                  <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-white/60 text-sm">Repositories</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                  <Github className="mx-auto mb-3 text-blue-400" size={32} />
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-white/60 text-sm">Stars Received</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Top Repositories</h3>
                <div className="space-y-4">
                  {[
                    { name: "ml-churn-prediction", desc: "Customer churn prediction with ML models", lang: "Python", stars: 8 },
                    { name: "django-ecommerce-api", desc: "Scalable e-commerce REST API", lang: "Python", stars: 5 },
                    { name: "sentiment-analyzer", desc: "NLP sentiment analysis tool", lang: "Python", stars: 3 }
                  ].map((repo, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <FileJson size={16} className="text-blue-400" />
                            <span className="font-medium">{repo.name}</span>
                          </div>
                          <p className="text-white/60 text-sm mb-3">{repo.desc}</p>
                          <div className="flex items-center gap-4 text-xs text-white/50">
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-blue-400 rounded-full" />
                              {repo.lang}
                            </span>
                            <span className="flex items-center gap-1">
                              ⭐ {repo.stars}
                            </span>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-white/40 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />

              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Open to opportunities · Available for hire</span>
                </div>
                <p className="text-white/70">Looking for a Python developer or ML engineer? Let's talk about your next project.</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <motion.a
                  href="mailto:hello@mh.dev"
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-xs mb-1">Email</p>
                    <p className="text-sm font-medium">hello@mh.dev</p>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Github size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-xs mb-1">GitHub</p>
                    <p className="text-sm font-medium">@mhdev</p>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Linkedin size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-xs mb-1">LinkedIn</p>
                    <p className="text-sm font-medium">MH</p>
                  </div>
                </motion.a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Send a Message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-white/70 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-white"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">MH</span>
                </div>
                <p className="text-white/50 text-sm">Python Developer | ML Engineer | Fullstack Developer</p>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/60 hover:text-blue-400 transition-colors" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href="#" className="text-white/60 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-white/60 hover:text-blue-400 transition-colors" aria-label="Email">
                  <Mail size={22} />
                </a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/50 text-sm">
              <p>© 2026 MH. Built with React, Tailwind CSS & Motion</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}