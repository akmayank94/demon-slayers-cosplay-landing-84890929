
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  
  const images = [
    {
      src: "/lovable-uploads/1e55c7cc-b851-438d-81ca-0f3e64ba68da.png",
      alt: "Tanjiro cosplay with water effect",
      caption: "Water Breathing Technique Performance"
    },
    {
      src: "/lovable-uploads/cf2356d6-9269-4a8b-b8ac-09d3b309ecc3.png",
      alt: "Tanjiro cosplay on stage",
      caption: "Anime Convention Performance"
    },
    {
      src: "/lovable-uploads/86fe17d4-9856-4b17-b542-7850fd3c6348.png",
      alt: "Tanjiro cosplay pose",
      caption: "Award Ceremony"
    },
    {
      src: "/lovable-uploads/0d39677d-891f-457d-942d-72485fce9e9d.png",
      alt: "Tanjiro walking on stage",
      caption: "Stage Performance"
    },
    {
      src: "/lovable-uploads/61053fcc-7768-4830-be22-4c7a73864c67.png",
      alt: "Tanjiro with fire effect",
      caption: "Fire and Water Technique Demonstration"
    },
    {
      src: "/lovable-uploads/cde51eb1-2cec-4e1a-a665-85ce80d837e2.png",
      alt: "Full costume display",
      caption: "Complete Costume Showcase"
    }
  ];
  
  // Close modal when pressing escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-800 relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-ds-teal/10 text-ds-teal text-sm font-medium mb-3">
              Cosplay Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ds-black dark:text-white">
              Capturing the <span className="water-breathing-text">Spirit</span> of Tanjiro
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative bg-white dark:bg-gray-900"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative pt-[75%] overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ds-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-ds-black dark:text-white font-medium group-hover:text-ds-teal transition-colors">{image.caption}</h3>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-ds-teal/20 rounded-lg transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full p-4 animate-fade-in">
            <button 
              className="absolute top-5 right-5 z-10 text-white bg-ds-black/50 hover:bg-ds-black p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
