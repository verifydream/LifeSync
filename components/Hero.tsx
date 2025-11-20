import React from 'react';
import PhoneMockup from './ui/PhoneMockup';
import { LogoApple, LogoGoogle } from './ui/Icons';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full min-h-screen flex flex-col justify-center">
      {/* 
        Background Elements are handled globally in index.html for "Frosted Glass" theme.
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 relative mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel shadow-sm mb-8 animate-fade-in-up transition-all">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 tracking-wide uppercase">v2.0 Live Demo</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tight mb-8 leading-[1.1] transition-colors animate-fade-in-up [animation-delay:100ms]">
          Organize Your Life,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Effortlessly.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors px-4 animate-fade-in-up [animation-delay:200ms]">
          The all-in-one workspace that brings your finances, habits, and plans into perfect harmony.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto px-4 animate-fade-in-up [animation-delay:300ms]">
          <button 
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 active:scale-95"
          >
            <LogoApple className="w-5 h-5" />
            <span>Get Started Free</span>
          </button>
          <button 
            onClick={scrollToFeatures}
            className="w-full sm:w-auto px-8 py-4 glass-panel text-zinc-900 dark:text-white rounded-full font-semibold text-sm transition-all hover:bg-white/50 dark:hover:bg-white/10 flex items-center justify-center gap-2 active:scale-95"
          >
             <LogoGoogle className="w-5 h-5" />
             <span>View Features</span>
          </button>
        </div>
      </div>

      {/* Interactive Mockups Area */}
      <div className="relative w-full max-w-7xl mx-auto px-4 perspective-1000 min-h-[600px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-24 pb-20">
          
          {/* Left Phone - Pixel */}
          {/* REMOVED pointer-events-none to enable interaction on the left phone */}
          <div className="relative w-[280px] lg:w-[300px] animate-float-delayed z-10 hidden lg:block select-none">
              {/* Tooltip hint for Left Phone */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap glass-panel px-3 py-1 rounded-full shadow-lg text-[10px] font-bold text-indigo-600 dark:text-indigo-400 animate-pulse z-30 opacity-80">
                  Track Expenses 👈
              </div>
              <div className="transform rotate-y-12 transition-transform duration-700 hover:rotate-0 hover:scale-105 hover:z-20">
                  <PhoneMockup 
                      type="pixel" 
                      className="shadow-2xl shadow-indigo-500/20 origin-top-right ring-1 ring-black/5 dark:ring-white/10" 
                  />
              </div>
          </div>
          
          {/* Right Phone - iPhone */}
          <div className="relative w-[280px] sm:w-[320px] animate-float z-20">
              <div className="transform lg:rotate-y-n12 lg:hover:rotate-0 transition-transform duration-700 hover:scale-105">
                   {/* Tooltip hint */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap glass-panel px-4 py-2 rounded-full shadow-lg text-xs font-bold text-blue-600 dark:text-blue-400 animate-bounce z-30">
                      👇 Tap to interact!
                  </div>
                  
                  <PhoneMockup 
                      type="iphone" 
                      className="shadow-2xl shadow-blue-500/20 origin-top-left ring-1 ring-black/5 dark:ring-white/10" 
                  />
              </div>
          </div>
      </div>
        
    </section>
  );
};

export default Hero;