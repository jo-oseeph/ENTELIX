import React from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <a href="mailto:contact@entelix.com" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <Mail className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">Email</h3>
          <p className="text-gray-600 group-hover:text-blue-950 transition-colors">contact@entelix.com</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to email us →</span>
        </div>
      </a>

      <a href="tel:+254719238337" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <Phone className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">Phone</h3>
          <p className="text-gray-600 group-hover:text-blue-950 transition-colors">+254 719238337</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to call now →</span>
        </div>
      </a>

      <a href="https://wa.me/254719238337" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-red-50 p-3 rounded-lg transition-all duration-300">
        <MessageCircle className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-950 group-hover:text-red-500 transition-colors">WhatsApp</h3>
          <p className="text-gray-600 group-hover:text-blue-950 transition-colors">+254 719238337</p>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to WhatsApp us →</span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <MapPin className="text-blue-600" size={24} />
        <div>
          <h3 className="font-semibold text-blue-950">Location</h3>
          <p className="text-gray-600">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
