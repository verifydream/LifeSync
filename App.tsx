import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    // Removed bg-color classes here so the global index.html background is visible
    <div className="min-h-screen transition-colors duration-500 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;