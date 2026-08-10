import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
  
    <motion.nav
      key={location.pathname}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-slate-900/5" : "shadow-sm shadow-slate-900/[0.02]"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 group cursor-pointer">
            <img
              src="/logo.jpg"
              alt="Entelix Logo"
              className="h-9 w-9 md:h-11 md:w-11 object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-base md:text-lg font-bold tracking-wide"
                style={{ color: "#0B2153" }}
              >
                ENTELIX
              </span>
            </div>
          </Link>

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
                    className="group relative px-5 py-2.5 transition-all duration-300"
                  >
                    <span
                      className="relative z-10 text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
                      style={{ color: isActive ? "#E93930" : "#334155" }}
                    >
                      {link.name}
                    </span>
                    <div
                      className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ backgroundColor: "rgba(11,33,83,0.05)" }}
                    />
                    <div
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                      style={{ backgroundColor: "#E93930" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button — desktop, modern pill */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.35 } }}
          >
            <Link to="/contact">
              <div
                className="group flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#E93930" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c92f28")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E93930")}
              >
                <span>Get a Quote</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors relative z-50"
            style={{ color: "#0B2153", backgroundColor: isOpen ? "rgba(11,33,83,0.06)" : "transparent" }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          initial={false}
          animate={{
            maxHeight: isOpen ? "500px" : "0px",
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="px-4 py-6 space-y-1.5"
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
                    className="block px-4 py-3 rounded-lg transition-all duration-300 text-sm uppercase tracking-wide font-semibold"
                    style={
                      isActive
                        ? { backgroundColor: "rgba(11,33,83,0.07)", color: "#E93930" }
                        : { color: "#334155" }
                    }
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-3">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <div
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: "#E93930" }}
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;