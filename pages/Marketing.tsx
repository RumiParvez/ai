import React from 'react';
import { Megaphone, TrendingUp, Users, Target, BarChart2, Mail } from 'lucide-react';

export const Marketing: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-24 pb-32 px-4 sm:px-8">
      
      <div className="w-full max-w-6xl mx-auto z-10">
        <div className="mb-8 animate-float">
          <h1 className="text-4xl font-display font-bold text-slate-800 dark:text-white mb-2">Growth & Marketing</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage campaigns, track analytics, and grow your audience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Stats Card 1 */}
          <div className="glass-panel p-6 rounded-3xl dark:bg-indigo-900/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-green-500 font-medium bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded text-sm">+12.5%</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">24.5k</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Total Impressions</p>
          </div>

          {/* Stats Card 2 */}
          <div className="glass-panel p-6 rounded-3xl dark:bg-pink-900/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-green-500 font-medium bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded text-sm">+4.2%</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">8,102</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Active Users</p>
          </div>

          {/* Stats Card 3 */}
          <div className="glass-panel p-6 rounded-3xl dark:bg-cyan-900/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-slate-400 font-medium text-sm">Goal: 5%</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">3.8%</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Conversion Rate</p>
          </div>

          {/* Main Campaign Area */}
          <div className="col-span-1 md:col-span-2 glass-panel p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-indigo-500" />
              Active Campaigns
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Summer Newsletter</h4>
                    <p className="text-sm text-slate-500">Email • Sent 2 hours ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-sm font-medium">Active</span>
              </div>

               <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Q3 Product Launch</h4>
                    <p className="text-sm text-slate-500">Social • Scheduled for tomorrow</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-lg text-sm font-medium">Pending</span>
              </div>
            </div>
            
            <button className="mt-6 w-full py-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 hover:text-indigo-500 hover:border-indigo-500 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" /> Create New Campaign
            </button>
          </div>

          {/* Sidebar Tools */}
          <div className="glass-panel p-6 rounded-3xl">
             <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Quick Tools</h2>
             <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                   <span className="text-slate-600 dark:text-slate-300">SEO Analyzer</span>
                   <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                   <span className="text-slate-600 dark:text-slate-300">Keyword Research</span>
                   <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                   <span className="text-slate-600 dark:text-slate-300">Competitor Audit</span>
                   <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                </button>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Helper for the chevron
import { Plus, ChevronRight } from 'lucide-react';