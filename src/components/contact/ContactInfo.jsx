import React from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <a href="mailto:contact@entelix.com" className="flex items-center gap-4 group">
        <Mail className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div>
          <h3 className="font-semibold text-blue-950">Email</h3>
          <p className="text-gray-600">contact@entelix.com</p>
        </div>
      </a>

      <a href="tel:+254700000000" className="flex items-center gap-4 group">
        <Phone className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div>
          <h3 className="font-semibold text-blue-950">Phone</h3>
          <p className="text-gray-600">+254 700 000 000</p>
        </div>
      </a>

      <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
        <MessageCircle className="text-blue-600 group-hover:text-red-500 transition-colors" size={24} />
        <div>
          <h3 className="font-semibold text-blue-950">WhatsApp</h3>
          <p className="text-gray-600">+254 700 000 000</p>
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
