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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(160deg, #0B2153 0%, #0e2861 55%, #0B2153 100%)",
      }}
    >
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${IVORY} 0%, transparent 70%)`,
          filter: "blur(90px)",
        }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 max-w-3xl mx-auto w-full flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
           
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mt-16 mb-5"
            style={{
              color: SLATE,
              fontFamily: "sans-serif",
            }}
          >
            Our Work
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-5 leading-[1.05] tracking-tight"
            style={{ fontFamily: "sans-serif", color: "rgba(244, 245, 247, 0.92)" }}
          >
             Built for Real-World Impact
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-light leading-relaxed max-w-2xl mb-0"
            style={{ color: SLATE }}
          >
            Every project here started as a problem worth solving,
            explore the ideas, builds, and results behind each one.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;