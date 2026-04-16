import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface ContactCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function ContactCard({ href, icon: Icon, label, value }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
        <Icon size={24} />
      </div>
      <div className="text-center">
        <p className="text-white/60 text-xs mb-1">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </motion.a>
  );
}