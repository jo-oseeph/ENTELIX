import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-red-500/10" : "bg-white"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1 group cursor-pointer -ml-4 sm:-ml-6 lg:-ml-8"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Entelix Logo"
                className="h-16 w-16 relative z-10"
              />
            </div>
            <span className="text-3xl font-bold text-blue-950">ENTELIX</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div key={idx} variants={navItemVariants}>
                  <Link
                    to={link.href}
                    className={`group relative px-5 py-2.5 transition-all duration-300 ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    <span className="relative z-10 text-xs font-medium uppercase tracking-wide">
                      {link.name}
                    </span>
                    <div
                      className={`absolute inset-0 bg-red-50 rounded-lg transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    ></div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-red-500 hover:text-red-600 transition-colors relative z-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-red-100 overflow-hidden shadow-xl`}
          initial={false}
          animate={{
            maxHeight: isOpen ? "500px" : "0px",
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="px-4 py-6 space-y-2"
            variants={navVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div key={idx} variants={navItemVariants}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "text-gray-700 hover:text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <span className="uppercase tracking-wide text-sm">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
