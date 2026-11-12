import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Custom Software Development", href: "/software-development" },
    { name: "Web Application Development", href: "/web-development" },
    { name: "Mobile App Development", href: "/services" },
    { name: "Cloud & DevOps Solutions", href: "/cloud-solutions" },
    { name: "Branding & Digital Experiences", href: "/graphic-design" },
    { name: "Website Support & Maintenance", href: "/website-management" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio & Case Studies", href: "/portfolio" },
    { name: "Pricing Packages", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/entelixtech",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: `https://wa.me/254719238337?text=${encodeURIComponent(
        "Hi Entelix, I'd like to discuss a software project."
      )}`,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/entelixtech/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61572147917054",
    },
  ];

  return (
    <footer className="bg-[#101926] text-gray-300 border-t border-white/10 relative overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#0B59ED]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center border border-white/15">
                <Image
                  src="/logo1.png"
                  alt="Entelix Technologies"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  ENTELIX
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#0B59ED] uppercase mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We build high-performance digital solutions. Partnering with businesses and organizations to engineer custom software, web platforms, and modern cloud systems.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#0B59ED] hover:bg-[#0B59ED] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <a
                  href="tel:+254719238337"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0B59ED] flex-shrink-0" />
                  <span>+254 719 238 337</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@entelix.co.ke"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0B59ED] flex-shrink-0" />
                  <span>info@entelix.co.ke</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B59ED] hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Entelix Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

