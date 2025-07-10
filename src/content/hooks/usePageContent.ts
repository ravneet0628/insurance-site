import { useMemo } from 'react';
import type { HomePageContent, AboutPageContent, ContactPageContent } from '../types/pages';

// Import page content
import { homePageContent } from '../data/pages/home';
import { aboutPageContent } from '../data/pages/about';
import { contactPageContent } from '../data/pages/contact';

const pageContentMap = {
  home: homePageContent,
  about: aboutPageContent,
  contact: contactPageContent,
} as const;

export function useHomePageContent(): HomePageContent {
  return useMemo(() => homePageContent, []);
}

export function useAboutPageContent(): AboutPageContent {
  return useMemo(() => aboutPageContent, []);
}

export function useContactPageContent(): ContactPageContent {
  return useMemo(() => contactPageContent, []);
}

export function usePageContent(pageSlug: 'home' | 'about' | 'contact') {
  return useMemo(() => {
    const content = pageContentMap[pageSlug];
    if (!content) {
      console.warn(`No content found for page: ${pageSlug}`);
      return null;
    }
    return content;
  }, [pageSlug]);
}

export function getAvailablePages(): string[] {
  return Object.keys(pageContentMap);
}
