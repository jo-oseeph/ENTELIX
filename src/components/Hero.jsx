import { Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-950/60 to-red-600/40"></div>
      
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-400/60 rounded-full animate-pulse delay-700"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
            We Build The Future Of Digital Technology
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            Transforming businesses through innovative technology solutions || Premier digital services company delivering excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
            <button className="group relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-red-500 hover:bg-red-600 flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </button>
            
            <button className="group relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;