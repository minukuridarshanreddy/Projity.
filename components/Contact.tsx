import React from 'react';
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const whatsAppLink = "https://wa.me/917989125603";
  const emailLink = "mailto:projitydot@gmail.com";
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/917989125603&color=050505&bgcolor=Eab308";

  return (
    <section id="contact" className="bg-void border-t border-white/10 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Noise/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon/5 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24 items-start">
          
          {/* Left Column: Details (Slide from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            <div>
              <h2 className="font-syne font-black text-7xl md:text-9xl text-white leading-[0.85] tracking-tighter mb-8">
                LET'S <br />
                <span className="text-neon drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">WORK.</span>
              </h2>
              <p className="font-outfit text-gray-400 text-xl md:text-2xl max-w-lg leading-relaxed font-light">
                Academic Excellence, Engineered. <br/>
                We build the software that builds your future.
              </p>
            </div>

            <div className="space-y-10">
               {/* WhatsApp Block */}
               <a 
                 href={whatsAppLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex items-start gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon/50 hover:bg-white/10 transition-all duration-300"
               >
                  <div className="p-5 rounded-full bg-void border border-white/10 group-hover:border-neon group-hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all duration-300 hidden md:block">
                    <MessageCircle className="text-white group-hover:text-neon transition-colors" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono text-neon text-xs tracking-[0.2em] uppercase mb-2">WhatsApp / Mobile</h4>
                    <span className="font-syne font-bold text-3xl md:text-5xl text-white group-hover:text-neon transition-colors block mb-2 leading-none">
                      +91 79891 25603
                    </span>
                    <p className="font-outfit text-base text-gray-500 mt-2">Instant response for project queries.</p>
                  </div>
               </a>

               {/* Email Block */}
               <a 
                 href={emailLink}
                 className="group flex items-start gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon/50 hover:bg-white/10 transition-all duration-300"
               >
                  <div className="p-5 rounded-full bg-void border border-white/10 group-hover:border-neon group-hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all duration-300 hidden md:block">
                    <Mail className="text-white group-hover:text-neon transition-colors" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono text-neon text-xs tracking-[0.2em] uppercase mb-2">Email Support</h4>
                    <span className="font-syne font-bold text-2xl md:text-4xl text-white group-hover:text-neon transition-colors block mb-2 break-all leading-tight">
                      projitydot@gmail.com
                    </span>
                    <p className="font-outfit text-base text-gray-500 mt-2">Official project documentation & quotes.</p>
                  </div>
               </a>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-6 border-t border-white/5">
               <div className="relative group">
                 <div className="absolute inset-0 bg-neon blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                 <div className="relative bg-white p-3 rounded-2xl">
                   <img 
                      src={qrCodeUrl} 
                      alt="WhatsApp QR Code" 
                      className="w-[140px] h-[140px] mix-blend-normal"
                   />
                 </div>
               </div>
               <div className="text-center md:text-left py-2">
                  <span className="font-mono text-xs text-neon uppercase tracking-[0.2em] block mb-2">Scan to Chat</span>
                  <p className="font-outfit text-lg text-white max-w-[200px] leading-snug">
                    Open camera to start a conversation instantly.
                  </p>
               </div>
            </div>

          </motion.div>

          {/* Right Column: Form (Slide from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-12 lg:sticky lg:top-24"
          >
            <div className="bg-void/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <h3 className="font-syne font-bold text-4xl md:text-5xl text-white mb-10 tracking-tight">Send a Request</h3>
              <form className="space-y-8">
                <div className="group relative">
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-5 text-xl text-white focus:outline-none focus:border-neon transition-colors font-outfit peer placeholder-transparent" 
                    placeholder="Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-4 text-gray-500 text-xs font-mono transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-neon peer-focus:text-xs tracking-[0.15em] uppercase"
                  >
                    Name
                  </label>
                </div>

                <div className="group relative">
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-5 text-xl text-white focus:outline-none focus:border-neon transition-colors font-outfit peer placeholder-transparent" 
                    placeholder="Mobile"
                    id="mobile"
                  />
                  <label 
                    htmlFor="mobile" 
                    className="absolute left-0 -top-4 text-gray-500 text-xs font-mono transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-neon peer-focus:text-xs tracking-[0.15em] uppercase"
                  >
                    Mobile Number
                  </label>
                </div>
                
                <div className="group relative">
                   <select 
                      id="service"
                      className="w-full bg-transparent border-b border-white/20 py-5 text-xl text-white focus:outline-none focus:border-neon transition-colors font-outfit appearance-none cursor-pointer"
                   >
                      <option className="bg-void text-gray-500">Select Project Domain</option>
                      <option className="bg-void">Web Development</option>
                      <option className="bg-void">App Development</option>
                      <option className="bg-void">Machine Learning</option>
                      <option className="bg-void">Data Science</option>
                      <option className="bg-void">Blockchain</option>
                   </select>
                   <label 
                    htmlFor="service" 
                    className="absolute left-0 -top-4 text-neon text-xs font-mono tracking-[0.15em] uppercase"
                  >
                    Requirement
                  </label>
                </div>

                <div className="group relative">
                    <textarea 
                      rows={4} 
                      className="w-full bg-transparent border-b border-white/20 py-5 text-xl text-white focus:outline-none focus:border-neon transition-colors font-outfit resize-none peer placeholder-transparent" 
                      placeholder="Message"
                      id="message"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-0 -top-4 text-gray-500 text-xs font-mono transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-neon peer-focus:text-xs tracking-[0.15em] uppercase"
                    >
                      Project Description
                    </label>
                </div>

                <button className="w-full py-6 bg-neon text-black font-syne font-bold text-2xl rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 mt-4">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    SUBMIT REQUEST
                    <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-6">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-neon shadow-[0_0_10px_#Eab308]"></div>
             <span className="font-syne font-bold text-2xl text-white tracking-wide">PROJITY.</span>
          </div>
          
          <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em] text-center md:text-right">
            © 2026 Projity · Academic Software Studio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;