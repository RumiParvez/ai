import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SETTINGS_TABS } from '../constants';
import { 
  ChevronRight, SwitchCamera, ShieldCheck, Mail, Globe, 
  Bell, Palette, CreditCard, ToggleLeft, ToggleRight, CheckCircle
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam && SETTINGS_TABS.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  // Mock Toggle Component
  const Toggle = ({ active }: { active: boolean }) => (
    <div className={`cursor-pointer ${active ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-600'}`}>
      {active ? <ToggleRight className="w-10 h-10" /> : <ToggleLeft className="w-10 h-10" />}
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-20 pb-32 px-4 sm:px-8">
      
      <div className="w-full max-w-5xl h-full glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative z-10 animate-float" style={{ animationDuration: '8s' }}>
        
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-slate-50/50 dark:bg-slate-900/50 border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-800/50 p-6 overflow-y-auto no-scrollbar">
          <h2 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-6 pl-2">Settings</h2>
          <nav className="space-y-1">
            {SETTINGS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
                {activeTab === tab.id && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white/40 dark:bg-slate-900/20 p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {SETTINGS_TABS.find(t => t.id === activeTab)?.label}
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Manage your {SETTINGS_TABS.find(t => t.id === activeTab)?.label.toLowerCase()} settings and preferences.
              </p>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                    OH
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Openy User</h3>
                    <p className="text-sm text-slate-500">builder@openyhool.com</p>
                  </div>
                  <button className="ml-auto px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                    Edit
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Public Profile</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Display Name</label>
                        <input type="text" value="Openy User" readOnly className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                     </div>
                     <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bio</label>
                        <textarea readOnly className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" rows={3} value="Building the future of software ecosystems." />
                     </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10 dark:border-yellow-900/30 flex items-start space-x-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-yellow-900 dark:text-yellow-100">2FA is enabled</h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300/80 mt-1">Your account is currently protected with two-factor authentication.</p>
                  </div>
                </div>
                
                 <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Login Methods</h3>
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 transition-colors">
                     <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-slate-500" />
                        <span className="font-medium text-slate-700 dark:text-slate-200">Email Address</span>
                     </div>
                     <span className="text-sm text-slate-400">builder@openyhool.com</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 transition-colors">
                     <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-slate-500" />
                        <span className="font-medium text-slate-700 dark:text-slate-200">Active Sessions</span>
                     </div>
                     <span className="text-sm text-indigo-500">Manage</span>
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
             {activeTab === 'notifications' && (
              <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/30 dark:bg-slate-800/30">
                      <div>
                          <h3 className="font-medium text-slate-800 dark:text-white">Product Updates</h3>
                          <p className="text-sm text-slate-500">Receive weekly digests about new features.</p>
                      </div>
                      <Toggle active={true} />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/30 dark:bg-slate-800/30">
                      <div>
                          <h3 className="font-medium text-slate-800 dark:text-white">Security Alerts</h3>
                          <p className="text-sm text-slate-500">Immediate notifications for security incidents.</p>
                      </div>
                      <Toggle active={true} />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/30 dark:bg-slate-800/30">
                      <div>
                          <h3 className="font-medium text-slate-800 dark:text-white">Marketing Emails</h3>
                          <p className="text-sm text-slate-500">Promotions and partner offers.</p>
                      </div>
                      <Toggle active={false} />
                  </div>
              </div>
            )}

            {/* Appearance Tab */}
             {activeTab === 'appearance' && (
              <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer text-center hover:border-indigo-500 transition-colors">
                          <div className="w-full h-20 bg-gray-100 rounded-lg mb-3"></div>
                          <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Light</span>
                      </div>
                       <div className="p-4 rounded-xl border-2 border-indigo-500 bg-slate-900 cursor-pointer text-center relative">
                           <div className="absolute top-2 right-2 text-indigo-500"><CheckCircle className="w-4 h-4" /></div>
                          <div className="w-full h-20 bg-slate-800 rounded-lg mb-3"></div>
                          <span className="font-medium text-sm text-white">Dark</span>
                      </div>
                       <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-900 cursor-pointer text-center hover:border-indigo-500 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-r from-gray-100 to-slate-800 rounded-lg mb-3"></div>
                          <span className="font-medium text-sm text-slate-700 dark:text-slate-300">System</span>
                      </div>
                  </div>
              </div>
            )}

             {/* Billing Tab */}
             {activeTab === 'billing' && (
              <div className="space-y-6">
                 <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                     <div className="flex justify-between items-start mb-4">
                         <div>
                             <p className="text-indigo-100 text-sm font-medium">Current Plan</p>
                             <h3 className="text-2xl font-bold">Pro Plan</h3>
                         </div>
                         <span className="px-3 py-1 bg-white/20 rounded-lg text-sm font-medium">$29/mo</span>
                     </div>
                     <div className="w-full bg-indigo-900/30 rounded-full h-2 mb-2">
                         <div className="bg-white h-2 rounded-full w-3/4"></div>
                     </div>
                     <p className="text-xs text-indigo-100">75% of storage used (15GB/20GB)</p>
                 </div>
                 
                 <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                     <div className="flex items-center gap-3">
                         <CreditCard className="w-5 h-5 text-slate-500" />
                         <span className="text-slate-700 dark:text-slate-300 font-medium">Visa ending in 4242</span>
                     </div>
                     <button className="text-sm text-indigo-500 font-medium">Update</button>
                 </div>
              </div>
            )}

             {/* Fallback for others */}
             {(activeTab === 'language' || activeTab === 'preferences') && (
               <div className="flex flex-col items-center justify-center py-20 opacity-50">
                  <SwitchCamera className="w-12 h-12 mb-4 text-slate-300" />
                  <p className="text-slate-500">Preferences and Language settings coming soon.</p>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};