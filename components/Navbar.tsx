import React, { useState, useEffect } from 'react';
import { SolarBolt, SolarSun, SolarMoon } from './ui/Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToTop();
      }
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-[#020617]/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
            className="flex items-center gap-2 cursor-pointer outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
            onClick={scrollToTop}
            onKeyDown={handleLogoKeyDown}
            role="button"
            tabIndex={0}
            aria-label="LifeSync Home"
        >
          <div className="w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center shadow-lg transition-colors">
            <SolarBolt className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors">LifeSync</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Features</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Stories</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
            <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isDark ? "Current mode: Dark. Switch to Light Mode" : "Current mode: Light. Switch to Dark Mode"}
            >
                {isDark ? <SolarMoon className="w-5 h-5" /> : <SolarSun className="w-5 h-5" />}
            </button>
            <a href="#" className="hidden md:block text-sm font-medium text-zinc-900 dark:text-white transition-colors">Log in</a>
            <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black">
                Get Started
            </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
    </nav>
  );
};

export default Navbar;