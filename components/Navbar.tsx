import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [glass, setGlass] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setGlass(true);
    } else {
      setGlass(false);
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-4`}
    >
      <div 
        className={`
          flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500
          ${glass 
            ? 'bg-void/70 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] w-full max-w-5xl' 
            : 'bg-transparent w-full'
          }
        `}
      >
        <a href="#" onClick={(e) => handleScroll(e, '#')} className="relative group cursor-pointer">
          <span className="font-syne font-extrabold text-2xl tracking-widest text-white">
            PROJITY<span className="text-neon">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full"></span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-outfit text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          onClick={(e) => handleScroll(e, '#contact')}
          className="hidden md:block px-5 py-2 rounded-full border border-white/20 font-outfit text-sm font-bold bg-white/5 hover:bg-neon hover:text-black hover:border-neon transition-all duration-300 cursor-pointer"
        >
          START
        </a>

        {/* Mobile Menu Icon Placeholder - Simplified for this layout */}
        <div className="md:hidden text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;