import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StakeholderContent {
  id: 'students' | 'clubs' | 'university' | 'companies';
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  benefit: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  timeline: string;
  items: string[];
}