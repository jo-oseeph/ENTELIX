import { MessageCircle, Eye } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-950/60 to-red-600/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            OUR SERVICES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 font-light">
            Comprehensive technology solutions to transform your business and drive innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 text-red-600 bg-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl">
              <Eye className="w-5 h-5" />
              <span>View Pricing</span>
            </button>
            
            <button className="group relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 border-2 border-white hover:bg-white hover:text-red-600 flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;