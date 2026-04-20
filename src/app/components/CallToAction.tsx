import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Briefcase } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-32 bg-red-600 overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Oswald',sans-serif] text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1.1] mb-8">
            Always Fast. <br />
            <span className="text-black drop-shadow-lg">Always Fresh.</span>
          </h2>

          <p className="text-2xl text-red-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Drive-Thru Today! Experience the ultimate convenience. We bring the store to your car door.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/locations" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-black/50 hover:-translate-y-1 uppercase tracking-wider border-2 border-transparent">
              <MapPin size={24} />
              STORE LOCATOR
            </Link>
            <Link to="/#license" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-red-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-white/50 hover:-translate-y-1 uppercase tracking-wider border-2 border-transparent">
              <Briefcase size={24} />
              LICENSE WITH US
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
