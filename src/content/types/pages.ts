import type { SEOContent } from './common';

export interface HeroSectionContent {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  backgroundImage: string;
}

export interface HomeServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  features: string[];
}

export interface TrustBadgeContent {
  icon: string;
  title: string;
  description: string;
}

export interface AboutSectionContent {
  title: string;
  content: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
}

export interface HomePageContent {
  meta: SEOContent;
  hero: HeroSectionContent;
  services: {
    title: string;
    subtitle: string;
    cards: HomeServiceCard[];
  };
  trustBadges: {
    title: string;
    badges: TrustBadgeContent[];
  };
  about: AboutSectionContent;
}

export interface AboutPageContent {
  meta: SEOContent;
  hero: HeroSectionContent;
  mission: {
    title: string;
    content: string;
    icon: string;
  };
  vision: {
    title: string;
    content: string;
    icon: string;
  };
  timeline: {
    title: string;
    items: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      position: string;
      bio: string;
      image?: string;
    }>;
  };
} 