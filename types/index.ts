export interface PlatformNode {
  id: string;
  name: string;
  logo: string;
  category: 'ad-servers' | 'demand' | 'programmatic' | 'measurement';
}

export interface NavTab {
  label: string;
  href: string;
}

export interface SystemBehavior {
  title: string;
  description: string;
  detail: string;
}

export interface ExpandableTile {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}
