import React, { useRef, useEffect, useState } from 'react';
import { SolarWallet, SolarGraphUp, SolarCalendar, SolarBrain, SolarSmileCircle } from './ui/Icons';

const BentoGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // --- Interactive States ---

  // Mood State
  const [selectedMood, setSelectedMood] = useState<number | null>(2);
  
  // Timer State
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  
  // Finance State
  const [chartKey, setChartKey] = useState(0);
  const [transactions, setTransactions] = useState([
      { id: 1, name: 'Coffee', amount: 4.50 },
      { id: 2, name: 'Uber', amount: 12.20 }
  ]);
  
  // Habit State
  const [habitProgress, setHabitProgress] = useState(78);

  // Planner State
  const [isPlanning, setIsPlanning] = useState(false);
  const [scheduleTasks, setScheduleTasks] = useState([
      { time: '10:00 AM', task: 'Deep Work', color: 'bg-purple-500' },
      { time: '01:00 PM', task: 'Team Sync', color: 'bg-blue-500' }
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Timer Logic
  useEffect(() => {
    let interval: number | undefined;
    if (timerActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- Handlers ---

  const toggleTimer = () => setTimerActive(!timerActive);

  const handleFinanceInteract = () => {
    // Refresh chart animation
    setChartKey(prev => prev + 1);
    // Add a random transaction
    const newTx = { 
        id: Date.now(), 
        name: ['Groceries', 'Netflix', 'Gym', 'Snack'][Math.floor(Math.random()*4)], 
        amount: parseFloat((Math.random() * 50).toFixed(2)) 
    };
    setTransactions(prev => [newTx, ...prev].slice(0, 3));
  };

  const incrementHabit = () => setHabitProgress(prev => prev >= 100 ? 0 : prev + 10);
  
  const handleMoodSelect = (idx: number) => setSelectedMood(idx);

  const regenerateSchedule = () => {
      setIsPlanning(true);
      setTimeout(() => {
          const tasks = [
              { time: '09:00 AM', task: 'Email', color: 'bg-orange-500' },
              { time: '11:00 AM', task: 'Strategy', color: 'bg-pink-500' },
              { time: '02:00 PM', task: 'Design', color: 'bg-indigo-500' },
              { time: '04:00 PM', task: 'Review', color: 'bg-green-500' }
          ];
          // Shuffle
          const shuffled = tasks.sort(() => 0.5 - Math.random()).slice(0, 2);
          setScheduleTasks(shuffled);
          setIsPlanning(false);
      }, 1000);
  }

  // --- Styles ---
  
  // Glassmorphism base class
  const gridItemClasses = "glass-panel group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl cursor-pointer";
  const animClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  
  const textMain = "text-zinc-900 dark:text-white";
  const textSub = "text-zinc-500 dark:text-zinc-300";

  const moodEmojis = ['😖', '😐', '🙂', '😁', '🤩'];
  const moodColors = ['from-red-500/20', 'from-gray-500/20', 'from-blue-500/20', 'from-yellow-500/20', 'from-pink-500/20'];

  return (
    <section id="features" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 transform ${animClasses}`}>
          <h2 className={`text-3xl md:text-5xl font-bold ${textMain} mb-6 tracking-tight`}>
            Design your perfect day.
          </h2>
          <p className={`text-lg ${textSub} max-w-2xl mx-auto font-light leading-relaxed`}>
            Interact with the cards below to see how LifeSync adapts to your workflow.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Smart Finance (Enhanced Interaction) */}
          <div onClick={handleFinanceInteract} className={`md:col-span-2 lg:col-span-2 p-6 md:p-10 ${gridItemClasses} ${animClasses}`}>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end h-full relative z-10 gap-8">
                <div className="max-w-md z-20">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                        <SolarWallet className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${textMain} mb-3`}>Smart Finance</h3>
                    <p className={`${textSub} leading-relaxed text-base md:text-lg`}>Tap card to simulate transaction. Automatically categorize expenses and track net worth.</p>
                </div>
                
                {/* Interactive Chart + Transaction List */}
                <div className="w-full md:w-1/2 h-48 md:h-64 relative select-none">
                   {/* Floating Transaction List */}
                   <div className="absolute top-0 right-4 w-52 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-3 text-zinc-800 dark:text-white transform rotate-3 group-hover:rotate-0 transition-all duration-500 z-20 border border-white/20 dark:border-white/10">
                      <div className="text-xs font-bold text-zinc-400 uppercase mb-2">Recent</div>
                      <div className="space-y-2">
                          {transactions.map((tx) => (
                              <div key={tx.id} className="flex justify-between text-sm animate-fade-in">
                                  <span>{tx.name}</span>
                                  <span className="font-mono text-red-500">-${tx.amount.toFixed(2)}</span>
                              </div>
                          ))}
                      </div>
                   </div>

                   {/* Graph Lines */}
                   <div key={chartKey} className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-1 md:gap-2 px-2 z-10">
                      {[30, 45, 35, 60, 50, 75, 65, 90, 80].map((h, i) => (
                          <div 
                            key={i} 
                            style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} 
                            className={`flex-1 rounded-t-lg transition-all duration-700 ease-out transform scale-y-0 animate-grow-up ${i === 7 ? 'bg-blue-500' : 'bg-blue-200 dark:bg-blue-500/30'} group-hover:bg-blue-500`}
                          ></div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* 2. Habit Loop */}
          <div onClick={incrementHabit} className={`md:row-span-2 lg:row-span-2 !bg-black/90 dark:!bg-black/50 dark:backdrop-blur-xl text-white p-8 shadow-2xl border border-zinc-800 dark:border-white/10 delay-100 ${gridItemClasses} ${animClasses}`}>
             <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-orange-900/40 to-transparent -z-10 pointer-events-none"></div>
             
             <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <SolarGraphUp className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Atomic Habits</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">Tap the ring to log progress.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center py-8 relative">
                    <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-500 active:scale-95 cursor-pointer">
                        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="currentColor" className="text-zinc-800 dark:text-white/10" strokeWidth="8" fill="none" />
                            <circle 
                                cx="50" cy="50" r="40" 
                                stroke="#F97316" strokeWidth="8" fill="none" 
                                strokeDasharray="251.2" 
                                strokeDashoffset={251.2 - (251.2 * habitProgress) / 100} 
                                strokeLinecap="round"
                                className="transition-all duration-[1000ms] ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
                            <span className="text-4xl font-bold">{habitProgress}%</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Completed</span>
                        </div>
                        
                        {habitProgress === 100 && (
                            <div className="absolute top-0 right-0 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                                Done! 🎉
                            </div>
                        )}
                    </div>
                </div>
             </div>
          </div>

          {/* 3. AI Planner (Interactive) */}
          <div className={`md:col-span-1 p-8 delay-150 ${gridItemClasses} ${animClasses}`}>
             <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <SolarCalendar className="w-7 h-7" />
             </div>
             
             <div className="flex justify-between items-center mb-2">
                <h3 className={`text-2xl font-bold ${textMain}`}>AI Planner</h3>
                <button 
                    onClick={regenerateSchedule}
                    disabled={isPlanning}
                    className="text-xs bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 disabled:opacity-50 transition-colors"
                >
                    {isPlanning ? '...' : 'Auto'}
                </button>
             </div>
             
             <p className={`${textSub} text-sm mb-6`}>Auto-schedule your tasks.</p>
             
             <div className="space-y-3 relative select-none min-h-[100px]">
                 {/* Loading State */}
                 {isPlanning ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                 ) : (
                     <>
                         <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-zinc-200 dark:bg-zinc-700"></div>
                         {scheduleTasks.map((item, idx) => (
                             <div key={idx} className="flex items-center gap-3 relative z-10 animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                                 <div className="w-6 h-6 rounded-full bg-purple-50 dark:bg-purple-900 border-2 border-white dark:border-zinc-800 flex items-center justify-center">
                                     <div className={`w-2 h-2 ${item.color.replace('bg-', 'bg-')} rounded-full`}></div>
                                 </div>
                                 <div className="flex-1 bg-white/50 dark:bg-white/5 p-2.5 rounded-xl border border-white/50 dark:border-white/5">
                                     <div className="text-sm font-semibold text-zinc-800 dark:text-white">{item.task}</div>
                                     <div className="text-xs text-zinc-500">{item.time}</div>
                                 </div>
                             </div>
                         ))}
                     </>
                 )}
             </div>
          </div>

          {/* 4. Deep Focus */}
          <div onClick={toggleTimer} className={`!bg-zinc-900 dark:!bg-black/40 dark:backdrop-blur-xl text-white p-8 shadow-lg border border-zinc-800 dark:border-white/10 delay-200 ${gridItemClasses} ${animClasses}`}>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
             
             <div className="flex justify-between items-start mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <SolarBrain className="w-7 h-7" />
                 </div>
                 <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${timerActive ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-indigo-500/20 text-indigo-300'}`}>
                     {timerActive ? 'Running' : 'Tap to Start'}
                 </div>
             </div>
             
             <h3 className="text-2xl font-bold mb-2">Deep Work</h3>
             <p className="text-zinc-400 text-sm mb-6">Eliminate distractions.</p>
             
             <div className={`bg-black/40 dark:bg-black/60 rounded-2xl p-4 border border-white/5 text-center relative overflow-hidden transition-all duration-300 ${timerActive ? 'border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : ''}`}>
                 <div className="text-3xl font-mono font-bold tracking-wider text-white">{formatTime(timeLeft)}</div>
                 <div className="text-xs text-zinc-500 mt-1">{timerActive ? 'Focusing...' : '25 min session'}</div>
                 {timerActive && <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-full animate-marquee"></div>}
             </div>
          </div>

          {/* 5. Mood Journal (Interactive Background) */}
          <div className={`md:col-span-2 lg:col-span-2 p-8 delay-300 ${gridItemClasses} ${animClasses}`}>
             {/* Dynamic Background based on Mood */}
             <div className={`absolute inset-0 bg-gradient-to-br ${selectedMood !== null ? moodColors[selectedMood] : 'from-transparent'} to-transparent opacity-30 dark:opacity-20 transition-all duration-700 -z-10`}></div>
             
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <SolarSmileCircle className="w-7 h-7" />
                    </div>
                    <h3 className={`text-2xl font-bold ${textMain} mb-3`}>Mood & Wellness</h3>
                    <p className={textSub}>How are you feeling right now? Select an emoji to log your state.</p>
                </div>
                
                <div className="flex gap-3 md:gap-4" role="radiogroup" aria-label="Select your mood">
                    {moodEmojis.map((emoji, idx) => (
                        <button
                            key={idx}
                            role="radio"
                            aria-checked={selectedMood === idx}
                            onClick={(e) => { e.stopPropagation(); handleMoodSelect(idx); }}
                            className={`
                                w-12 h-12 md:w-14 md:h-14 rounded-2xl 
                                border flex items-center justify-center text-2xl md:text-3xl 
                                cursor-pointer transition-all duration-300 select-none outline-none
                                ${selectedMood === idx 
                                    ? 'bg-white dark:bg-white/10 border-blue-400 dark:border-blue-500 scale-125 shadow-lg ring-2 ring-blue-500/20' 
                                    : 'bg-white/50 dark:bg-white/5 border-transparent hover:scale-110 hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 opacity-70 hover:opacity-100'
                                }
                            `}
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;