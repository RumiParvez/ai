import React from 'react';

export const BlackHoleCore: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center pointer-events-none select-none z-0">
      {/* The Singularity (Core) */}
      <div className="absolute w-32 h-32 bg-black rounded-full z-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] dark:shadow-[0_0_100px_rgba(255,255,255,0.15)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-slate-900 to-slate-800 opacity-90"></div>
        {/* Accretion Disk Inner Glow */}
        <div className="absolute inset-0 rounded-full border border-slate-700/30 opacity-50 blur-sm"></div>
      </div>

      {/* Event Horizon Glow */}
      <div className="absolute w-36 h-36 rounded-full bg-indigo-500/10 dark:bg-indigo-400/5 blur-xl animate-pulse-glow"></div>
      
      {/* Inner Gravity Distortion Ring */}
      <div className="absolute w-64 h-64 border border-slate-200/50 dark:border-slate-700/30 rounded-full opacity-30 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
      
      {/* Outer Gravity Distortion Ring */}
      <div className="absolute w-96 h-96 border border-slate-200/30 dark:border-slate-800/30 rounded-full opacity-20 border-dashed animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }}></div>

      {/* Particles/Noise (Simulated) */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-transparent via-indigo-500/5 to-transparent opacity-20 blur-2xl"></div>
    </div>
  );
};