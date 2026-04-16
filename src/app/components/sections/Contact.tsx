import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  getProfile,
  getSocialLinks,
  sendContactMessage,
  type ProfileApi,
  type SocialLinkApi,
} from "../../../api/api";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function getSocialIcon(platform: string, name: string) {
  const value = `${platform} ${name}`.toLowerCase();

  if (value.includes("github")) return <Github size={22} />;
  if (value.includes("linkedin")) return <Linkedin size={22} />;
  if (value.includes("email") || value.includes("mail")) return <Mail size={22} />;

  return <Mail size={22} />;
}

function getDisplayValue(link: SocialLinkApi) {
  if (link.platform === "email" || link.url.startsWith("mailto:")) {
    return link.url.replace("mailto:", "");
  }

  try {
    const url = new URL(link.url);
    return url.hostname.replace("www.", "") + url.pathname;
  } catch {
    return link.url;
  }
}

export default function Contact() {
  const [profile, setProfile] = useState<ProfileApi | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinkApi[]>([]);
  const [form, setForm] = useState<FormState>(initialFormState);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadContactData() {
      const [profileData, socialData] = await Promise.all([
        getProfile(),
        getSocialLinks(),
      ]);

      if (mounted) {
        setProfile(profileData);
        setSocialLinks(socialData ?? []);
        setLoading(false);
      }
    }

    loadContactData();

    return () => {
      mounted = false;
    };
  }, []);

  const orderedSocialLinks = useMemo(
    () => [...socialLinks].sort((a, b) => a.ordering - b.ordering),
    [socialLinks]
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (response?.message) {
        setSuccessMessage(response.message);
        setForm(initialFormState);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 sm:mb-16 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {profile?.contact_cta_text || "Let’s build something great together"}
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {profile?.short_intro ||
                  "I’m open to backend, Python, ML, and full-stack opportunities. Feel free to reach out for collaboration, freelance work, or job opportunities."}
              </p>

              {profile?.email && (
                <div className="mb-6">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    <Mail size={18} />
                    <span>{profile.email}</span>
                  </a>
                </div>
              )}

              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-20 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                    />
                  ))}
                </div>
              ) : orderedSocialLinks.length > 0 ? (
                <div className="space-y-4">
                  {orderedSocialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        {getSocialIcon(link.platform, link.name)}
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-white/50">{link.name}</p>
                        <p className="text-white/85 break-all">{getDisplayValue(link)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-white/60">
                  Contact links are not available right now.
                </div>
              )}
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#0b0620] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 text-white placeholder:text-white/35 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#0b0620] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 text-white placeholder:text-white/35 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    className="w-full px-4 py-3 bg-[#0b0620] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 text-white placeholder:text-white/35 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 bg-[#0b0620] border border-white/10 rounded-xl outline-none focus:border-blue-500/50 text-white placeholder:text-white/35 transition-colors resize-none"
                  />
                </div>

                {successMessage && (
                  <div className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  <span>{submitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
