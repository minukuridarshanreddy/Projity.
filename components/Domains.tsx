import React from 'react';
import { motion } from 'framer-motion';
import { DOMAINS } from '../constants';
import { DomainItem } from '../types';

const Card: React.FC<{ domain: DomainItem; index: number }> = ({ domain, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-neon/50 transition-colors duration-500 h-[300px] md:h-[350px] flex flex-col justify-end p-6 ${domain.colSpan || 'col-span-1'}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={domain.image} 
          alt={domain.title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 group-hover:bg-neon group-hover:text-black transition-colors duration-300">
          <domain.icon size={24} />
        </div>
        
        <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
          {domain.title}
        </h3>
        
        <p className="font-outfit text-gray-400 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[90%]">
          {domain.description}
        </p>
      </div>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

const Domains: React.FC = () => {
  return (
    <section id="domains" className="py-24 px-6 md:px-12 bg-void relative">
      <div className="container mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-6">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="font-syne font-extrabold text-5xl md:text-7xl text-white uppercase leading-none">
                Our <span className="text-neon outline-text">Domains</span>
              </h2>
           </motion.div>
           <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-outfit text-gray-400 max-w-sm text-right md:text-lg"
           >
             Expertise across the entire stack. From conceptualization to deployment.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {DOMAINS.map((domain, index) => (
            <Card key={domain.id} domain={domain} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;