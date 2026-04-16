import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { getResume, type ResumeApi } from "../../../api/api";
import { scrollToSection } from "../../../utils/scrollToSection";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  const [resume, setResume] = useState<ResumeApi | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadResume() {
      const data = await getResume();
      if (mounted) {
        setResume(data);
      }
    }

    loadResume();

    return () => {
      mounted = false;
    };
  }, []);

  function handleScroll(sectionId: string) {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  if (!isMenuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden border-t border-white/5 bg-[#050014]/95 backdrop-blur-md"
    >
      <div className="px-6 py-4 space-y-3">
        <button
          onClick={() => handleScroll("home")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          Home
        </button>

        <button
          onClick={() => handleScroll("about")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          About
        </button>

        <button
          onClick={() => handleScroll("skills")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          Skills
        </button>

        <button
          onClick={() => handleScroll("projects")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          Projects
        </button>

        <button
          onClick={() => handleScroll("experience")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          Experience
        </button>

        <button
          onClick={() => handleScroll("contact")}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
        >
          Contact
        </button>

        {resume?.file ? (
          <a
            href={resume.file}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-full justify-center mt-4"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        ) : (
          <button
            disabled
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full w-full justify-center mt-4 text-white/50 cursor-not-allowed"
          >
            <Download size={18} />
            <span>CV Unavailable</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}