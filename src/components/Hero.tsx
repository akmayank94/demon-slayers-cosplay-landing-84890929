
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70 dark:to-gray-900/90"></div>
        <img 
          src="/lovable-uploads/3e6e90f6-b779-4928-b320-edae7ecae741.png" 
          alt="Tanjiro Cosplay Background" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      
      {/* Water Effect Overlay */}
      <div className="absolute inset-0 bg-ds-blue/10 z-0"></div>
      
      {/* Animated Water Curves */}
      <div className="absolute inset-0 z-0 opacity-20 water-pattern"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-ds-teal/10 text-ds-teal text-sm font-medium mb-6 animate-fade-in">
              Professional Cosplayer
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <span className="water-breathing-text">水の呼吸 </span>
            <span className="block mt-2 text-ds-black dark:text-white">Water Breathing Tanjiro</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-ds-gray dark:text-gray-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            Award-winning cosplay performances bringing the iconic Demon Slayer character to life with authentic costume design and dynamic water breathing technique effects.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <a 
              href="#about" 
              className="bg-ds-teal hover:bg-ds-darkTeal text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center group"
            >
              Discover My Cosplay
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#gallery" 
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-ds-black dark:text-white border border-gray-200 dark:border-gray-700 font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-ds-gray dark:text-gray-300 mb-2">Scroll Down</span>
        <svg 
          className="w-6 h-6 text-ds-teal" 
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
