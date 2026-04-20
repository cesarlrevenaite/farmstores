import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Milk, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DairySection() {
  return (
    <section className="py-24 bg-gray-50 text-black overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase mb-4 text-sm">
              <Milk size={20} />
              <span>Straight from the Farm to Your Car</span>
            </div>
            <h2 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6">
              FRESHEST <br/>
              <span className="text-red-600">DAIRY PRODUCTS</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Need to pick up some milk or eggs on the way home? Make Farm Stores your last stop! We have the freshest dairy products ready and available – and the best part is, we'll bring them right to your car!
              </p>
              <p>
                Say goodbye to crowded aisles and long checkout lines. From creamy, fresh-tasting milk to locally-sourced eggs and our world-famous eggnog, Farm Stores is your one-stop shop for high-quality dairy essentials. Get everything you need without ever unbuckling your seatbelt!
              </p>
            </div>
            <Link to="/#menu" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-600/30 hover:-translate-y-1 group uppercase tracking-wider">
              Explore Our Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full -translate-x-8 -translate-y-4 opacity-20 blur-2xl" />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1552593050-477020c5af3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGRhaXJ5JTIwcHJvZHVjdHMlMjBtaWxrJTIwZWdnc3xlbnwxfHx8fDE3NzYyODA5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Fresh Dairy Products" 
              className="relative rounded-t-full rounded-b-3xl object-cover w-full h-[600px] shadow-2xl border-4 border-black"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}