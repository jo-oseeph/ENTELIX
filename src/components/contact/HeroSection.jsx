import { motion } from "framer-motion";

// Entelix brand tokens
const NAVY = "#0B2153";
const NAVY_LIGHT = "#15316E";
const RED = "#E93930";
const IVORY = "#F4F5F7";
const SLATE = "#8C96B8";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative py-24 md:py-32 flex items-center justify-center text-center overflow-hidden border-b"
      style={{ backgroundColor: NAVY, borderColor: "rgba(244,245,247,0.06)" }}
    >
      {/* Animated navy glow — subtle breathing motion for a modern,
          alive feel instead of a flat panel */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${RED} 0%, transparent 70%)`,
          filter: "blur(90px)",
        }}
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 px-6 sm:px-8 max-w-2xl mx-auto flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.12] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: IVORY }}>Talk To Us </span>
          
          </motion.h1>

          {/* Supporting copy — forced to one line at every breakpoint */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed whitespace-nowrap"
            style={{ color: SLATE }}
          >
            Let's discuss how we can bring your idea to life.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;