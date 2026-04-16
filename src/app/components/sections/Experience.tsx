import { useEffect, useMemo, useState } from "react";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { getTimeline, type TimelineItemApi } from "../../../api/api";

export default function Experience() {
  const [timeline, setTimeline] = useState<TimelineItemApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadTimeline() {
      const data = await getTimeline();

      if (mounted) {
        setTimeline(data ?? []);
        setLoading(false);
      }
    }

    loadTimeline();

    return () => {
      mounted = false;
    };
  }, []);

  const orderedTimeline = useMemo(
    () => [...timeline].sort((a, b) => a.ordering - b.ordering),
    [timeline]
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 sm:mb-16 rounded-full" />

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse"
                >
                  <div className="h-5 w-24 bg-white/10 rounded mb-3" />
                  <div className="h-6 w-2/3 bg-white/10 rounded mb-3" />
                  <div className="h-4 w-full bg-white/10 rounded mb-2" />
                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                </div>
              ))}
            </div>
          ) : orderedTimeline.length > 0 ? (
            <div className="relative">
              <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600" />

              <div className="space-y-10 sm:space-y-12">
                {orderedTimeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 sm:left-6 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-[#050014] transform -translate-x-1/2 z-10" />

                    <div
                      className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${
                        index % 2 === 0
                          ? "md:pr-10 md:text-right"
                          : "md:pl-10 md:text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300"
                      >
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                          }`}
                        >
                          <div className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
                            <span className="text-blue-400 text-xs font-medium">
                              {item.period}
                            </span>
                          </div>

                          {item.item_type === "project" && (
                            <Briefcase size={16} className="text-purple-400" />
                          )}
                          {item.item_type === "experience" && (
                            <TrendingUp size={16} className="text-blue-400" />
                          )}
                          {item.item_type === "learning" && (
                            <Calendar size={16} className="text-green-400" />
                          )}
                        </div>

                        <h3
                          className="text-lg sm:text-xl mb-2"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {item.title}
                        </h3>

                        <p className="text-white/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-white/60">
              Timeline data not available right now.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}