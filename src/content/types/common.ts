export interface SEOContent {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface FeatureSection {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export interface OverviewSection {
  title: string;
  content: string;
  highlights?: string[];
}

export interface DetailSection {
  title: string;
  content: string;
  items?: {
    title: string;
    description: string;
    benefits?: string[];
  }[];
}

export interface CTASection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}
