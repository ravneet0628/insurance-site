import { useMemo } from 'react';
import type { HomePageContent, ContactPageContent } from '../types/pages';

// Import page content
import { homePageContent } from '../data/pages/home';
import { contactPageContent } from '../data/pages/contact';

const pageContentMap = {
  home: homePageContent,
  contact: contactPageContent,
} as const;

export function useHomePageContent(): HomePageContent {
  return useMemo(() => homePageContent, []);
}

export function useContactPageContent(): ContactPageContent {
  return useMemo(() => contactPageContent, []);
}

export function usePageContent(pageSlug: 'home' | 'contact') {
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
