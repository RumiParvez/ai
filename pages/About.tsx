import React from 'react';
import { BlackHoleCore } from '../components/BlackHoleCore';

export const About: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 opacity-20 pointer-events-none transform scale-150">
        <BlackHoleCore />
      </div>
      <div className="relative z-10 max-w-2xl text-center glass-panel p-12 rounded-3xl">
          <h1 className="text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">About Openy Hool</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Openy Hool is an intelligent software ecosystem designed to unify your development tools, AI services, and cloud infrastructure into a single, gravity-inspired interface.
              We believe in the power of centralized intelligence to simplify complexity.
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-500">10k+</h3>
                <p className="text-sm text-slate-500">Developers</p>
             </div>
             <div className="w-px h-10 bg-slate-300 dark:bg-slate-700"></div>
             <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-500">500+</h3>
                <p className="text-sm text-slate-500">Tools</p>
             </div>
             <div className="w-px h-10 bg-slate-300 dark:bg-slate-700"></div>
             <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">99.9%</h3>
                <p className="text-sm text-slate-500">Uptime</p>
             </div>
          </div>
      </div>
    </div>
  );
};