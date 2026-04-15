import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index, isVisible }) => {
  const Icon = service.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      className="group"
    >
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 border-t-4 border-t-red-500 flex flex-col h-full"
        variants={hoverVariants}
      >
        <div className="p-8 text-left flex flex-col flex-1">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-lg mb-6 group-hover:bg-red-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-8 h-8 text-red-500" />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Offerings List */}
          {service.offerings && service.offerings.length > 0 && (
            <ul className="mb-6 space-y-2">
              {service.offerings.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Spacer to push button to bottom */}
          <div className="flex-1" />

          {/* Learn More Button */}
          {service.path && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={service.path}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-semibold text-sm rounded-lg hover:bg-blue-900 transition-all duration-300 group/btn shadow-md hover:shadow-lg"
              >
                Learn More
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard; 