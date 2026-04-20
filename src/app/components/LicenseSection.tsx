import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from '@/assets/logo-white.png';

export function LicenseSection() {
  return (
    <section id="license" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-white p-4 rounded-3xl inline-flex mb-8 shadow-[0_0_30px_rgba(255,0,0,0.3)] border-2 border-red-600/50">
            <ImageWithFallback
              src={logoImage}
              alt="Farm Stores Logo"
              className="w-32 h-auto object-contain"
            />
          </div>
          <h2 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Licensing <span className="text-red-600">Information Request</span>
          </h2>
          <p className="text-lg text-gray-400">
            Please fill out the form below to receive more information about owning a Farm Stores license.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white text-black p-8 md:p-12 rounded-3xl shadow-2xl border-t-8 border-red-600"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name *</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name *</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email *</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Mobile *</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">State *</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required>
                  <option value="">Select a State</option>
                  <option value="FL">Florida</option>
                  <option value="TX">Texas</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="OTHER">Other State</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">City of Interest *</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Do you have a minimum of $150,000 liquid capital to invest? *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="capital" className="w-5 h-5 text-red-600 focus:ring-red-600" required />
                  <span className="font-medium">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="capital" className="w-5 h-5 text-red-600 focus:ring-red-600" required />
                  <span className="font-medium">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">What is your preferred timeframe? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Immediately', 'Within 6 months', 'Within a Year', 'More than a Year'].map((time) => (
                  <label key={time} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="timeframe" className="w-5 h-5 text-red-600 focus:ring-red-600" required />
                    <span className="font-medium">{time}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Please tell us a bit more, it helps a lot.</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"></textarea>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-6 italic">Please click the "Submit" button below and then check your email inbox for a message from us.</p>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 rounded-xl shadow-xl shadow-red-600/30 hover:-translate-y-1 transition-all uppercase tracking-wider">
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
