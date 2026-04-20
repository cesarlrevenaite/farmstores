import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Truck } from 'lucide-react';

const partners = [
  {
    name: 'DoorDash',
    color: 'bg-[#FF3008] text-white hover:bg-[#E02906]',
    url: 'https://www.doordash.com/'
  },
  {
    name: 'Uber Eats',
    color: 'bg-[#000000] text-white hover:bg-[#333333]',
    url: 'https://www.ubereats.com/brand/farm-stores'
  },
  {
    name: 'Grubhub',
    color: 'bg-[#FF8000] text-white hover:bg-[#CC6600]',
    url: 'https://www.grubhub.com/'
  },
  {
    name: 'Instacart',
    color: 'bg-[#0AAD0A] text-white hover:bg-[#088A08]',
    url: 'https://www.instacart.com/store/farm-stores/storefront'
  }
];

export function OrderNowSection() {
  return (
    <section id="order" className="py-24 bg-white text-black border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-[2.5rem] translate-x-4 translate-y-4 opacity-10" />
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Grocery Delivery"
              className="relative w-full h-[400px] object-cover rounded-[2.5rem] shadow-lg border-4 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase mb-4 text-sm">
              <Truck size={20} />
              <span>Straight to your door</span>
            </div>
            <h2 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Order <span className="text-red-600">Delivery</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Can't make it to the drive-thru today? No problem. Get your favorite Farm Stores groceries, fresh bakery items, and café drinks delivered fast through our delivery partners. Simply open your preferred app, enter your address, and search for your local Farm Stores:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-xl hover:-translate-y-1 ${partner.color}`}
                >
                  <span>{partner.name}</span>
                  <ExternalLink size={20} className="opacity-70" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
