import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handleServicesClick = () => {
    window.location.href = "/services";
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
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-950/60 to-red-600/40"></div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-400/60 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          className="max-w-3xl space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
            variants={itemVariants}
          >
            Building Digital Solutions That Help Businesses Grow.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed"
            variants={itemVariants}
          >
            We transform businesses through innovative technology solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6"
            variants={containerVariants}
          >
            <motion.button
              onClick={handleContactClick}
              className="group relative px-8 cursor-pointer py-4 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:shadow-2xl bg-red-500 hover:bg-[#E63946] active:scale-95"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Let's Build Together</span>
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              onClick={handleServicesClick}
              className="group relative px-8 py-4 cursor-pointer text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:shadow-2xl bg-transparent hover:bg-[#FF4D4D] hover:text-white active:scale-95 border-2 border-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">View Our Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
