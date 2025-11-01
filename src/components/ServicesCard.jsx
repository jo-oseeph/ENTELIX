import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index, isVisible }) => {
  const Icon = service.icon;
  
  return (
    <div
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 border-t-4 border-t-red-500">
        {/* Icon Container */}
        <div className="p-8 text-left">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-lg mb-6 group-hover:bg-red-100 transition-colors">
            <Icon className="w-8 h-8 text-red-500" />
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-red-500 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Learn More Button */}
         {service.path && (
  <Link
    to={service.path}
    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-semibold text-sm rounded-lg hover:bg-blue-900 transition-all duration-300 group/btn shadow-md hover:shadow-lg"
  >
    Learn More
    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
  </Link>
)}

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;