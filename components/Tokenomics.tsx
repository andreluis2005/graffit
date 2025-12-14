import React from 'react';
import { TOKENOMICS_DATA } from '../constants';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-dark relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-graffiti text-center text-white mb-16 base-shadow -rotate-1">
          TOKENOMICS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual Art Side */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center border-4 border-white p-8 bg-concrete bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
                <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-white rounded-full"></div>
                
                <div className="text-center relative z-10">
                    <p className="text-9xl font-graffiti text-base opacity-90 blur-[1px]">1B</p>
                    <p className="text-4xl font-sans font-bold text-white bg-black inline-block px-4 -mt-8 relative z-20 transform -rotate-3">SUPPLY</p>
                </div>
                
                {/* Spray drips overlay */}
                <div className="absolute top-0 left-1/4 w-2 h-32 bg-base opacity-80 rounded-b-full"></div>
                <div className="absolute top-0 right-1/3 w-3 h-20 bg-neon-green opacity-80 rounded-b-full"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6">
                {TOKENOMICS_DATA.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-gray-900 border-l-4 border-neon-purple hover:bg-gray-800 transition-colors group">
                        <span className="text-xl font-sans text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{item.label}</span>
                        <span className="text-3xl font-graffiti text-white group-hover:scale-110 transform transition-transform duration-300">{item.value}</span>
                    </div>
                ))}
                
                <div className="mt-8 p-6 bg-base/10 border border-base/30 rounded text-center">
                    <p className="font-sans text-gray-300 text-sm uppercase mb-2">Contract Address</p>
                    <p className="font-mono text-base md:text-xl text-white break-all hover:text-neon-green cursor-pointer transition-colors">
                        0x1234...5678deadbeef
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;