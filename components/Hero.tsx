import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Background Image with Parallax-like feel via fixed attachment or simple img */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 border border-neon/30 bg-neon/5 rounded-full px-4 py-1 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
          <span className="text-neon font-mono text-xs font-bold tracking-widest uppercase">Next Gen IT Solutions</span>
        </motion.div>

        <motion.h1 
          className="font-syne font-extrabold text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-white tracking-tighter mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          ACADEMIC <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">EXCELLENCE.</span> <br />
          <span className="relative">
            ENGINEERED<span className="text-neon">.</span>
            <motion.div 
              className="absolute -right-8 top-0 md:-right-16 md:top-4 w-12 h-12 md:w-20 md:h-20 border border-white/20 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
          </span>
        </motion.h1>

        <motion.p 
          className="font-outfit text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bridging the gap between B.Tech theory and Real-World implementation. 
          <span className="text-white font-medium block mt-2">We build, you graduate.</span>
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 w-full md:w-auto relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="cursor-pointer group relative px-10 py-5 bg-neon text-black font-syne text-lg rounded-none skew-x-[-12deg] transition-all duration-300 hover:shadow-[0_0_50px_rgba(234,179,8,0.7)] hover:bg-yellow-300 inline-flex items-center justify-center overflow-hidden"
          >
            <div className="skew-x-[12deg] relative flex items-center gap-3">
              <div className="h-[1.5em] overflow-hidden relative w-full">
                <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                   <span className="font-bold h-[1.5em] flex items-center whitespace-nowrap">Start Your Project</span>
                   <span className="font-extrabold h-[1.5em] flex items-center whitespace-nowrap">Start Your Project</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
          
          <a 
            href="#domains"
            onClick={(e) => handleScroll(e, '#domains')}
            className="cursor-pointer group px-8 py-4 border border-white/20 text-white font-syne font-bold text-lg rounded-none skew-x-[-12deg] hover:bg-white/5 transition-colors inline-flex justify-center"
          >
             <span className="block skew-x-[12deg] flex items-center gap-2">
              View Domains <ArrowDownRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-neon/5 to-transparent z-0 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', perspective: '1000px', transform: 'rotateX(60deg) translateY(100px)' }}>
      </div>
    </section>
  );
};

export default Hero;