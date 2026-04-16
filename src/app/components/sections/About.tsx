import { Brain, Code2, Layers3 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>

              <h3 className="text-xl mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Backend Engineering
              </h3>

              <p className="text-white/70 leading-relaxed">
                I design and build scalable backend systems and REST APIs using Python, Django, and Django REST Framework. 
                I work with PostgreSQL, MySQL, SQLite, Redis, and Celery to handle data, caching, and background tasks efficiently. 
                My focus is on writing clean, maintainable code and designing systems that can scale in real-world environments.
              </p>
            </div>

            {/* ML */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Brain size={24} />
              </div>

              <h3 className="text-xl mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Machine Learning & Vision
              </h3>

              <p className="text-white/70 leading-relaxed">
                I build machine learning and deep learning solutions using Scikit-learn, TensorFlow, and PyTorch. 
                My experience includes model training, evaluation, NLP tasks, and computer vision systems, including YOLO-based detection. 
                I focus on turning ML models into practical, deployable solutions.
              </p>
            </div>

            {/* Full Stack */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-all duration-300 md:col-span-2 xl:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Layers3 size={24} />
              </div>

              <h3 className="text-xl mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Full-Stack Development
              </h3>

              <p className="text-white/70 leading-relaxed">
                I also develop responsive and interactive user interfaces using React, JavaScript, HTML, and CSS. 
                I enjoy connecting frontend applications with robust backend systems to build complete, user-focused products.
              </p>
            </div>
          </div>

          {/* STORY / MINDSET */}
          <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-base text-white/80 leading-relaxed mb-4">
              I approach development with a strong problem-solving mindset. I enjoy breaking down complex challenges into manageable parts 
              and designing efficient solutions, whether it’s optimizing a database query, building an API, or improving model performance.
            </p>

            <p className="text-base text-white/80 leading-relaxed">
              I’m continuously learning and building, focusing on real-world applications that combine backend engineering and machine learning. 
              My goal is to create reliable, scalable systems and meaningful products that solve practical problems.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}