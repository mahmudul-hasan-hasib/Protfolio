import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import {
  getProfile,
  getResume,
  getSocialLinks,
  type ProfileApi,
  type ResumeApi,
  type SocialLinkApi,
} from "../../../api/api";
import { scrollToSection } from "../../../utils/scrollToSection";

function getSocialIcon(platform: string, name: string) {
  const value = `${platform} ${name}`.toLowerCase();

  if (value.includes("github")) return <Github size={18} />;
  if (value.includes("linkedin")) return <Linkedin size={18} />;
  if (value.includes("email") || value.includes("mail")) return <Mail size={18} />;

  return <ArrowRight size={18} />;
}

export default function Hero() {
  const [profile, setProfile] = useState<ProfileApi | null>(null);
  const [resume, setResume] = useState<ResumeApi | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinkApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadHeroData() {
      const [profileData, resumeData, socialData] = await Promise.all([
        getProfile(),
        getResume(),
        getSocialLinks(),
      ]);

      if (mounted) {
        setProfile(profileData);
        setResume(resumeData);
        setSocialLinks(socialData ?? []);
        setLoading(false);
      }
    }

    loadHeroData();

    return () => {
      mounted = false;
    };
  }, []);

  const orderedSocialLinks = useMemo(
    () => [...socialLinks].sort((a, b) => a.ordering - b.ordering),
    [socialLinks]
  );

  const initials = (profile?.full_name || "MH")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-6 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span>{profile?.availability_status || "Open to opportunities"}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.95] mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="block text-white/90 mb-2">Hi, I’m</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                {profile?.full_name || "Mahmudul Hasan Hasib"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 mb-5 leading-relaxed max-w-3xl"
            >
              {profile?.headline ||
                "Python Developer · Backend & ML Engineer · Full-Stack Developer"}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl mb-8"
            >
              {profile?.short_intro ||
                "I build scalable backend systems, intelligent ML-powered solutions, and modern full-stack web applications with a strong focus on clean architecture and real-world usability."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.02] transition-all duration-300"
              >
                <span>Let’s Talk</span>
                <ArrowRight size={18} />
              </button>

              {resume?.file ? (
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white/50 cursor-not-allowed"
                >
                  <Download size={18} />
                  <span>CV Unavailable</span>
                </button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              {orderedSocialLinks.length > 0 ? (
                orderedSocialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={link.name}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    {getSocialIcon(link.platform, link.name)}
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="mailto:mahmudulhasanhasib443@gmail.com"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://github.com/mahmudul-hasan-hasib"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmudul-hasan-hasib-40b102261/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </>
              )}
            </motion.div>

            {profile?.location && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.54 }}
                className="inline-flex items-center gap-2 text-white/50 text-sm sm:text-base"
              >
                <MapPin size={16} />
                <span>{profile.location}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer animated glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.28, 0.5, 0.28],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-500/20 blur-3xl"
              />

              {/* Floating circle wrapper */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Border glow */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-400/30 blur-xl" />

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] rounded-full overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_0_45px_rgba(59,130,246,0.18)]"
                >
                  {loading ? (
                    <div className="w-full h-full rounded-full animate-pulse bg-white/10" />
                  ) : profile?.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.full_name}
                      className="w-full h-full object-cover object-[50%_30%]"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/15">
                      <span className="text-7xl sm:text-8xl font-bold text-white/20 select-none">
                        {initials}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#050014]/15 via-transparent to-white/5 pointer-events-none" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}