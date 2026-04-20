import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChefHat, ArrowRight } from 'lucide-react';
import baguetteImage from '@/assets/baguette.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BakerySection() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase mb-4 text-sm">
              <ChefHat size={20} />
              <span>Baked Right When You Order!</span>
            </div>
            <h2 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6">
              OUR FAMOUS <br/>
              <span className="text-red-600">FRENCH BAGUETTES</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Farm Stores is the only drive-through market that delivers piping hot, freshly baked treats right when you order them. So skip the stale pastries and treat yourself to the real deal. Visit Farm Stores for a little slice of heaven on the go, served hot and fresh just for you!
              </p>
              <p>
                Looking for a way to get your hands on a freshly baked French baguette without leaving the comfort of your car? Look no further than Farm Stores! We're the only place where you can enjoy the warm, crusty goodness of a French baguette without ever having to step out of your ride. Come visit us at Farm Stores for a drive-thru experience that's as satisfying as it is convenient!
              </p>
            </div>
            <Link to="/#menu" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/30 hover:-translate-y-1 group uppercase tracking-wider">
              Explore Our Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full translate-x-8 -translate-y-4 opacity-20 blur-2xl" />
            <ImageWithFallback
              src={baguetteImage}
              alt="Fresh Baked Baguettes"
              className="relative rounded-t-full rounded-b-3xl object-cover w-full h-[600px] shadow-2xl border-4 border-black"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
