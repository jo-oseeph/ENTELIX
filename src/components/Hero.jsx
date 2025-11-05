import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleServicesClick = () => {
    window.location.href = '/services';
  };

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
        <div 
          className={`max-w-3xl space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
            Building Digital Solutions That Help Businesses Grow.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            We transform businesses through innovative technology solutions.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 transition-all duration-1000 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <button 
              onClick={handleContactClick}
              className="group relative px-8 cursor-pointer py-4 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-red-500 hover:bg-[#E63946] active:scale-95"
            >
              <span className="relative z-10">Let's Build Together</span>
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
  onClick={handleServicesClick}
  className="group relative px-8 py-4 cursor-pointer text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-[#FF4D4D] hover:text-white active:scale-95 border-2 border-white"
>
  <span className="relative z-10">View Our Work</span>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;