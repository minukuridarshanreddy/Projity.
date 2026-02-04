import { LucideIcon } from 'lucide-react';

export interface DomainItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  colSpan?: string; // Tailwind class for bento grid spanning
}

export interface NavLink {
  name: string;
  href: string;
}