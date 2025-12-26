import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Plus, 
  Megaphone, 
  LayoutGrid, 
  Tag, 
  Moon, 
  Sun,
  UserCircle,
  Settings,
  Shield,
  LucideIcon
} from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface DockItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  primary?: boolean;
}

const DockItem: React.FC<DockItemProps> = ({ icon: Icon, label, isActive, onClick, primary }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300
        ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 scale-110 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
        ${primary ? 'bg-indigo-600 !text-white hover:bg-indigo-500 hover:!text-white shadow-lg shadow-indigo-500/30 rounded-lg' : ''}
      `}
      aria-label={label}
    >
      <Icon className={`w-5 h-5 ${primary ? 'stroke-[2.5px]' : 'stroke-2'}`} />
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-slate-900 dark:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
        {label}
      </span>
    </button>
  );
};

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSettings = location.pathname === '/settings';
  const isHome = location.pathname === '/';
  const isMarketing = location.pathname === '/marketing';
  const isSubscriptions = location.pathname === '/subscriptions';
  const isCreate = location.pathname === '/create';

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      
      {/* Utility Links */}
      <div className="flex items-center space-x-6 mb-4 text-xs font-medium text-slate-400 pointer-events-auto transition-opacity duration-300 hover:text-slate-600 dark:hover:text-slate-300">
        <button onClick={() => navigate('/about')} className="hover:underline hover:text-indigo-500 transition-colors">About</button>
        <button onClick={() => navigate('/privacy')} className="hover:underline hover:text-indigo-500 transition-colors">Privacy</button>
        <button onClick={() => navigate('/support')} className="hover:underline hover:text-indigo-500 transition-colors">Support</button>
        <button 
          onClick={() => navigate('/settings')}
          className={`flex items-center space-x-1 hover:text-indigo-500 transition-colors ${isSettings ? 'text-indigo-500' : ''}`}
        >
          <Settings className="w-3 h-3" />
          <span>Settings</span>
        </button>
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        {/* Security / Shield Button - Standalone */}
        <button 
          onClick={() => navigate('/settings?tab=security')}
          className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 shadow-lg dark:shadow-black/20 group"
        >
          <Shield className="w-5 h-5 stroke-2" />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-slate-900 dark:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
            Security
          </span>
        </button>

        {/* Main Dock */}
        <div className="flex items-center px-2 py-2 gap-1 glass rounded-2xl shadow-xl dark:shadow-slate-900/50">
          <DockItem 
            icon={Plus} 
            label="Create New" 
            isActive={isCreate}
            onClick={() => navigate('/create')} 
            primary
          />
          
          <DockItem 
            icon={Megaphone} 
            label="Marketing" 
            isActive={isMarketing}
            onClick={() => navigate('/marketing')} 
          />
          <DockItem 
            icon={LayoutGrid} 
            label="Dashboard" 
            isActive={isHome}
            onClick={() => navigate('/')} 
          />
          <DockItem 
            icon={Tag} 
            label="Subscriptions" 
            isActive={isSubscriptions}
            onClick={() => navigate('/subscriptions')} 
          />
          
          <DockItem 
            icon={isDarkMode ? Sun : Moon} 
            label={isDarkMode ? "Light Mode" : "Dark Mode"} 
            onClick={toggleTheme} 
          />
          <DockItem 
            icon={UserCircle} 
            label="Profile" 
            isActive={isSettings && location.search.includes('profile')} 
            onClick={() => navigate('/settings?tab=profile')} 
          />
        </div>
      </div>
    </div>
  );
};