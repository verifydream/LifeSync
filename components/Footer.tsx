import React from 'react';
import { SolarBolt, LogoApple, LogoGoogle } from './ui/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-gray-100 dark:border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center">
                    <SolarBolt className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">LifeSync</span>
            </div>
            <div className="flex flex-wrap gap-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Support</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Instagram</a>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-white/5 gap-6">
            <p className="text-sm text-gray-400 dark:text-gray-500">© 2024 LifeSync Inc. All rights reserved.</p>
            <div className="flex gap-4">
                <span className="text-gray-300 dark:text-gray-600"><LogoApple className="w-5 h-5"/></span>
                <span className="text-gray-300 dark:text-gray-600"><LogoGoogle className="w-5 h-5"/></span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;