import { motion } from "framer-motion";

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handleServicesClick = () => {
    window.location.href = "/portfolio";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.97 },
  };

  return (
    <section className="relative min-h-[72vh] sm:min-h-[82vh] md:min-h-screen lg:min-h-screen flex items-center overflow-hidden py-14 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero5.jpg')" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,33,83,0.82) 0%, rgba(11,33,83,0.68) 45%, rgba(233,57,48,0.35) 100%)",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full"
        style={{ backgroundColor: "#E93930" }}
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full"
        style={{ backgroundColor: "#E93930" }}
        animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full"
        style={{ backgroundColor: "rgba(233,57,48,0.6)" }}
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 w-full flex items-center mt-[50px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight"
              variants={itemVariants}
            >
              We Build High-Performance <br />
              Digital Solutions
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
              variants={itemVariants}
            >
              From professional websites to custom software, we create technology
              that is reliable, efficient, and built around real business needs.
              Every project is crafted to help organizations operate with greater
              confidence and clarity.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6"
              variants={containerVariants}
            >
              <motion.button
                onClick={handleContactClick}
                className="px-8 py-3.5 cursor-pointer font-semibold text-sm tracking-wide rounded-md transition-colors duration-300 text-white"
                style={{ backgroundColor: "#E93930" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c92f28")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E93930")
                }
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Start Your Project
              </motion.button>

              <motion.button
                onClick={handleServicesClick}
                className="px-8 py-3.5 cursor-pointer font-semibold text-sm tracking-wide rounded-md transition-colors duration-300 text-white bg-transparent border border-white/60 hover:bg-white hover:text-[#0B2153]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
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

export default HeroSection;