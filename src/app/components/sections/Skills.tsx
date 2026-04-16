import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  Boxes,
  Brain,
  Database,
  Layout,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { getSkills, type SkillCategoryApi } from "../../../api/api";

function getSkillIcon(iconName: string) {
  const normalized = iconName.toLowerCase().trim();

  if (
    normalized.includes("backend") ||
    normalized.includes("server") ||
    normalized === "server"
  ) {
    return <Server size={22} />;
  }

  if (
    normalized.includes("frontend") ||
    normalized.includes("layout") ||
    normalized === "layout"
  ) {
    return <Layout size={22} />;
  }

  if (
    normalized.includes("data") ||
    normalized.includes("chart") ||
    normalized.includes("analysis") ||
    normalized === "barchart3"
  ) {
    return <BarChart3 size={22} />;
  }

  if (
    normalized.includes("machine") ||
    normalized.includes("ml") ||
    normalized.includes("brain")
  ) {
    return <Brain size={22} />;
  }

  if (
    normalized.includes("vision") ||
    normalized.includes("computer") ||
    normalized.includes("boxes")
  ) {
    return <Boxes size={22} />;
  }

  if (
    normalized.includes("database") ||
    normalized.includes("db")
  ) {
    return <Database size={22} />;
  }

  if (
    normalized.includes("tools") ||
    normalized.includes("terminal") ||
    normalized.includes("environment")
  ) {
    return <Terminal size={22} />;
  }

  return <Wrench size={22} />;
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillCategoryApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadSkills() {
      const data = await getSkills();

      if (mounted) {
        setSkills(data ?? []);
        setLoading(false);
      }
    }

    loadSkills();

    return () => {
      mounted = false;
    };
  }, []);

  const orderedSkills = useMemo(
    () => [...skills].sort((a, b) => a.ordering - b.ordering),
    [skills]
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10" />
                    <div className="h-5 w-40 rounded bg-white/10" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((chip) => (
                      <div
                        key={chip}
                        className="h-8 w-24 rounded-lg bg-white/10"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : orderedSkills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {orderedSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      {getSkillIcon(category.icon_name)}
                    </div>
                    <h3
                      className="text-lg leading-snug"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60">
              Skills data not available right now.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}