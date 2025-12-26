import React from 'react';
import { Sparkles, Code, Database, Box, ArrowRight } from 'lucide-react';

export const Create: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-24 pb-32 px-4 sm:px-8">
      
      <div className="w-full max-w-4xl mx-auto z-10">
        <div className="mb-10 animate-float">
          <h1 className="text-4xl font-display font-bold text-slate-800 dark:text-white mb-2">Create New</h1>
          <p className="text-slate-500 dark:text-slate-400">What would you like to build today?</p>
        </div>

        {/* Option Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
            <button className="glass-panel p-6 rounded-3xl text-left group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">AI Project</h3>
                <p className="text-slate-500 text-sm mb-4">Deploy a new model or AI-powered application.</p>
                <div className="flex items-center text-indigo-500 text-sm font-medium">
                    Start Building <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>

             <button className="glass-panel p-6 rounded-3xl text-left group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-blue-500/30">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Web Application</h3>
                <p className="text-slate-500 text-sm mb-4">Full-stack app with Next.js, Node, or Python.</p>
                <div className="flex items-center text-blue-500 text-sm font-medium">
                    Start Building <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>
            
             <button className="glass-panel p-6 rounded-3xl text-left group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-green-500/30">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Database</h3>
                <p className="text-slate-500 text-sm mb-4">Provision a new SQL, NoSQL or Vector database.</p>
                <div className="flex items-center text-green-500 text-sm font-medium">
                    Provision <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>

             <button className="glass-panel p-6 rounded-3xl text-left group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-orange-500/30">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Box className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Microservice</h3>
                <p className="text-slate-500 text-sm mb-4">Deploy a single function or containerized service.</p>
                <div className="flex items-center text-orange-500 text-sm font-medium">
                    Deploy <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>

        </div>

        {/* Quick Input */}
        <div className="glass-panel p-1 rounded-2xl flex items-center shadow-2xl">
            <input type="text" placeholder="Or just type what you need (e.g. 'New React app with auth')..." className="flex-1 bg-transparent border-none py-4 px-6 text-slate-800 dark:text-white focus:outline-none placeholder-slate-400" />
            <button className="mr-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors">
                Generate
            </button>
        </div>

      </div>
    </div>
  );
};