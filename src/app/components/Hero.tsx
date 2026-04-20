import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617708794505-b61d88b32f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBleHRlcmlvciUyMGRyaXZlJTIwdGhydXxlbnwxfHx8fDE3NzQ0NTE4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Drive-Thru Store"
          className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Oswald',sans-serif] font-bold uppercase tracking-tighter leading-[1.05] mb-10 drop-shadow-2xl text-[clamp(3rem,8vw,100px)] text-transparent bg-clip-text"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzc1MDY4ODczfDA&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          America's Largest <br />
          <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" style={{ WebkitTextFillColor: '#DC2626' }}>Drive-Thru</span> <br />
          Convenience Stores
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
        </motion.div>
      </div>
    </section>
  );
}
