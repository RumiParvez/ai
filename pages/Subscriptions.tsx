import React from 'react';
import { Check, Zap, CreditCard } from 'lucide-react';

export const Subscriptions: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-24 pb-32 px-4 sm:px-8">
      
      <div className="w-full max-w-5xl mx-auto z-10">
        <div className="text-center mb-12 animate-float">
          <h1 className="text-4xl font-display font-bold text-slate-800 dark:text-white mb-4">Plans & Billing</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Choose the perfect plan for your needs. Upgrade or downgrade at any time.</p>
        </div>

        {/* Current Plan Banner */}
        <div className="glass-panel p-6 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between border-l-4 border-l-indigo-500">
           <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                 <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                 <h3 className="font-bold text-lg text-slate-800 dark:text-white">Pro Plan Active</h3>
                 <p className="text-slate-500 text-sm">Your next billing date is November 24, 2024</p>
              </div>
           </div>
           <button className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Manage Subscription
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Basic Plan */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col relative opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">Starter</h3>
            <div className="flex items-end gap-1 mb-6">
               <span className="text-4xl font-bold text-slate-800 dark:text-white">$0</span>
               <span className="text-slate-500 mb-1">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> 3 Projects</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> Community Support</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> 1GB Storage</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Downgrade</button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col relative border-2 border-indigo-500 transform scale-105 shadow-2xl z-10">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>
            <h3 className="text-lg font-medium text-indigo-500 mb-2">Pro</h3>
            <div className="flex items-end gap-1 mb-6">
               <span className="text-4xl font-bold text-slate-800 dark:text-white">$29</span>
               <span className="text-slate-500 mb-1">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-indigo-500 mt-0.5" /> Unlimited Projects</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-indigo-500 mt-0.5" /> Priority Support</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-indigo-500 mt-0.5" /> 20GB Storage</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-indigo-500 mt-0.5" /> Advanced Analytics</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30">Current Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col relative opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">Business</h3>
            <div className="flex items-end gap-1 mb-6">
               <span className="text-4xl font-bold text-slate-800 dark:text-white">$99</span>
               <span className="text-slate-500 mb-1">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> Everything in Pro</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> Dedicated Manager</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> 1TB Storage</li>
               <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-green-500 mt-0.5" /> SSO & Security</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Upgrade</button>
          </div>

        </div>

        {/* Payment Methods Preview */}
        <div className="mt-12">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Payment Method</h2>
            <div className="glass-panel p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-white">Visa ending in 4242</p>
                        <p className="text-xs text-slate-500">Expires 12/28</p>
                    </div>
                </div>
                <button className="text-sm text-indigo-500 font-medium hover:text-indigo-400">Update</button>
            </div>
        </div>
        
      </div>
    </div>
  );
};