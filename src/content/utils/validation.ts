import type { ServiceContent } from '../types/services';
import type { HomePageContent, AboutPageContent, ContactPageContent } from '../types/pages';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates service content structure and completeness
 */
export function validateServiceContent(content: ServiceContent, slug: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields validation
  if (!content.meta?.title) errors.push(`${slug}: Missing meta title`);
  if (!content.meta?.description) errors.push(`${slug}: Missing meta description`);
  if (!content.hero?.title) errors.push(`${slug}: Missing hero title`);
  if (!content.hero?.subtitle) errors.push(`${slug}: Missing hero subtitle`);
  if (!content.features?.features?.length) errors.push(`${slug}: Missing features`);

  // Content quality checks
  if (content.meta?.title && content.meta.title.length > 60) {
    warnings.push(`${slug}: Meta title is long (${content.meta.title.length} chars). Consider keeping under 60 chars for SEO.`);
  }
  
  if (content.meta?.description && content.meta.description.length > 160) {
    warnings.push(`${slug}: Meta description is long (${content.meta.description.length} chars). Consider keeping under 160 chars for SEO.`);
  }

  if (content.features?.features && content.features.features.length > 4) {
    warnings.push(`${slug}: Has ${content.features.features.length} features. Consider limiting to 3-4 for better UX.`);
  }

  // Check for missing CTA
  if (!content.cta?.title || !content.cta?.buttonText) {
    warnings.push(`${slug}: Missing or incomplete CTA section`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validates page content structure
 */
export function validatePageContent(
  content: HomePageContent | AboutPageContent | ContactPageContent, 
  pageType: string
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Common validations
  if (!content.meta?.title) errors.push(`${pageType}: Missing meta title`);
  if (!content.meta?.description) errors.push(`${pageType}: Missing meta description`);
  if (!content.hero?.title) errors.push(`${pageType}: Missing hero title`);

  // Page-specific validations
  if (pageType === 'home' && 'services' in content) {
    const homeContent = content as HomePageContent;
    if (!homeContent.services?.cards?.length) {
      errors.push(`${pageType}: Missing service cards`);
    }
    if (homeContent.services?.cards && homeContent.services.cards.length !== 9) {
      warnings.push(`${pageType}: Has ${homeContent.services.cards.length} service cards. Expected 9.`);
    }
  }

  if (pageType === 'about' && 'team' in content) {
    const aboutContent = content as AboutPageContent;
    if (!aboutContent.team?.members?.length) {
      warnings.push(`${pageType}: No team members defined`);
    }
  }

  if (pageType === 'contact' && 'contactInfo' in content) {
    const contactContent = content as ContactPageContent;
    if (!contactContent.contactInfo?.office?.coordinates?.length) {
      warnings.push(`${pageType}: Missing office coordinates for map`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validates all content and provides a comprehensive report
 */
export function validateAllContent(
  serviceContents: Record<string, ServiceContent>,
  pageContents: { home: HomePageContent; about: AboutPageContent; contact: ContactPageContent }
): ValidationResult {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  // Validate all services
  Object.entries(serviceContents).forEach(([slug, content]) => {
    const result = validateServiceContent(content, slug);
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);
  });

  // Validate all pages
  Object.entries(pageContents).forEach(([pageType, content]) => {
    const result = validatePageContent(content, pageType);
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);
  });

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
}

/**
 * Checks for missing icons in content
 */
export function validateIcons(content: ServiceContent, slug: string): string[] {
  const validIcons = [
    'Shield', 'Users', 'Heart', 'Activity', 'Award', 'Clock', 
    'CheckCircle', 'Wallet', 'Target', 'Eye', 'DollarSign'
  ];
  
  const missingIcons: string[] = [];
  
  content.features?.features?.forEach((feature, index) => {
    if (feature.icon && !validIcons.includes(feature.icon)) {
      missingIcons.push(`${slug}: Feature ${index + 1} uses invalid icon "${feature.icon}"`);
    }
  });

  return missingIcons;
}

/**
 * Development helper to log content validation results
 */
export function logContentValidation(): void {
  if (import.meta.env.DEV) {
    console.group('🔍 Content Management System Validation');
    
    // This would need to import actual content files
    // For now, just log that validation is available
    console.log('✅ Content validation utilities loaded');
    console.log('💡 Use validateServiceContent() and validatePageContent() to check content integrity');
    console.log('🎯 Run validateAllContent() for comprehensive validation');
    
    console.groupEnd();
  }
} 