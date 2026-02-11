import { Link } from "react-router-dom";
import { Mail, Phone, ChevronUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2153] text-gray-300 pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.jpg" // replace with your logo path
              alt="Entelix"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-white font-semibold text-lg">Entelix Solutions</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Entelix is a creative software agency offering web, app, and AI-powered solutions. 
            We design, build, and scale digital experiences that drive impact.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-[#E63946]"><Twitter size={18} /></a>
            <a href="#" className="hover:text-[#E63946]"><Instagram size={18} /></a>
            <a href="#" className="hover:text-[#E63946]"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#E63946]"><Facebook size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E63946] after:mt-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-[#E63946]">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#E63946]">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-[#E63946]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#E63946]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E63946] after:mt-1">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="text-[#E63946]" size={16} />
              <a href="tel:+254719238337" className="hover:text-[#E63946] transition-colors">+254 719238337</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#E63946]" size={16} />
              <a href="mailto:contact@entelix.com" className="hover:text-[#E63946] transition-colors">contact@entelix.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © {currentYear} <span className="text-[#E63946]">Entelix Solutions</span>. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-[#E63946]">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#E63946]">Terms of Service</Link>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#E63946] text-white p-3 rounded-full shadow-md hover:bg-white hover:text-[#E63946] transition"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}
