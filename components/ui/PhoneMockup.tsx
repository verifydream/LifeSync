import React, { useState, useEffect } from 'react';
import { SolarWallet, SolarGraphUp, SolarCalendar, SolarUser } from './Icons';

interface PhoneMockupProps {
  type: 'iphone' | 'pixel';
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ type, className = '' }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'wallet' | 'habits'>('home');
  // New state for Pixel interaction
  const [pixelView, setPixelView] = useState<'list' | 'detail'>('list');
  const [selectedExpense, setSelectedExpense] = useState<number | null>(null);

  const handleTabChange = (tab: 'home' | 'wallet' | 'habits') => {
    setActiveTab(tab);
  };

  // --- IPHONE SCREENS ---
  const HomeScreen = () => (
    <div className="p-5 pt-12 space-y-4 animate-fade-in">
       <div className="flex justify-between items-center">
          <div>
             <h3 className="text-zinc-500 dark:text-zinc-400 text-xs font-medium uppercase tracking-wider">Good Morning</h3>
             <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Alex</h1>
          </div>
          <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
             <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-full h-full object-cover" />
          </div>
       </div>

       {/* Stats Card */}
       <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="text-blue-200 text-xs mb-1">Daily Focus</div>
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
               <div className="h-full bg-white w-[85%] rounded-full"></div>
            </div>
          </div>
       </div>

       <div className="grid grid-cols-2 gap-3">
          <div className="bg-orange-50 dark:bg-zinc-800 p-3 rounded-2xl border border-orange-100 dark:border-zinc-700">
             <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-full flex items-center justify-center mb-2">🔥</div>
             <div className="text-lg font-bold text-zinc-900 dark:text-white">12</div>
             <div className="text-[10px] text-zinc-500">Day Streak</div>
          </div>
           <div className="bg-purple-50 dark:bg-zinc-800 p-3 rounded-2xl border border-purple-100 dark:border-zinc-700">
             <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 text-purple-500 rounded-full flex items-center justify-center mb-2">📅</div>
             <div className="text-lg font-bold text-zinc-900 dark:text-white">5</div>
             <div className="text-[10px] text-zinc-500">Events</div>
          </div>
       </div>
       
       <div className="space-y-2">
          <div className="text-xs font-semibold text-zinc-400 uppercase ml-1">Next Up</div>
          <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-700 flex items-center gap-3 shadow-sm">
             <div className="w-1 h-8 bg-green-500 rounded-full"></div>
             <div>
                <div className="text-sm font-bold text-zinc-900 dark:text-white">Deep Work</div>
                <div className="text-xs text-zinc-500">10:00 AM - 12:00 PM</div>
             </div>
          </div>
       </div>
    </div>
  );

  const WalletScreen = () => (
    <div className="p-5 pt-12 space-y-6 animate-fade-in">
       <div className="text-center">
          <div className="text-zinc-500 text-xs">Total Balance</div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-white">$12,450.00</div>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] px-2 py-0.5 rounded-full mt-2">+2.4%</div>
       </div>

       <div className="h-32 flex items-end gap-1 px-2">
           {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
               <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-md ${i===6 ? 'bg-blue-500' : 'bg-zinc-200 dark:bg-zinc-700'}`}></div>
           ))}
       </div>

       <div className="space-y-3">
          <div className="flex justify-between items-center p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black text-xs font-bold">N</div>
                <div>
                   <div className="text-sm font-bold text-zinc-900 dark:text-white">Netflix</div>
                   <div className="text-xs text-zinc-500">Subscription</div>
                </div>
             </div>
             <div className="text-sm font-bold text-zinc-900 dark:text-white">-$15.99</div>
          </div>
          <div className="flex justify-between items-center p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center text-lg">🥬</div>
                <div>
                   <div className="text-sm font-bold text-zinc-900 dark:text-white">Grocery</div>
                   <div className="text-xs text-zinc-500">Food</div>
                </div>
             </div>
             <div className="text-sm font-bold text-zinc-900 dark:text-white">-$84.20</div>
          </div>
       </div>
    </div>
  );

  const HabitScreen = () => (
     <div className="p-5 pt-12 space-y-4 animate-fade-in">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Habits</h2>
        <div className="space-y-3">
           {['Morning Run', 'Read 30 mins', 'Drink Water', 'Meditation'].map((habit, i) => (
              <div key={i} className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-700 flex justify-between items-center shadow-sm group cursor-pointer hover:border-blue-500/50 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i < 2 ? 'bg-blue-500 border-blue-500' : 'border-zinc-300 dark:border-zinc-600'}`}>
                        {i < 2 && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17L4 12" /></svg>}
                    </div>
                    <span className={`text-sm font-medium ${i < 2 ? 'text-zinc-400 line-through' : 'text-zinc-900 dark:text-white'}`}>{habit}</span>
                 </div>
              </div>
           ))}
        </div>
     </div>
  );

  // --- PIXEL SCREEN ---

  const pixelItems = [
      { id: 1, name: 'Shopping', amount: 240, color: 'bg-indigo-500' },
      { id: 2, name: 'Food', amount: 120, color: 'bg-indigo-400' },
      { id: 3, name: 'Transport', amount: 60, color: 'bg-indigo-300' },
  ];

  const handlePixelClick = (id: number) => {
      setSelectedExpense(id);
      setPixelView('detail');
  }

  if (type === 'iphone') {
    return (
      <div className={`relative mx-auto border-zinc-900 dark:border-black bg-zinc-900 dark:bg-black border-[14px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl ${className}`}>
        {/* Hardware Buttons */}
        <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        
        {/* Screen */}
        <div className="rounded-[2.2rem] overflow-hidden h-full w-full bg-zinc-50 dark:bg-zinc-900 relative flex flex-col transition-colors duration-500">
            
            {/* Dynamic Island / Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 flex justify-center z-30 pointer-events-none">
                <div className="w-[120px] h-[28px] bg-black rounded-b-3xl"></div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-zinc-50 dark:bg-zinc-900">
               {activeTab === 'home' && <HomeScreen />}
               {activeTab === 'wallet' && <WalletScreen />}
               {activeTab === 'habits' && <HabitScreen />}
            </div>

            {/* Bottom Tab Bar (Interactive) */}
            <div className="h-16 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 flex justify-around items-center px-2 z-20 pb-2">
               <button onClick={() => handleTabChange('home')} className={`p-2 rounded-xl transition-all ${activeTab === 'home' ? 'text-blue-600 dark:text-blue-400 scale-110' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`}>
                  <SolarCalendar className="w-6 h-6" />
               </button>
               <button onClick={() => handleTabChange('wallet')} className={`p-2 rounded-xl transition-all ${activeTab === 'wallet' ? 'text-blue-600 dark:text-blue-400 scale-110' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`}>
                  <SolarWallet className="w-6 h-6" />
               </button>
               <button onClick={() => handleTabChange('habits')} className={`p-2 rounded-xl transition-all ${activeTab === 'habits' ? 'text-blue-600 dark:text-blue-400 scale-110' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`}>
                  <SolarGraphUp className="w-6 h-6" />
               </button>
               <button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                  <SolarUser className="w-6 h-6" />
               </button>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full z-30"></div>
        </div>
      </div>
    );
  }

  // Pixel Style (Left Phone)
  return (
    <div className={`relative mx-auto border-zinc-900 dark:border-black bg-zinc-900 dark:bg-black border-[12px] rounded-[2rem] h-[580px] w-[290px] shadow-2xl ${className}`}>
      <div className="h-[32px] w-[3px] bg-zinc-800 absolute -right-[15px] top-[72px] rounded-r-lg"></div>
      <div className="h-[46px] w-[3px] bg-zinc-800 absolute -right-[15px] top-[124px] rounded-r-lg"></div>
      
      <div className="rounded-[1.5rem] overflow-hidden h-full w-full bg-white dark:bg-zinc-900 relative flex flex-col transition-colors duration-500">
        {/* Camera Hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-30 pointer-events-none"></div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-white dark:bg-zinc-900">
             <div className="p-5 pt-14 space-y-6">
                {pixelView === 'list' ? (
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Expenses</h2>
                        <p className="text-zinc-500 text-xs mb-4">Tap a category to view details</p>
                        
                        <div className="h-48 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-end p-4 gap-2 border border-zinc-200 dark:border-zinc-700 mb-6">
                            {[30, 50, 40, 70, 50, 80].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-indigo-500' : 'bg-indigo-200 dark:bg-indigo-900/50'}`}></div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            {pixelItems.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => handlePixelClick(item.id)}
                                    className="flex items-center gap-4 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors border-b border-zinc-100 dark:border-zinc-800/50"
                                >
                                    <div className={`w-10 h-10 ${item.color} opacity-80 rounded-full flex items-center justify-center text-white font-bold`}>{item.name[0]}</div>
                                    <div className="flex-1">
                                        <div className="font-medium text-zinc-900 dark:text-white">{item.name}</div>
                                        <div className="text-xs text-zinc-500">Today</div>
                                    </div>
                                    <div className="font-bold text-zinc-900 dark:text-white">-${item.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <button 
                            onClick={() => setPixelView('list')}
                            className="mb-4 text-sm text-indigo-500 font-medium flex items-center gap-1"
                        >
                            ← Back
                        </button>
                        <div className="bg-indigo-50 dark:bg-zinc-800 p-6 rounded-3xl text-center mb-6">
                            <div className="text-sm text-zinc-500 mb-1 uppercase tracking-wide">Amount Spent</div>
                            <div className="text-4xl font-bold text-zinc-900 dark:text-white">
                                ${pixelItems.find(i => i.id === selectedExpense)?.amount || 0}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[75%]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>Budget Used</span>
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                )}
             </div>
        </div>

        {/* Android Nav Bar */}
        <div className="absolute bottom-2 left-0 w-full flex justify-center pb-2">
             <div className="w-1/3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;