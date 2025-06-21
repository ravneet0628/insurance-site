import type {
  SEOContent,
  HeroContent,
  FeatureSection,
  OverviewSection,
  DetailSection,
  CTASection
} from './common';

export interface ServiceContent {
  meta: SEOContent;
  hero: HeroContent;
  overview: OverviewSection;
  features: FeatureSection;
  details: DetailSection;
  cta: CTASection;
}

export interface ServiceCardContent {
  title: string;
  description: string;
  icon: string;
  link: string;
  featured?: boolean;
} 