import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import circularLogo from '@/assets/logo.png';
import vintageHistoryImage from '@/assets/vintage-history.png';

export function AboutUsSection() {
  return (
    <section id="about" className="py-32 bg-red-600 text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white text-black rounded-full inline-flex mb-8 shadow-xl border-4 border-black overflow-hidden items-center justify-center w-28 h-28">
              <ImageWithFallback
                src={circularLogo}
                alt="Bakery Grocery Cafe"
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
            <h2 className="font-['Oswald',sans-serif] text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1.1] mb-8">
              ABOUT <span className="text-black">US</span>
            </h2>
            <div className="space-y-6 text-lg text-red-50 font-medium leading-relaxed">
              <p>
                Farm Stores provides a unique neighborhood experience. A combination of grocery store, bakery and restaurant, we give you the freshest products in the most convenient manner: the equivalent of a drive-thru supermarket express lane.
              </p>
              <p>
                We offer all your favorite grocery brands in addition to products you won't find anywhere else, and we bring it all directly to your car! In fact, Farm Stores has been a convenient last stop on the way home for families for nearly 60 years.
              </p>
              <p>
                Although Farm Stores has evolved to best serve the needs of today's busy consumer, our brand integrity has remained intact. A nostalgic experience for multiple generations of Floridians, we are now licensing our beloved brand, bringing the Farm Stores experience to communities across America and beyond.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 opacity-50 blur-xl rounded-3xl" />
            <ImageWithFallback
              src={vintageHistoryImage}
              alt="Farm Stores History"
              className="relative rounded-3xl object-cover w-full h-[600px] shadow-2xl border-8 border-black"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
