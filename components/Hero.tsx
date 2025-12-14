import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-overlay"></div>
        {/* Abstract Graffiti Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-base/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 bg-base/10 border border-base/50 rounded text-base font-sans tracking-[0.2em] mb-4">
             BUILT ON BASE 🔵
          </span>
          <h1 className="text-8xl md:text-[10rem] leading-none font-graffiti text-white relative graffiti-shadow select-none">
            GRAFFIT
            <span className="absolute -top-10 -right-10 text-4xl text-spray-red font-sans font-bold rotate-12 bg-white px-2 py-1 text-black shadow-[4px_4px_0px_0px_#000]">
              L2
            </span>
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-4xl text-gray-300 font-sans font-light mb-8 max-w-3xl mx-auto"
        >
          Born from the streets. Built on <span className="text-base font-bold">Base</span>. Powered by the community.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#how-to-buy" className="group relative px-8 py-4 bg-neon-green text-black font-graffiti text-2xl hover:bg-white transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_0px_0px_#0052FF] hover:-translate-y-1 transform">
            <span className="relative z-10">BUY $GRAFFIT</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 w-full h-full transition-opacity"></div>
          </a>
          
          <a href="#community" className="px-8 py-4 bg-transparent border-4 border-white text-white font-graffiti text-2xl hover:bg-white hover:text-black transition-all duration-300">
            JOIN THE GANG
          </a>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center gap-8 opacity-70"
        >
           <div className="text-center">
             <p className="font-bold text-2xl font-graffiti text-base">LOW FEES</p>
           </div>
           <div className="w-px h-10 bg-gray-700"></div>
           <div className="text-center">
             <p className="font-bold text-2xl font-graffiti text-spray-red">NO BS</p>
           </div>
           <div className="w-px h-10 bg-gray-700"></div>
           <div className="text-center">
             <p className="font-bold text-2xl font-graffiti text-neon-purple">PURE ART</p>
           </div>
        </motion.div>

      </div>
      
      {/* Decorative dripping paint at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="block w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#0052FF"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#0052FF"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0A0A0A"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;