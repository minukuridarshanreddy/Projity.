import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-void min-h-screen text-white selection:bg-neon selection:text-black">
      
      {/* Global Noise Overlay */}
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      ></div>

      <Navbar />
      
      <main>
        <Hero />
        <Domains />
        <About />
        <Contact />
      </main>
      
    </div>
  );
};

export default App;