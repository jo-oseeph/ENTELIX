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
        scrolled ? "bg-white shadow-lg shadow-black/5" : "bg-white"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            className="-ml-4 sm:-ml-6 lg:-ml-8"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/" className="flex items-center gap-1 group cursor-pointer">
              <div className="relative">
                <img src="/logo.jpg" alt="Entelix Logo" className="h-12 w-12 relative z-10" />
              </div>
              <span className="text-2xl font-bold tracking-widest" style={{ color: '#0B2153' }}>
                ENTELIX
              </span>
            </Link>
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
                      isActive ? "" : "text-gray-600 hover:text-[#0B2153]"
                    }`}
                    style={isActive ? { color: '#E93930' } : {}}
                  >
                    <span className="relative z-10 text-xs font-medium uppercase tracking-wide">
                      {link.name}
                    </span>
                    <div
                      className={`absolute inset-0 rounded-lg transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ backgroundColor: '#0B2153' + '0d' }}
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                      style={{ backgroundColor: '#E93930' }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button — desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }}
          >
            <Link to="/contact">
              <div
                className="relative group flex items-center gap-0 overflow-hidden cursor-pointer"
                style={{ borderRadius: '4px' }}
              >
                {/* Left navy block — label */}
                <div
                  className="px-5 py-2.5 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:pr-3"
                  style={{ backgroundColor: '#0B2153' }}
                >
                  Get a Quote
                </div>

                {/* Right red block — arrow tab */}
                <div
                  className="flex items-center justify-center w-9 h-full py-2.5 transition-all duration-300 group-hover:w-11"
                  style={{ backgroundColor: '#E93930' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors relative z-50"
            style={{ color: '#E93930' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden shadow-xl"
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
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 text-sm uppercase tracking-wide font-medium ${
                      isActive ? "font-semibold" : "text-gray-600"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: '#0B2153' + '12', color: '#0B2153' }
                        : {}
                    }
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <div className="flex items-center overflow-hidden rounded" style={{ width: 'fit-content' }}>
                  <div
                    className="px-5 py-2.5 text-white text-xs font-bold uppercase tracking-widest"
                    style={{ backgroundColor: '#0B2153' }}
                  >
                    Get a Quote
                  </div>
                  <div
                    className="flex items-center justify-center w-9 py-2.5"
                    style={{ backgroundColor: '#E93930' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0B2153]/20 to-transparent" />
    </nav>
  );
};

export default Navbar;