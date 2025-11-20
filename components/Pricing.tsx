import React from 'react';
import { SolarCheck } from './ui/Icons';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
       
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Simple, transparent pricing.</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-16">No hidden fees. Cancel anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Free */}
          <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col transition-colors">
            <div className="mb-6 text-left">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Basic</h3>
                <div className="text-4xl font-bold text-zinc-900 dark:text-white">$0<span className="text-lg font-normal text-zinc-400">/mo</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-left">
                {['Essential Habit Tracking', 'Basic Finance Overview', '7-Day History', '1 Device Sync'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                        <SolarCheck className="w-5 h-5 text-zinc-400" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <button className="w-full py-4 rounded-full border border-zinc-200 dark:border-white/20 font-semibold text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
                Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="bg-[#09090b] dark:bg-white dark:text-black text-white rounded-[2.5rem] p-8 shadow-2xl flex flex-col relative scale-105 z-20 border border-zinc-900 dark:border-transparent">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-b-xl shadow-lg">MOST POPULAR</div>
            <div className="mb-6 text-left">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold">$9<span className="text-lg font-normal text-zinc-500 dark:text-zinc-400">/mo</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-left">
                {['Unlimited Habits', 'Advanced Finance Analytics', 'Unlimited History', 'Multi-Device Sync', 'AI Planner'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 dark:text-zinc-600">
                        <SolarCheck className="w-5 h-5 text-blue-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <button className="w-full py-4 rounded-full bg-white dark:bg-black text-black dark:text-white font-bold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                Start Free Trial
            </button>
          </div>

          {/* Lifetime */}
          <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col transition-colors">
             <div className="mb-6 text-left">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Lifetime</h3>
                <div className="text-4xl font-bold text-zinc-900 dark:text-white">$199<span className="text-lg font-normal text-zinc-400">/once</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-left">
                {['One-time payment', 'All Pro features included', 'Lifetime updates', 'Priority Support', 'Early access to beta'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                        <SolarCheck className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <button className="w-full py-4 rounded-full border border-zinc-200 dark:border-white/20 font-semibold text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
                Buy Forever
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;