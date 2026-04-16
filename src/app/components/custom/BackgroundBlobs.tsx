import { motion } from "motion/react";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-25 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #1e40af 0%, #7c3aed 100%)' }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-15%] w-[600px] h-[600px] rounded-full opacity-25 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, #1e40af 100%)' }}
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[40%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, #a855f7 100%)' }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}