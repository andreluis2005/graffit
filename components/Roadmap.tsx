import React from 'react';
import { ROADMAP } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-[#111] relative overflow-hidden">
      {/* Brick Wall Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-6xl md:text-8xl font-graffiti text-center text-white mb-20">
          THE WALL AHEAD
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROADMAP.map((phase, index) => (
                <div key={index} className="relative group">
                    {/* Spray paint background behind card */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-base/20' : index === 1 ? 'from-neon-purple/20' : 'from-spray-red/20'} to-transparent blur-xl rounded-xl transform group-hover:scale-105 transition-transform duration-500`}></div>
                    
                    <div className="relative bg-dark/90 p-8 border border-gray-700 h-full backdrop-blur-sm">
                        <div className="absolute -top-6 -left-2 bg-white text-black font-graffiti text-2xl px-4 py-2 transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            {phase.phase}
                        </div>
                        
                        <h3 className="mt-8 text-3xl font-bold font-sans text-white mb-6 uppercase border-b border-gray-700 pb-4">
                            {phase.title}
                        </h3>
                        
                        <ul className="space-y-4">
                            {phase.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 font-sans">
                                    <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${index === 0 ? 'text-base' : index === 1 ? 'text-neon-purple' : 'text-spray-red'}`} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;