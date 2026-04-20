import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBasket, Croissant, Coffee, Milk } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import cafeImage from '@/assets/cafe.png';
import bakeryImage from '@/assets/bakery.png';
import groceryImage from '@/assets/grocery.png';

const categories = [
  {
    title: 'Grocery',
    icon: ShoppingBasket,
    image: groceryImage,
    description: 'Your favorite household staples and brand names. From cereal to laundry detergent, we have everything you need.'
  },
  {
    title: 'Bakery',
    icon: Croissant,
    image: bakeryImage,
    description: 'Hot, fresh baked goods served daily. Enjoy our fresh bread and delicious empanadas on the go!'
  },
  {
    title: 'Café',
    icon: Coffee,
    image: cafeImage,
    description: 'A variety of beverages, from milkshakes to lattes. Grab a morning coffee or an evening smoothie, fast and fresh.'
  },
  {
    title: 'Dairy',
    icon: Milk,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    description: 'High-quality dairy delivered to your car. Enjoy fresh milk, local eggs, and our world-famous eggnog.'
  }
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            A Small Store Can Be <br className="md:hidden" />
            <span className="text-red-600">A Huge Help</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Farm Stores provides a unique neighborhood experience. A combination of grocery store, bakery, and café, we give you the freshest products in the most convenient manner: the equivalent of a drive-thru supermarket express lane.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] cursor-pointer"
              >
                <div className="absolute inset-0 bg-white group-hover:bg-gray-50 transition-colors duration-500 z-0" />
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 z-10 ${category.title === 'Dairy' ? 'object-cover p-0' : 'object-contain p-4 lg:p-5'}`}
                />
                <div className="absolute inset-0 z-20 p-4 lg:p-5 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="bg-red-600 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-2 lg:mb-3 shadow-lg shadow-red-600/30 transform group-hover:-translate-y-2 transition-all duration-500 border-2 border-white">
                    <Icon size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-['Oswald',sans-serif] text-xl lg:text-2xl font-bold text-white uppercase tracking-wider mb-1 lg:mb-2 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 text-xs lg:text-sm leading-snug transform opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-150">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
