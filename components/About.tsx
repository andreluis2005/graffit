import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative border-t-4 border-base">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-6xl md:text-8xl font-graffiti text-off-white rotate-2 base-shadow">
            WHAT IS THIS?
          </h2>
          <div className="w-64 h-2 bg-spray-red absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-3 -z-10 blur-sm"></div>
        </div>

        {/* Content Box */}
        <div className="bg-concrete p-8 md:p-12 transform -rotate-1 shadow-[10px_10px_0px_0px_#2A2A2A] border-l-8 border-neon-green">
          <p className="text-xl md:text-2xl font-sans text-gray-300 mb-8 leading-relaxed">
            <span className="font-bold text-white text-3xl">GRAFFIT</span> is a memecoin inspired by <span className="text-neon-green">urban art</span> and graffiti culture, deployed on <span className="text-base font-bold">Base</span> — Ethereum’s Layer 2 by Coinbase.
          </p>
          <p className="text-xl md:text-2xl font-sans text-gray-300 mb-8 leading-relaxed">
            It represents freedom of expression, street creativity and the power of low-cost, fast on-chain culture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
             <div className="bg-dark/50 p-4 border border-gray-700 rounded-sm">
                <span className="block text-spray-red text-4xl font-graffiti mb-2">NO</span>
                <span className="font-sans uppercase tracking-widest text-sm">Fake Promises</span>
             </div>
             <div className="bg-dark/50 p-4 border border-gray-700 rounded-sm">
                <span className="block text-spray-red text-4xl font-graffiti mb-2">NO</span>
                <span className="font-sans uppercase tracking-widest text-sm">Suits</span>
             </div>
             <div className="bg-dark/50 p-4 border border-gray-700 rounded-sm">
                <span className="block text-neon-green text-4xl font-graffiti mb-2">JUST</span>
                <span className="font-sans uppercase tracking-widest text-sm">Art & Vibes</span>
             </div>
          </div>
        </div>

      </div>

      {/* Decorative Spray Can */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
         {/* Simplified visual for spray effect */}
         <div className="w-96 h-96 rounded-full bg-base blur-[120px]"></div>
      </div>
    </section>
  );
};

export default About;