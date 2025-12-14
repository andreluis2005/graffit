import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/80 border-b border-concrete/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <div className="w-8 h-8 bg-base rounded-full flex items-center justify-center border-2 border-white shadow-[0_0_10px_rgba(0,82,255,0.8)]">
                <div className="w-4 h-4 bg-white rounded-full"></div>
             </div>
             <span className="font-graffiti text-3xl text-white tracking-widest -rotate-2">
               GRAFF<span className="text-base">IT</span>
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-lg text-gray-300 hover:text-base transition-colors duration-300 uppercase font-bold tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-white text-dark hover:bg-base hover:text-white px-6 py-2 rounded-none transform skew-x-[-10deg] font-bold font-sans uppercase transition-all duration-300 border-2 border-transparent hover:border-white shadow-[4px_4px_0px_0px_#39FF14]">
                <span className="transform skew-x-[10deg] inline-flex items-center gap-2">
                  <Wallet size={18} /> Connect
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-base p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-b border-base/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-base block px-3 py-2 rounded-md text-xl font-graffiti text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex justify-center pt-4 pb-2">
               <button className="w-full bg-base text-white px-6 py-3 font-bold font-sans uppercase">
                 Connect Wallet
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;