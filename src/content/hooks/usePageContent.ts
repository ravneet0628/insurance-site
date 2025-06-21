import { useMemo } from 'react';
import type { HomePageContent } from '../types/pages';

// Import page content
import { homePageContent } from '../data/pages/home';

const pageContentMap = {
  home: homePageContent,
  // TODO: Add about page content when created
  // about: aboutPageContent,
} as const;

export function useHomePageContent(): HomePageContent {
  return useMemo(() => homePageContent, []);
}

// Type-safe page content getter
export function usePageContent<T extends keyof typeof pageContentMap>(
  page: T
): typeof pageContentMap[T] {
  return useMemo(() => {
    const content = pageContentMap[page];
    
    if (!content) {
      console.warn(`No content found for page: ${page}. Available pages:`, Object.keys(pageContentMap));
    }
    
    return content;
  }, [page]);
}

export function getAvailablePages(): string[] {
  return Object.keys(pageContentMap);
} 