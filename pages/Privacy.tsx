import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-24 pb-32 px-4 sm:px-8">
        <div className="w-full max-w-4xl mx-auto glass-panel p-10 rounded-3xl">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-500" /> Privacy Policy
            </h1>
            
            <div className="space-y-8 text-slate-600 dark:text-slate-300">
                <section>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-indigo-500" /> Data Protection
                    </h2>
                    <p className="leading-relaxed">
                        Your privacy is our priority. We employ end-to-end encryption for all sensitive data stored within the Openy Hool ecosystem. 
                        We do not sell your personal data to third parties. All operational data is used strictly to improve platform performance.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-500" /> Usage Information
                    </h2>
                    <p className="leading-relaxed">
                        We collect minimal usage telemetry to understand how our tools are being used. This includes feature interaction counts and performance metrics.
                        You can opt-out of telemetry at any time in the Settings panel.
                    </p>
                </section>

                <div className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-sm">
                    Last updated: October 26, 2024. For specific inquiries, contact privacy@openyhool.com.
                </div>
            </div>
        </div>
    </div>
  );
};