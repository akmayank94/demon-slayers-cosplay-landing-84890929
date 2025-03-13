
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ds-black text-white relative">
      {/* Top wave pattern */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-white dark:text-background"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-bold text-2xl mb-6 water-breathing-text">水の呼吸 <span className="font-normal text-white">| Tanjiro Cosplay</span></h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional Demon Slayer cosplayer specializing in Tanjiro Kamado performances, available for conventions, private events, and competitions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ds-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ds-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ds-teal transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ds-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-ds-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-ds-teal transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-ds-teal transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#performances" className="text-gray-400 hover:text-ds-teal transition-colors">Performances</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-ds-teal transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-6">Upcoming Events</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-ds-teal text-sm">July 15-17, 2023</span>
                <p className="text-white">Anime Expo Los Angeles</p>
              </li>
              <li>
                <span className="text-ds-teal text-sm">August 5-6, 2023</span>
                <p className="text-white">Japan Festival NYC</p>
              </li>
              <li>
                <span className="text-ds-teal text-sm">September 22-24, 2023</span>
                <p className="text-white">Anime Festival Asia</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Tanjiro Cosplay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-ds-teal text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-ds-teal text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
