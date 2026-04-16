import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { getProjects, type ProjectApi } from "../../../api/api";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProjects() {
      const data = await getProjects();

      if (mounted) {
        setProjects(data ?? []);
        setLoading(false);
      }
    }

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const nonFeaturedProjects = useMemo(
    () =>
      [...projects]
        .filter((project) => !project.featured)
        .sort((a, b) => a.ordering - b.ordering),
    [projects]
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Other{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 sm:mb-16 rounded-full" />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="h-52 sm:h-56 bg-white/10" />
                  <div className="p-5 sm:p-6">
                    <div className="h-7 w-2/3 bg-white/10 rounded mb-3" />
                    <div className="h-4 w-full bg-white/10 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-white/10 rounded mb-4" />
                    <div className="flex flex-wrap gap-2 mb-5">
                      {[1, 2, 3].map((chip) => (
                        <div key={chip} className="h-7 w-20 bg-white/10 rounded-lg" />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <div className="h-11 flex-1 bg-white/10 rounded-xl" />
                      <div className="h-11 w-24 bg-white/10 rounded-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : nonFeaturedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {nonFeaturedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-white/50 text-sm">
                        No image available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-[#050014]/30 to-transparent opacity-80" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3
                      className="text-xl sm:text-2xl mb-3 leading-snug"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-white/70 mb-4 leading-relaxed text-sm sm:text-[15px]">
                      {project.short_description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech_stack?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs sm:text-sm bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col xs:flex-row gap-3">
                      {project.live_link ? (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:scale-[1.01] transition-all duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <div className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/40">
                          Live demo unavailable
                        </div>
                      )}

                      {project.github_link ? (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-[1.01] transition-all duration-300 text-sm"
                        >
                          <Github size={16} />
                          <span className="sm:hidden">Code</span>
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/40">
                          <Github size={16} />
                          <span>Code</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60">
              No projects available right now.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}