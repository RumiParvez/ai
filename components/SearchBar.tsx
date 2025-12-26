import React, { useState } from 'react';
import { Search, Bot, Command } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative z-20 w-full max-w-2xl px-6 animate-float">
      <div 
        className={`
          relative group
          transition-all duration-500 ease-out
          ${isFocused ? 'transform scale-105' : 'transform scale-100'}
        `}
      >
        {/* Glow effect behind search */}
        <div className={`
          absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-lg transition duration-1000 group-hover:opacity-40 group-hover:duration-200
          ${isFocused ? 'opacity-50' : ''}
        `}></div>

        <div className="relative flex items-center glass rounded-2xl overflow-hidden shadow-2xl">
          <div className="pl-6 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <input
            type="text"
            className="w-full bg-transparent border-none py-6 px-4 text-lg text-slate-800 dark:text-slate-100 placeholder-slate-400/70 focus:outline-none font-display font-medium tracking-wide"
            placeholder="Search any tool, service, or solution..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="pr-4 hidden sm:flex items-center space-x-3 text-slate-400">
             <button className="p-2 rounded-lg hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors">
                 <Bot className="w-5 h-5 opacity-70" />
             </button>
            <div className="flex items-center px-2 py-1.5 rounded-md bg-slate-100/50 dark:bg-slate-800/50 text-xs font-medium border border-slate-200 dark:border-slate-700/50 text-slate-500 dark:text-slate-400">
              <Command className="w-3 h-3 mr-1" /> K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};