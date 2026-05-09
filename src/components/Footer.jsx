import { Link } from "react-router-dom";
import { Mail, Phone, ChevronUp, Facebook, Instagram, MapPin } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/254719238337?text=${encodeURIComponent("Hi Entelix, I'd like to inquire about your services.")}`;

  return (
    <footer className="bg-[#0B2153] text-gray-300 pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo1.png"
              alt="Entelix"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-white font-semibold text-lg">Entelix</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Entelix is a creative software agency offering custom software
            solutions for web, app, and cloud solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://www.instagram.com/entelixtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E93930] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@entelixtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E93930] transition-colors"
            >
              <FaTiktok size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572147917054"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E93930] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E93930] transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E93930] after:mt-1">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-[#E93930] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-[#E93930] transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#E93930] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#E93930] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E93930] after:mt-1">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/web-development"
                className="hover:text-[#E93930] transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/graphic-design"
                className="hover:text-[#E93930] transition-colors"
              >
                Graphic Design
              </Link>
            </li>
            <li>
              <Link
                to="/software-development"
                className="hover:text-[#E93930] transition-colors"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link
                to="/website-management"
                className="hover:text-[#E93930] transition-colors"
              >
                Website Management
              </Link>
            </li>
            <li>
              <Link
                to="/cloud-solutions"
                className="hover:text-[#E93930] transition-colors"
              >
                Cloud Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E93930] after:mt-1">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="text-[#E93930] flex-shrink-0" size={16} />
              <a
                href="tel:+254719238337"
                className="hover:text-[#E93930] transition-colors"
              >
                +254 719 238 337
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#E93930] flex-shrink-0" size={16} />
              <a
                href="mailto:info@entelix.co.ke"
                className="hover:text-[#E93930] transition-colors"
              >
                info@entelix.co.ke
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="text-[#E93930] flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>
          © {currentYear} <span className="text-[#E93930]">Entelix Technologies</span>. All
          Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link
            to="/privacy"
            className="hover:text-[#E93930] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#E93930] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
