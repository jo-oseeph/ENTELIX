import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.531 5.847L.057 23.547a.75.75 0 0 0 .921.921l5.7-1.474A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.434l-.372-.22-3.384.875.893-3.265-.242-.38A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const ContactInfo = () => {
  return (
    <div className="space-y-3">
      <a href="mailto:contact@entelix.com" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <Mail className="text-blue-950 group-hover:text-red-500 transition-colors" size={24} />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">Email</h3>
          <p className="text-gray-600 group-hover:text-blue-950 transition-colors">info@entelix.co.ke</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to email us →</span>
        </div>
      </a>

      <a href="tel:+254719238337" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <Phone className="text-blue-950 group-hover:text-red-500 transition-colors" size={24} />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">Phone</h3>
          <p className="text-gray-600 group-hover:text-[#0B2153] transition-colors">+254 719238337</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to call now →</span>
        </div>
      </a>

      <a href="https://wa.me/254719238337" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <WhatsAppIcon size={24} className="text-blue-950 group-hover:text-red-500 transition-colors" />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">WhatsApp</h3>
          <p className="text-gray-600 group-hover:text-blue-950 transition-colors">+254 719238337</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to WhatsApp us →</span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <MapPin className="text-blue-950" size={24} />
        <div>
          <h3 className="font-semibold text-blue-950">Location</h3>
          <p className="text-gray-600">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;