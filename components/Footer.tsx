import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-8">
                 <span className="font-graffiti text-2xl text-gray-600">GRAFF<span className="text-base">IT</span></span>
            </div>
            
            <p className="text-gray-500 font-sans text-sm max-w-2xl mx-auto leading-relaxed mb-8">
                $GRAFFIT is a memecoin created for art, culture and community purposes on Base. 
                The token has no intrinsic value or expectation of financial return. 
                There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
                No financial advice. Just vibes.
            </p>

            <p className="text-gray-700 font-sans text-xs">
                © {new Date().getFullYear()} GRAFFIT on Base. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;