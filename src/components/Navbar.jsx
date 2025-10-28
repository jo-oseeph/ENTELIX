import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Contact Us', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-red-500/10'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Entelix Logo"
                className="h-17 w-17 relative z-10"
              />
            </div>
             <span className="text-3xl font-bold text-blue-950">
              ENTELIX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-red-500 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                    <Icon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </span>
                  <div className="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-red-500 hover:text-red-600 transition-colors relative z-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-red-100 transition-all duration-300 overflow-hidden shadow-xl ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
    </nav>
  );
};

export default Navbar;