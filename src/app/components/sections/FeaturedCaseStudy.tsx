import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { getCaseStudy, type CaseStudyApi } from "../../../api/api";

type MetricItem = {
  label: string;
  value: string;
};

type SectionItem = {
  heading: string;
  content: string;
};

function formatMetricKey(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function FeaturedCaseStudy() {
  const [caseStudy, setCaseStudy] = useState<CaseStudyApi | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadCaseStudy() {
      const data = await getCaseStudy();

      if (mounted) {
        setCaseStudy(data);
        setLoading(false);
      }
    }

    loadCaseStudy();

    return () => {
      mounted = false;
    };
  }, []);

  const metrics: MetricItem[] = useMemo(() => {
    if (!caseStudy?.metrics) return [];

    return Object.entries(caseStudy.metrics).map(([key, value]) => ({
      label: formatMetricKey(key),
      value: String(value),
    }));
  }, [caseStudy]);

  const sections: SectionItem[] = useMemo(() => {
    if (!caseStudy?.sections) return [];

    return Object.entries(caseStudy.sections).map(([key, value]) => ({
      heading: formatMetricKey(key),
      content: String(value),
    }));
  }, [caseStudy]);

  return (
    <section id="featured-case-study" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Study
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 sm:mb-16 rounded-full" />

          {loading ? (
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden animate-pulse">
              <div className="grid lg:grid-cols-2">
                <div className="h-72 lg:h-full bg-white/10" />
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="h-6 w-28 bg-white/10 rounded-full mb-4" />
                  <div className="h-10 w-3/4 bg-white/10 rounded mb-4" />
                  <div className="h-4 w-full bg-white/10 rounded mb-2" />
                  <div className="h-4 w-5/6 bg-white/10 rounded mb-6" />
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="h-24 bg-white/10 rounded-2xl" />
                    ))}
                  </div>
                  <div className="h-28 bg-white/10 rounded-2xl mb-4" />
                  <div className="h-28 bg-white/10 rounded-2xl mb-4" />
                  <div className="h-12 bg-white/10 rounded-2xl" />
                </div>
              </div>
            </div>
          ) : caseStudy ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-[320px] lg:min-h-full">
                  {caseStudy.image ? (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-white/40 text-lg">
                      No case study image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050014] via-[#050014]/35 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  {caseStudy.badge && (
                    <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm mb-4">
                      {caseStudy.badge}
                    </div>
                  )}

                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {caseStudy.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>

                  {metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-white/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {sections.length > 0 && (
                    <div className="space-y-4 mb-8">
                      {sections.map((section) => (
                        <div
                          key={section.heading}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <h4
                            className="text-lg mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {section.heading}
                          </h4>
                          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {caseStudy.tech_stack?.length > 0 && (
                    <div className="mb-8">
                      <h4
                        className="text-lg mb-3"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {caseStudy.result && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-8">
                      <h4
                        className="text-lg mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Result / Impact
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {caseStudy.result}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {caseStudy.live_link ? (
                      <a
                        href={caseStudy.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white/40">
                        Live demo unavailable
                      </div>
                    )}

                    {caseStudy.github_link ? (
                      <a
                        href={caseStudy.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white/40">
                        <Github size={18} />
                        <span>Code unavailable</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-white/60">
              Featured case study not available right now.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}