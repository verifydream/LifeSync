import React from 'react';

export const SolarGraphUp = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SolarWallet = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M18 12H22M14 8H18M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SolarCalendar = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="16" rx="4" fill="currentColor" fillOpacity="0.2"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="6" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SolarCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2"/>
     <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SolarBolt = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L5 13H12L10 22L19 11H12L14 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const SolarUser = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="12" cy="6" r="4" fill="currentColor" fillOpacity="0.2"/>
     <ellipse cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
     <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SolarBrain = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    <path d="M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SolarSmileCircle = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
        <path d="M9 15C9 15 10 16.5 12 16.5C14 16.5 15 15 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10C9 10 8.5 9.5 8.5 9C8.5 8.5 9 8 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 10C15 10 15.5 9.5 15.5 9C15.5 8.5 15 8 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const SolarSun = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.929 4.929L6.343 6.343" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.657 17.657L19.071 19.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.929 19.071L6.343 17.657" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.657 6.343L19.071 4.929" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SolarMoon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

export const LogoApple = ({ className = "w-6 h-6" }: { className?: string }) => (
   <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.3332 13.1326C17.3417 11.4433 18.7394 10.451 18.8052 10.4127C17.7681 8.8957 16.1505 8.66365 15.6054 8.6431C14.2725 8.50372 12.9835 9.42723 12.2926 9.42723C11.6017 9.42723 10.5151 8.66608 9.40945 8.68842C7.97805 8.70926 6.66131 9.52685 5.93052 10.7984C4.41522 13.4261 5.55284 17.337 7.0416 19.4915C7.76984 20.5445 8.63522 21.7085 9.78644 21.668C10.9012 21.6263 11.3293 20.944 12.6984 20.944C14.0479 20.944 14.439 21.668 15.5969 21.6482C16.7938 21.6263 17.5428 20.5647 18.2578 19.5124C18.7546 18.7894 18.9615 18.4231 19.1801 17.9856C19.1406 17.968 17.3094 17.283 17.3332 13.1326Z"/><path d="M14.9663 6.66793C15.5713 5.93376 15.9784 4.91178 15.8672 3.89331C14.9886 3.92865 13.9255 4.47909 13.2946 5.21388C12.7276 5.87028 12.2257 6.91209 12.3527 7.91628C13.3305 7.99337 14.3613 7.4021 14.9663 6.66793Z"/></svg>
);

export const LogoTech = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
);

export const LogoGoogle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.24 10.285V14.4H16.317C15.862 16.5 14.285 17.787 12.24 17.787C9.125 17.787 6.552 15.214 6.552 12C6.552 8.785 9.125 6.212 12.24 6.212C13.972 6.212 15.252 6.93 15.867 7.517L18.867 4.517C17.057 2.832 14.807 2 12.24 2C6.715 2 2.24 6.475 2.24 12C2.24 17.525 6.715 22 12.24 22C17.765 22 22.24 17.525 22.24 12C22.24 11.362 22.185 10.802 22.057 10.285H12.24Z"/>
  </svg>
);