import { useEffect, useState } from "react";
import { GitFork, Github, Star } from "lucide-react";
import { motion } from "motion/react";
import { getGithubStats, type GithubStatsApi } from "../../../api/api";

export default function GithubActivity() {
  const [githubData, setGithubData] = useState<GithubStatsApi | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadGithubData() {
      const data = await getGithubStats();

      if (mounted) {
        setGithubData(data);
        setLoading(false);
      }
    }

    loadGithubData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
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
            GitHub{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 sm:mb-16 rounded-full" />

          {loading ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-32 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-48 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                  />
                ))}
              </div>
            </div>
          ) : githubData ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Github size={24} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-blue-300 mb-2">
                    {githubData.contributions_count}
                  </div>
                  <div className="text-white/60">Contributions</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <GitFork size={24} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-blue-300 mb-2">
                    {githubData.repositories_count}
                  </div>
                  <div className="text-white/60">Repositories</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <Star size={24} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-blue-300 mb-2">
                    {githubData.stars_count}
                  </div>
                  <div className="text-white/60">Stars</div>
                </motion.div>
              </div>

              {githubData.top_repositories?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {githubData.top_repositories.map((repo, index) => (
                    <motion.a
                      key={repo.id}
                      href={repo.url || "#"}
                      target={repo.url ? "_blank" : undefined}
                      rel={repo.url ? "noreferrer" : undefined}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      whileHover={{ y: -5 }}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 hover:bg-white/7 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3
                          className="text-xl leading-snug"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {repo.name}
                        </h3>

                        <div className="inline-flex items-center gap-1 text-yellow-300 shrink-0">
                          <Star size={16} />
                          <span className="text-sm">{repo.stars}</span>
                        </div>
                      </div>

                      <p className="text-white/65 leading-relaxed text-sm sm:text-base mb-4">
                        {repo.description}
                      </p>

                      {repo.tech_stack?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {repo.tech_stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs sm:text-sm bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.a>
                  ))}
                </div>
              ) : (
                <div className="text-center text-white/60">
                  Top repositories not available right now.
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-white/60">
              GitHub activity data not available right now.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}