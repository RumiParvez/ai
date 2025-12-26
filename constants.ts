import { 
  Bot, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Zap, 
  MessageSquare, 
  Layers,
  BarChart3,
  Shield,
  CreditCard,
  User,
  Bell,
  Palette,
  Globe2,
  Wrench
} from 'lucide-react';
import { EcosystemItem, SettingsTab } from './types';

export const ORBIT_ITEMS_INNER: EcosystemItem[] = [
  { id: '1', name: 'AI Core', type: 'AI', icon: Bot, color: 'text-purple-500' },
  { id: '2', name: 'DevTools', type: 'Dev', icon: Code2, color: 'text-blue-500' },
  { id: '3', name: 'Database', type: 'Data', icon: Database, color: 'text-green-500' },
];

export const ORBIT_ITEMS_MIDDLE: EcosystemItem[] = [
  { id: '4', name: 'Compute', type: 'Service', icon: Cpu, color: 'text-orange-500' },
  { id: '5', name: 'Network', type: 'Service', icon: Globe, color: 'text-cyan-500' },
  { id: '6', name: 'Functions', type: 'Dev', icon: Zap, color: 'text-yellow-500' },
  { id: '7', name: 'Chat', type: 'AI', icon: MessageSquare, color: 'text-pink-500' },
  { id: '8', name: 'Stack', type: 'Tool', icon: Layers, color: 'text-indigo-500' },
];

export const ORBIT_ITEMS_OUTER: EcosystemItem[] = [
  { id: '9', name: 'Analytics', type: 'Data', icon: BarChart3, color: 'text-emerald-500' },
  { id: '10', name: 'Security', type: 'Tool', icon: Shield, color: 'text-red-500' },
  { id: '11', name: 'Billing', type: 'Service', icon: CreditCard, color: 'text-gray-500' },
];

export const SETTINGS_TABS: SettingsTab[] = [
  { id: 'profile', label: 'Account & Profile', icon: User },
  { id: 'security', label: 'Security & Privacy', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Theme & Appearance', icon: Palette },
  { id: 'language', label: 'Language & Region', icon: Globe2 },
  { id: 'preferences', label: 'Tool Preferences', icon: Wrench },
  { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
];
