import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import {
  getProfile,
  getSocialLinks,
  type ProfileApi,
  type SocialLinkApi,
} from "../../../api/api";

function getSocialIcon(platform: string, name: string) {
  const value = `${platform} ${name}`.toLowerCase();

  if (value.includes("github")) return <Github size={20} />;
  if (value.includes("linkedin")) return <Linkedin size={20} />;
  if (value.includes("email") || value.includes("mail")) return <Mail size={20} />;

  return <LinkIcon size={20} />;
}

export default function Footer() {
  const [profile, setProfile] = useState<ProfileApi | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinkApi[]>([]);

  useEffect(() => {
    let mounted = true;

    async function loadFooterData() {
      const [profileData, socialData] = await Promise.all([
        getProfile(),
        getSocialLinks(),
      ]);

      if (mounted) {
        setProfile(profileData);
        setSocialLinks(socialData ?? []);
      }
    }

    loadFooterData();

    return () => {
      mounted = false;
    };
  }, []);

  const orderedSocialLinks = useMemo(
    () => [...socialLinks].sort((a, b) => a.ordering - b.ordering),
    [socialLinks]
  );

  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                {profile?.full_name || "Mahmudul Hasan Hasib"}
              </span>
            </div>

            <p className="text-white/50 text-sm sm:text-base max-w-md">
              {profile?.headline ||
                "Python Developer · Backend & ML Engineer · Full-Stack Developer"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center"
          >
            {orderedSocialLinks.length > 0 ? (
              orderedSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={link.name}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  {getSocialIcon(link.platform, link.name)}
                </a>
              ))
            ) : (
              <>
                <a
                  href="https://github.com/mahmudul-hasan-hasib"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/mahmudul-hasan-hasib-40b102261/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:mahmudulhasanhasib443@gmail.com"
                  aria-label="Email"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </>
            )}
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/50 text-xs sm:text-sm">
          <p>
            © {year} {profile?.full_name || "Mahmudul Hasan Hasib"}.{" "}
            {profile?.footer_text || "Built with React, Tailwind CSS & Motion."}
          </p>
        </div>
      </div>
    </footer>
  );
}