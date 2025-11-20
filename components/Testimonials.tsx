import React from 'react';
import { Testimonial } from '../types';

const testimonialsPart1: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", role: "Product Manager", text: "LifeSync completely changed how I manage my finances. It's so intuitive and the design is simply beautiful.", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "David Chen", role: "Founder", text: "The habit tracking is addictive in the best way possible. I've never been this consistent with my workouts.", avatar: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Elena Rodriguez", role: "Designer", text: "Finally, an app that looks as good as it functions. A visual masterpiece that makes planning a joy.", avatar: "https://i.pravatar.cc/150?img=5" },
];

const testimonialsPart2: Testimonial[] = [
  { id: 4, name: "Mark Thompson", role: "Developer", text: "I love the bento grid layout. Everything is just one tap away. The dark mode implementation is flawless.", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 5, name: "Jessica Lee", role: "PhD Student", text: "Helps me balance my studies and part-time job effortlessly. The smart scheduler is a lifesaver.", avatar: "https://i.pravatar.cc/150?img=9" },
  { id: 6, name: "Alex Morgan", role: "Nomad", text: "Best investment I made this year. It replaced 4 other apps I was paying for.", avatar: "https://i.pravatar.cc/150?img=12" },
];

const CompanyLogo = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
      <div className="w-5 h-5 bg-zinc-800 dark:bg-white rounded-full"></div>
      <span className="font-bold text-sm text-zinc-600 dark:text-zinc-300">{name}</span>
  </div>
);

const ReviewCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="w-[350px] md:w-[400px] bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 mx-3 md:mx-4 shadow-sm border border-zinc-200 dark:border-white/10 hover:shadow-md hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
            <img 
              src={t.avatar} 
              alt={t.name} 
              loading="lazy" 
              className="w-10 h-10 rounded-full object-cover border border-zinc-100 dark:border-white/10" 
            />
            <div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{t.name}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</p>
            </div>
        </div>
        <svg className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor"><path d="M23.3937 7.87812C23.7437 6.24627 22.4644 4.81008 20.8375 4.98816C20.3087 5.04557 19.7731 4.85796 19.4206 4.45603C18.3312 3.21236 16.4131 3.02798 15.1375 4.11817C14.725 4.47042 14.1631 4.57298 13.6631 4.38611C12.1119 3.80557 10.4431 4.76932 10.1931 6.40932C10.1125 6.93932 9.76187 7.38932 9.26187 7.59932C7.71062 8.24932 7.1525 10.1799 8.1125 11.5399C8.42187 11.9799 8.465 12.5593 8.22437 13.0393C7.47437 14.5293 8.34687 16.3493 9.93062 16.7793C10.4431 16.9193 10.8644 17.2893 11.0831 17.7793C11.7581 19.2993 13.6244 19.8093 14.9369 18.8393C15.3619 18.5293 15.9144 18.4593 16.3931 18.6493C17.8744 19.2393 19.5156 18.3193 19.7962 16.7593C19.8869 16.2493 20.2112 15.8193 20.6831 15.5893C22.1462 14.8793 22.7244 13.0893 21.8462 11.6693C21.5644 11.2093 21.5331 10.6393 21.7644 10.1593C22.4831 8.66932 24.8937 8.48062 23.3937 7.87812ZM10.8681 13.7593L8.27125 11.1699C7.99312 10.8899 7.99312 10.4499 8.27125 10.1699C8.54937 9.88992 8.99062 9.88992 9.26875 10.1699L11.365 12.2599L16.2306 7.40871C16.5087 7.12871 16.95 7.12871 17.2281 7.40871C17.5062 7.68871 17.5062 8.12871 17.2281 8.40871L11.8656 13.7593C11.5906 14.0293 11.1462 14.0293 10.8681 13.7593Z"/></svg>
    </div>
    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-sm">"{t.text}"</p>
    <div className="flex justify-between items-end border-t border-zinc-100 dark:border-white/5 pt-4">
        <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            ))}
        </div>
        <span className="text-xs font-semibold text-zinc-300 dark:text-zinc-500">Verified User</span>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background is transparent to let global glass background show */}
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Loved by thousands of<br/>productivity enthusiasts.</h2>
        
        <p className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <CompanyLogo name="Spotify" />
            <CompanyLogo name="Slack" />
            <CompanyLogo name="Notion" />
            <CompanyLogo name="Linear" />
            <CompanyLogo name="Figma" />
        </div>
      </div>
      
      <div className="flex flex-col gap-8 relative z-10">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">
                {[...testimonialsPart1, ...testimonialsPart2, ...testimonialsPart1].map((t, i) => (
                    <ReviewCard key={`${t.id}-r1-${i}`} t={t} />
                ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse w-max hover:[animation-play-state:paused]">
                 {[...testimonialsPart2, ...testimonialsPart1, ...testimonialsPart2].map((t, i) => (
                    <ReviewCard key={`${t.id}-r2-${i}`} t={t} />
                ))}
            </div>
          </div>
      </div>
      
    </section>
  );
};

export default Testimonials;