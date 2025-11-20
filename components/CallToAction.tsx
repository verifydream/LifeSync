import React, { useState } from 'react';
import { SolarBolt } from './ui/Icons';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 border-t border-gray-100 dark:border-white/10 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-black dark:bg-white/5 backdrop-blur-xl text-white py-16 px-8 md:px-16 text-center shadow-2xl border border-gray-800 dark:border-white/10">
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl mb-8 border border-white/10">
              <SolarBolt className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to sync your life?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join 10,000+ users organizing their entire life in one place. Sign up for early access to version 2.0.
            </p>

            {status === 'success' ? (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 py-4 px-6 rounded-full inline-flex items-center gap-2 animate-fade-in-up">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You're on the list! We'll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            )}
            
            <p className="mt-6 text-xs text-gray-500">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;