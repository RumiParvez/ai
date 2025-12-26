import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
  action?: () => void;
}

export interface EcosystemItem {
  id: string;
  name: string;
  type: 'AI' | 'Tool' | 'Service' | 'Data' | 'Dev';
  icon: LucideIcon;
  color: string;
}

export interface SettingsTab {
  id: string;
  label: string;
  icon: LucideIcon;
}

export type Theme = 'light' | 'dark';