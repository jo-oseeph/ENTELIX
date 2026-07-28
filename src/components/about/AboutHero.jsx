import { motion } from "framer-motion";

// Entelix brand tokens
const NAVY = "#0B2153";
const RED = "#E93930";
const IVORY = "#F4F5F7";
const SLATE = "#8C96B8";

const AboutHero = () => {
  const handlePrimaryClick = () => {
    window.location.href = "/contact";
  };

  const handleSecondaryClick = () => {
    window.location.href = "/portfolio";
  };

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-[68vh] md:min-h-[75vh] flex items-center overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill badge */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8"
              style={{
                color: IVORY,
                border: "1px solid rgba(244,245,247,0.2)",
                backgroundColor: "rgba(244,245,247,0.04)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              About Us
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block" style={{ color: IVORY }}>
                Built to
              </span>
              <span className="block" style={{ color: RED }}>
                Actually Work.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-10"
              style={{ color: SLATE }}
            >
              Entelix wasn't founded to ship "websites." It was founded to
              give ambitious companies software they can actually depend
              on, systems that hold up long after launch day.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <motion.button
                onClick={handlePrimaryClick}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
                style={{ backgroundColor: RED, color: IVORY }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#D42E26",
                  boxShadow: "0 8px 24px rgba(233,57,48,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
                <motion.span initial={{ x: 0 }} whileHover={{ x: 3 }}>
                  
                </motion.span>
              </motion.button>

              <motion.button
                onClick={handleSecondaryClick}
                className="px-7 py-3.5 rounded-full font-semibold text-sm cursor-pointer border"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "rgba(244,245,247,0.25)",
                  color: IVORY,
                }}
                whileHover={{ borderColor: RED, backgroundColor: "rgba(233,57,48,0.08)", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;