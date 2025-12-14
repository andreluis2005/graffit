import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-base selection:text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;