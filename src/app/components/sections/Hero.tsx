import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
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

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>{profile?.availability_status || "Open to opportunities"}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="block text-white/90">Hi, I’m</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                {profile?.full_name || "Mahmudul Hasan Hasib"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-5 leading-relaxed max-w-3xl">
              {profile?.headline ||
                "Python Developer · Backend & ML Engineer · Full-Stack Developer"}
            </p>

            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              {profile?.short_intro ||
                "I build scalable backend systems, intelligent ML-powered solutions, and modern full-stack web applications with a strong focus on clean architecture and real-world usability."}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                <span>Let’s Talk</span>
                <ArrowRight size={18} />
              </button>

              {resume?.file ? (
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
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
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {orderedSocialLinks.length > 0 ? (
                orderedSocialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={link.name}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                  >
                    {getSocialIcon(link.platform, link.name)}
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="mailto:mahmudulhasanhasib443@gmail.com"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://github.com/mahmudul-hasan-hasib"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmudul-hasan-hasib-40b102261/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/75 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </>
              )}
            </div>

            {profile?.location && (
              <div className="inline-flex items-center gap-2 text-white/50 text-sm sm:text-base">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl rounded-full" />

              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_45px_rgba(59,130,246,0.12)]">
                {loading ? (
                  <div className="w-full h-full animate-pulse bg-white/10" />
                ) : profile?.profile_image ? (
                  <img
                    src={profile.profile_image}
                    alt={profile.full_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-6xl sm:text-7xl font-bold text-white/30">
                    {(profile?.full_name || "MH")
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}