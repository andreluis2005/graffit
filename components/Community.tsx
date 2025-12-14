import React from 'react';
import { SOCIALS } from '../constants';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 bg-dark flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-dark to-dark"></div>
      
      <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-graffiti text-white mb-6">
            JOIN THE <span className="text-neon-green">CREW</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-sans mb-12">
            Artists, degens, creators and believers building culture on <span className="text-base font-bold">Base</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {SOCIALS.map((social) => (
                <a 
                    key={social.name} 
                    href={social.href}
                    className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold font-sans uppercase hover:bg-base hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:skew-x-2"
                >
                    {social.icon}
                    {social.name}
                </a>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Community;