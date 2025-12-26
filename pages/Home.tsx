import React from 'react';
import { BlackHoleCore } from '../components/BlackHoleCore';
import { OrbitingSystem } from '../components/OrbitingIcons';
import { SearchBar } from '../components/SearchBar';

export const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* Top Context Area */}
      <div className="absolute top-8 left-0 right-0 text-center z-10 pointer-events-none">
        <h1 className="text-sm font-light tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
          Openy Hool Ecosystem
        </h1>
      </div>

      {/* Core Ecosystem Visuals */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* The Black Hole */}
        <BlackHoleCore />
        
        {/* The Orbiting Icons */}
        <OrbitingSystem />
      </div>

      {/* Interactive Layer */}
      <div className="relative z-30 w-full flex justify-center px-4">
        <SearchBar />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
         {/* Abstract Grids */}
         <div className="absolute top-0 left-0 w-full h-full" 
              style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
         </div>
      </div>
    </div>
  );
};