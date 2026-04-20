import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '@/assets/logo.png';

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky w-full top-0 z-50 bg-white shadow-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={logoImage}
                alt="Farm Stores Logo"
                className="h-20 w-auto drop-shadow-sm mix-blend-multiply"
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#order" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors uppercase tracking-widest">Order Now</Link>
            <Link to="/#menu" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors uppercase tracking-widest">Menu</Link>
            <Link to="/#about" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors uppercase tracking-widest">About Us</Link>
            <Link to="/#license" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors uppercase tracking-widest">Licensing</Link>
            <Link to="/#contact" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors uppercase tracking-widest">Contact</Link>
            <Link to="/locations" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider border-2 border-transparent">
              <MapPin size={18} />
              FIND A STORE
            </Link>
          </nav>

          <button className="md:hidden p-2 text-black hover:text-red-600 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
