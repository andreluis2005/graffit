import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-graffiti text-white mb-4">
                    STREET ART MEETS <span className="text-base">BASE</span>
                </h2>
                <p className="text-xl font-sans text-gray-400 max-w-2xl mx-auto">
                    Merging the raw energy of the streets with the scalability of L2.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {FEATURES.map((feature) => (
                    <div key={feature.id} className="group relative bg-dark p-8 border border-gray-800 hover:border-base transition-all duration-300">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                            <span className="font-graffiti text-4xl text-gray-500">0{feature.id}</span>
                        </div>
                        <div className="mb-6 p-4 bg-gray-900 rounded-full w-fit group-hover:bg-gray-800 transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-sans text-white mb-3 uppercase tracking-wider">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            {feature.description}
                        </p>
                        {/* Hover bar */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-base group-hover:w-full transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;