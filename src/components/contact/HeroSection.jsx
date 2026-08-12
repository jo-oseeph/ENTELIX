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
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-[380px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center text-center overflow-hidden border-b"
      style={{
        backgroundColor: NAVY,
        borderColor: "rgba(244,245,247,0.06)",
      }}
    >
      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]
        rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Red accent glow */}
      <motion.div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2
        w-[200px] h-[200px] sm:w-[240px] sm:h-[240px]
        rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${RED} 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
        animate={{
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small title */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: SLATE }}
          >
            Let's Talk
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{
              color: IVORY,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Have a project in mind?
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed font-light"
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