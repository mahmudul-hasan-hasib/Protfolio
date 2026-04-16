import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface TimelineItemProps {
  item: {
    period: string;
    title: string;
    description: string;
    type: 'project' | 'experience' | 'learning';
  };
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-[#050014] transform -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-16 md:pl-0`}>
        <div className="inline-block">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : 'md:flex-row'} flex-row`}>
              <div className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-xs font-medium">{item.period}</span>
              </div>
              {item.type === 'project' && <Briefcase size={16} className="text-purple-400" />}
              {item.type === 'experience' && <TrendingUp size={16} className="text-blue-400" />}
              {item.type === 'learning' && <Calendar size={16} className="text-green-400" />}
            </div>
            <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}