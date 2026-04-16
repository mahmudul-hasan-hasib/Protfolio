import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { getProfile, getResume, type ProfileApi, type ResumeApi } from "../../../api/api";
import { scrollToSection } from "../../../utils/scrollToSection";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [profile, setProfile] = useState<ProfileApi | null>(null);
  const [resume, setResume] = useState<ResumeApi | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadNavbarData() {
      const [profileData, resumeData] = await Promise.all([
        getProfile(),
        getResume(),
      ]);

      if (mounted) {
        setProfile(profileData);
        setResume(resumeData);
      }
    }

    loadNavbarData();

    return () => {
      mounted = false;
    };
  }, []);

  function handleScroll(sectionId: string) {
    scrollToSection(sectionId);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050014]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => handleScroll("home")}
            className="text-left"
          >
            <div
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                {profile?.full_name || "Mahmudul Hasan Hasib"}
              </span>
            </div>
          </motion.button>

          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="hidden lg:flex items-center gap-8 text-sm text-white/80"
          >
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("experience")}
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="hidden lg:flex items-center"
          >
            {resume?.file ? (
              <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/50 rounded-full cursor-not-allowed"
              >
                <Download size={18} />
                <span>CV Unavailable</span>
              </button>
            )}
          </motion.div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}