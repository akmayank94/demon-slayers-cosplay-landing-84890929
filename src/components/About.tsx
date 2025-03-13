
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Sword } from "lucide-react";

const About = () => {
  const [currentTab, setCurrentTab] = useState("story");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-ds-teal/10 text-ds-teal text-sm font-medium mb-3">
              About The Cosplayer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ds-black dark:text-white">
              The Journey of <span className="water-breathing-text">Tanjiro</span>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image with effect */}
            <div className={`lg:w-1/2 relative transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0 transform translate-x-[-50px]'}`}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/67612388-7d50-4bc1-b276-b85a17542e2d.png" 
                  alt="Tanjiro Cosplay" 
                  className="w-full h-auto"
                  loading="lazy" 
                />
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ds-blue/30 to-transparent"></div>
                
                {/* Water circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 opacity-0">
                  <div className="absolute inset-0 border-2 border-ds-teal/30 rounded-full animate-water-ripple"></div>
                  <div className="absolute inset-0 border-2 border-ds-blue/20 rounded-full animate-water-ripple animate-delay-300"></div>
                </div>
              </div>
              
              {/* Decorative pattern */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 checkered-haori opacity-20 rounded-lg"></div>
            </div>
            
            {/* Content */}
            <div className={`lg:w-1/2 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0 transform translate-x-[50px]'}`}>
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                <button 
                  className={`py-3 px-5 font-medium relative ${currentTab === 'story' ? 'text-ds-teal' : 'text-ds-gray dark:text-gray-400 hover:text-ds-black dark:hover:text-white'}`}
                  onClick={() => setCurrentTab('story')}
                >
                  My Story
                  {currentTab === 'story' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ds-teal"></span>}
                </button>
                <button 
                  className={`py-3 px-5 font-medium relative ${currentTab === 'cosplay' ? 'text-ds-teal' : 'text-ds-gray dark:text-gray-400 hover:text-ds-black dark:hover:text-white'}`}
                  onClick={() => setCurrentTab('cosplay')}
                >
                  Tanjiro Cosplay
                  {currentTab === 'cosplay' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ds-teal"></span>}
                </button>
                <button 
                  className={`py-3 px-5 font-medium relative ${currentTab === 'awards' ? 'text-ds-teal' : 'text-ds-gray dark:text-gray-400 hover:text-ds-black dark:hover:text-white'}`}
                  onClick={() => setCurrentTab('awards')}
                >
                  Awards
                  {currentTab === 'awards' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ds-teal"></span>}
                </button>
              </div>
              
              <div className="space-y-6">
                {currentTab === 'story' && (
                  <div className="animate-fade-in">
                    <p className="text-ds-gray dark:text-gray-300 leading-relaxed mb-4">
                      I discovered my passion for cosplay five years ago, drawn to the artistry and performance aspects of bringing characters to life. With a background in theater and costume design, I found cosplay to be the perfect fusion of my creative interests.
                    </p>
                    <p className="text-ds-gray dark:text-gray-300 leading-relaxed mb-4">
                      When I first watched Demon Slayer, I was immediately captivated by Tanjiro's character - his determination, compassion, and unique fighting style. The iconic checkered haori and water breathing technique presented exciting creative challenges that I was eager to tackle.
                    </p>
                    <p className="text-ds-gray dark:text-gray-300 leading-relaxed">
                      Each performance allows me to not just wear the costume, but to embody Tanjiro's spirit and bring his dynamic fighting techniques to the stage. I continuously refine my portrayal, researching traditional Japanese elements and innovating with modern materials.
                    </p>
                  </div>
                )}
                
                {currentTab === 'cosplay' && (
                  <div className="animate-fade-in">
                    <p className="text-ds-gray dark:text-gray-300 leading-relaxed mb-4">
                      My Tanjiro cosplay has been meticulously crafted with attention to every detail. The iconic green and black checkered haori is hand-sewn using authentic Japanese textile techniques, while the costume is complemented by a hand-forged replica of Tanjiro's Nichirin Blade.
                    </p>
                    <p className="text-ds-gray dark:text-gray-300 leading-relaxed mb-4">
                      For performances, I incorporate special effects to recreate the Water Breathing techniques, using a combination of fabric manipulation, LED lighting, and choreographed movements to bring the flowing water effects to life on stage.
                    </p>
                    <div className="flex items-start space-x-4 mt-6">
                      <div className="bg-ds-teal/10 p-3 rounded-full">
                        <Sword className="w-5 h-5 text-ds-teal" />
                      </div>
                      <div>
                        <h4 className="font-medium text-ds-black dark:text-white mb-1">Water Breathing Technique</h4>
                        <p className="text-sm text-ds-gray dark:text-gray-300">Specializing in First Form: Water Surface Slash and Tenth Form: Constant Flux</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === 'awards' && (
                  <div className="animate-fade-in">
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <span className="bg-ds-teal/10 text-ds-teal p-1 rounded-full flex items-center justify-center mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15L8.5 8L15.5 8L12 15Z" fill="currentColor" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-medium text-ds-black dark:text-white">Best Performance Award</h4>
                          <p className="text-sm text-ds-gray dark:text-gray-300">AnimeExpo 2023 - Water Breathing Performance</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-ds-teal/10 text-ds-teal p-1 rounded-full flex items-center justify-center mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15L8.5 8L15.5 8L12 15Z" fill="currentColor" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-medium text-ds-black dark:text-white">Champion Cosplayer</h4>
                          <p className="text-sm text-ds-gray dark:text-gray-300">National Cosplay Competition 2022</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-ds-teal/10 text-ds-teal p-1 rounded-full flex items-center justify-center mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15L8.5 8L15.5 8L12 15Z" fill="currentColor" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-medium text-ds-black dark:text-white">Most Authentic Costume</h4>
                          <p className="text-sm text-ds-gray dark:text-gray-300">Anime Festival Asia 2021</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-ds-teal/10 text-ds-teal p-1 rounded-full flex items-center justify-center mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15L8.5 8L15.5 8L12 15Z" fill="currentColor" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-medium text-ds-black dark:text-white">Guest Performer</h4>
                          <p className="text-sm text-ds-gray dark:text-gray-300">Japan Cultural Festival 2023</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
