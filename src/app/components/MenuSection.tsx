import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import circularLogo from '@/assets/logo.png';

const menuData = [
  {
    category: "Fresh Bakery by Vakita Bakery",
    description: "Fresh baked bread and pastries, all day long! Grab a fresh loaf or two on the way home – we also have cakes, muffins and more!",
    items: ["Puff Pastries", "Empanadas", "Cachitos", "Tequeños", "Breads", "Croissants", "Croquetas"]
  },
  {
    category: "Dairy Products",
    description: "Need to pick up some milk or eggs on the way home? Make Farm Stores your last stop! We have the freshest dairy products ready and available – we'll bring them right to your car!",
    items: ["Farm Store Milk", "Farm Store Ice Cream", "Farm Store Eggnog", "Butter", "Cheese", "Eggs"]
  },
  {
    category: "Drinks by BEVē",
    description: "Signature craft drinks and brews made just for you.",
    items: ["BEVē Milkshakes", "BEVē Craft Sodas", "BEVē Brews", "BEVē Boba"]
  },
  {
    category: "Ready To Eat",
    description: "When you've got a growling stomach or a backseat full of hungry kids, our ready-to-eat treats are a must! And they're always crowd pleasers. From fresh empanadas to hot soups, you won't find Farm Stores treats anywhere else!",
    items: ["Hot Soups", "Sandwiches", "Empanadas", "Gourmet Cheese Sticks (Tequeños)", "Ham & Cheese Sweet Buns", "Croquettes", "Deli Salads"]
  },
  {
    category: "Snacks",
    description: "Need a quick pick-me-up? Drive through and grab a snack at Farm Stores! We have your favorite chips and candy in addition to freshly-baked cookies and soft-serve ice cream. For all the best treats, you can't beat Farm Stores!",
    items: ["Hot Cookies", "Chips", "Candy"]
  },
  {
    category: "Grocery",
    description: "Farm Stores is your one stop to stock up on all the grocery essentials. From dried goods like cereal and coffee to deli meat and frozen items, if you can find it at the grocery store, chances are you'll find it at Farm Stores too!",
    items: ["Cereals", "Coffee, Sugar, and Cream", "Lunchables", "Sliced Meats & Cheese", "& more!"]
  },
  {
    category: "Beverages",
    description: "Stay refreshed with our wide selection.",
    items: ["Soda", "Water", "Coffee", "Smoothies", "Energy Drinks", "Sports Drinks", "& more!"]
  },
  {
    category: "Beer, Wine, & Tobacco",
    description: "Available at select locations.",
    items: []
  }
];

export function MenuSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="menu" className="py-24 bg-white text-black overflow-hidden relative">
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none w-96 h-96">
        <ImageWithFallback
          src={circularLogo}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-black">
            Our <span className="text-red-600">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {menuData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-black/10 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-['Oswald',sans-serif] text-2xl font-bold uppercase text-black">
                  {section.category}
                </span>
                <span className="text-red-600">
                  {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    <div className="p-6 border-t border-black/10">
                      <p className="text-gray-700 mb-6">{section.description}</p>
                      {section.items.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-2 text-black font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
