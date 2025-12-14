import React from 'react';

const steps = [
    { title: "Install Wallet", desc: "Download MetaMask or Coinbase Wallet." },
    { title: "Add Base", desc: "Add Base Network to your wallet manually or via Chainlist." },
    { title: "Bridge ETH", desc: "Bridge ETH from Ethereum Mainnet to Base via official bridge." },
    { title: "Swap", desc: "Go to Uniswap (Base), paste contract address and swap ETH for GRAFFIT." }
];

const HowToBuy: React.FC = () => {
    return (
        <section id="how-to-buy" className="py-24 bg-base relative text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/criss-xcross.png')] opacity-10"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    <div className="md:w-1/3">
                        <h2 className="text-6xl md:text-7xl font-graffiti leading-tight">
                            HOW TO <br/>
                            <span className="text-black bg-white px-2">COP IT</span>
                        </h2>
                        <p className="mt-6 text-xl font-sans opacity-90">
                            Join the movement on Base in 4 simple steps. No friction. Low fees.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-black/20 p-6 backdrop-blur-sm border border-white/20 hover:bg-black/40 transition-colors">
                                <div className="text-4xl font-graffiti opacity-50 mb-2">0{idx + 1}</div>
                                <h3 className="text-2xl font-bold mb-2 font-sans">{step.title}</h3>
                                <p className="opacity-80 font-sans">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowToBuy;