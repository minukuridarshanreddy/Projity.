import { Code2, Smartphone, BrainCircuit, BarChart3, Bot, Link as LinkIcon } from 'lucide-react';
import { DomainItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Work', href: '#domains' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#story' },
  { name: 'Contact', href: '#contact' },
];

// High-quality, aesthetic tech images sourced for dark mode vibes
export const DOMAINS: DomainItem[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Full-stack apps & dashboards crafted for scale.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'app',
    title: 'App Development',
    description: 'Native & Cross-platform solutions.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Real datasets & Model training logic.',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'ETL pipelines & Visualization.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Workflow optimization & Scripts.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Smart contracts & DApps.',
    icon: LinkIcon,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
  },
];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop";