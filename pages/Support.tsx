import React from 'react';
import { MessageCircle, Book, LifeBuoy } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-24 pb-32 px-4 sm:px-8">
        <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">How can we help?</h1>
                <div className="glass-panel p-2 rounded-2xl max-w-xl mx-auto flex items-center">
                    <input className="flex-1 bg-transparent border-none py-3 px-4 text-slate-800 dark:text-white focus:outline-none" placeholder="Search knowledge base..." />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium">Search</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-8 rounded-3xl text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mb-6">
                        <Book className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Documentation</h3>
                    <p className="text-slate-500">Browse detailed guides and API references.</p>
                </div>

                <div className="glass-panel p-8 rounded-3xl text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 mb-6">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Community Forum</h3>
                    <p className="text-slate-500">Connect with other developers and share solutions.</p>
                </div>

                <div className="glass-panel p-8 rounded-3xl text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                        <LifeBuoy className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Contact Support</h3>
                    <p className="text-slate-500">Get in touch with our dedicated support team.</p>
                </div>
            </div>
        </div>
    </div>
  );
};