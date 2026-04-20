import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/f0867dbc1cceba68a4f63ea9911f773df70a7e81.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-300 py-20 border-t-[12px] border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
              <ImageWithFallback 
                src={logoImage} 
                alt="Farm Stores Logo" 
                className="w-48 h-auto drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] bg-white/5 p-4 rounded-xl backdrop-blur-sm" 
              />
            </Link>
            <p className="text-base text-gray-400 mb-8 leading-relaxed font-medium">
              America's largest drive-thru convenience store. Always fast. Always fresh. Serving communities with pride.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/farmstores" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/farmstores" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['Oswald',sans-serif] text-2xl text-white mb-8 uppercase tracking-wider">Headquarters One</h4>
            <div className="space-y-6">
              <div>
                <address className="not-italic text-base text-gray-400 space-y-2 font-medium">
                  <p>PO Box 330728</p>
                  <p>Miami, FL 33233</p>
                  <p className="pt-4 text-red-500 hover:text-white transition-colors cursor-pointer font-bold text-lg">(800) 726-3276</p>
                </address>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Empty column for spacing as per original layout but without the second headquarters */}
          </div>

          <div>
            <h4 className="font-['Oswald',sans-serif] text-2xl text-white mb-8 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/locations" className="text-base text-gray-400 font-medium hover:text-red-500 transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-600"></span> Store Locator</Link></li>
              <li><Link to="/#license" className="text-base text-gray-400 font-medium hover:text-red-500 transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-600"></span> Licensing Opportunities</Link></li>
              <li><Link to="/#contact" className="text-base text-gray-400 font-medium hover:text-red-500 transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-600"></span> Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-base text-gray-400 font-medium hover:text-red-500 transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-600"></span> Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-base text-gray-400 font-medium hover:text-red-500 transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-600"></span> FAQ</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Farm Stores. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}