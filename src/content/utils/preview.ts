import type { ServiceContent } from '../types/services';
import type { HomePageContent, AboutPageContent, ContactPageContent } from '../types/pages';

interface ContentPreview {
  slug: string;
  type: 'service' | 'page';
  title: string;
  description: string;
  lastModified: string;
  wordCount: number;
  seoScore: number;
}

/**
 * Generates a preview summary for service content
 */
export function generateServicePreview(content: ServiceContent, slug: string): ContentPreview {
  const wordCount = calculateWordCount(content);
  const seoScore = calculateSEOScore(content);

  return {
    slug,
    type: 'service',
    title: content.meta.title,
    description: content.meta.description,
    lastModified: new Date().toISOString(),
    wordCount,
    seoScore,
  };
}

/**
 * Generates a preview summary for page content
 */
export function generatePagePreview(
  content: HomePageContent | AboutPageContent | ContactPageContent,
  slug: string
): ContentPreview {
  const wordCount = calculatePageWordCount(content);
  const seoScore = calculatePageSEOScore(content);

  return {
    slug,
    type: 'page',
    title: content.meta.title,
    description: content.meta.description,
    lastModified: new Date().toISOString(),
    wordCount,
    seoScore,
  };
}

/**
 * Calculates approximate word count for service content
 */
function calculateWordCount(content: ServiceContent): number {
  let words = 0;

  words += content.meta.title.split(' ').length;
  words += content.meta.description.split(' ').length;
  words += content.hero.title.split(' ').length;
  words += content.hero.subtitle.split(' ').length;
  words += content.overview.content.split(' ').length;
  words += content.details.content.split(' ').length;

  // Count feature words
  content.features.features.forEach((feature) => {
    words += feature.title.split(' ').length;
    words += feature.description.split(' ').length;
    if (feature.details) {
      feature.details.forEach((detail) => {
        words += detail.split(' ').length;
      });
    }
  });

  return words;
}

/**
 * Calculates approximate word count for page content
 */
function calculatePageWordCount(
  content: HomePageContent | AboutPageContent | ContactPageContent
): number {
  let words = 0;

  words += content.meta.title.split(' ').length;
  words += content.meta.description.split(' ').length;
  words += content.hero.title.split(' ').length;
  words += content.hero.subtitle.split(' ').length;

  // Type-specific word counting
  if ('services' in content) {
    // Home page
    const homeContent = content as HomePageContent;
    words += homeContent.about.description.split(' ').length;
    homeContent.services.cards.forEach((card) => {
      words += card.title.split(' ').length;
      words += card.description.split(' ').length;
    });
  }

  if ('mission' in content) {
    // About page
    const aboutContent = content as AboutPageContent;
    words += aboutContent.mission.content.split(' ').length;
    words += aboutContent.vision.content.split(' ').length;
  }

  return words;
}

/**
 * Calculates basic SEO score (0-100) for service content
 */
function calculateSEOScore(content: ServiceContent): number {
  let score = 0;

  // Meta title (20 points)
  if (content.meta.title) {
    score += 10;
    if (content.meta.title.length >= 30 && content.meta.title.length <= 60) {
      score += 10;
    }
  }

  // Meta description (20 points)
  if (content.meta.description) {
    score += 10;
    if (content.meta.description.length >= 120 && content.meta.description.length <= 160) {
      score += 10;
    }
  }

  // Keywords (10 points)
  if (content.meta.keywords && content.meta.keywords.length > 0) {
    score += 10;
  }

  // Hero content (20 points)
  if (content.hero.title && content.hero.subtitle) {
    score += 20;
  }

  // Features (15 points)
  if (content.features.features && content.features.features.length >= 3) {
    score += 15;
  }

  // CTA (15 points)
  if (content.cta.title && content.cta.buttonText && content.cta.buttonLink) {
    score += 15;
  }

  return score;
}

/**
 * Calculates basic SEO score for page content
 */
function calculatePageSEOScore(
  content: HomePageContent | AboutPageContent | ContactPageContent
): number {
  let score = 0;

  // Meta title (25 points)
  if (content.meta.title) {
    score += 15;
    if (content.meta.title.length >= 30 && content.meta.title.length <= 60) {
      score += 10;
    }
  }

  // Meta description (25 points)
  if (content.meta.description) {
    score += 15;
    if (content.meta.description.length >= 120 && content.meta.description.length <= 160) {
      score += 10;
    }
  }

  // Keywords (20 points)
  if (content.meta.keywords && content.meta.keywords.length > 0) {
    score += 20;
  }

  // Hero content (30 points)
  if (content.hero.title && content.hero.subtitle) {
    score += 30;
  }

  return score;
}

/**
 * Generates content analytics for development purposes
 */
export function generateContentAnalytics(
  serviceContents: Record<string, ServiceContent>,
  pageContents: Record<string, HomePageContent | AboutPageContent | ContactPageContent>
): {
  totalContent: number;
  totalWords: number;
  averageSEOScore: number;
  contentByType: Record<string, number>;
} {
  const allPreviews: ContentPreview[] = [];

  // Generate service previews
  Object.entries(serviceContents).forEach(([slug, content]) => {
    allPreviews.push(generateServicePreview(content, slug));
  });

  // Generate page previews
  Object.entries(pageContents).forEach(([slug, content]) => {
    allPreviews.push(generatePagePreview(content, slug));
  });

  const totalWords = allPreviews.reduce((sum, preview) => sum + preview.wordCount, 0);
  const averageSEOScore =
    allPreviews.reduce((sum, preview) => sum + preview.seoScore, 0) / allPreviews.length;

  const contentByType = allPreviews.reduce(
    (acc, preview) => {
      acc[preview.type] = (acc[preview.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return {
    totalContent: allPreviews.length,
    totalWords,
    averageSEOScore: Math.round(averageSEOScore),
    contentByType,
  };
}

/**
 * Development helper to log content preview information
 */
export function logContentPreview(preview: ContentPreview): void {
  if (import.meta.env.DEV) {
    console.group(`📄 Content Preview: ${preview.title}`);
    console.log(`Type: ${preview.type}`);
    console.log(`Slug: ${preview.slug}`);
    console.log(`Description: ${preview.description}`);
    console.log(`Word Count: ${preview.wordCount}`);
    console.log(`SEO Score: ${preview.seoScore}/100`);
    console.log(`Last Modified: ${preview.lastModified}`);
    console.groupEnd();
  }
}
