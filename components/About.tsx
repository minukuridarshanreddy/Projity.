import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-void relative overflow-hidden">
      {/* Decorative large text bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h2 className="font-syne font-black text-[20vw] text-white whitespace-nowrap">PROJITY</h2>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-neon font-mono text-sm tracking-widest uppercase mb-6 block">Our Story</span>
          
          <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
            We don't just write code. <br />
            <span className="text-gray-500">We engineer futures.</span>
          </h2>

          <div className="font-outfit text-lg md:text-xl text-gray-400 space-y-6 leading-relaxed text-left md:text-center mx-auto max-w-3xl">
            <p>
              Born from the frustration of theoretical disconnect, Projity emerged as a bridge. 
              We saw brilliant minds trapped in textbooks, struggling to translate concepts into code.
            </p>
            <p>
              Today, we are a collective of senior engineers and academic visionaries. 
              We partner with students to build real, scalable, and industry-standard software. 
              This isn't just a project submission; it's the first line of your professional portfolio.
            </p>
          </div>

          <motion.div 
            className="mt-12 flex justify-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <span className="block font-syne font-bold text-4xl text-white">500+</span>
              <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Projects</span>
            </div>
            <div>
              <span className="block font-syne font-bold text-4xl text-white">100%</span>
              <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Success Rate</span>
            </div>
            <div>
              <span className="block font-syne font-bold text-4xl text-white">24/7</span>
              <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;