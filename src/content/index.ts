// Types
export type * from './types';

// Hooks
export { 
  useHomePageContent,
  useAboutPageContent, 
  useContactPageContent,
  usePageContent
} from './hooks/usePageContent';

export {
  useServiceContent,
  getAvailableServices,
  hasServiceContent
} from './hooks/useServiceContent';

// Content Data
export { homePageContent } from './data/pages/home';
export { aboutPageContent } from './data/pages/about'; 
export { contactPageContent } from './data/pages/contact';

// Service Content (optional exports for advanced usage)
export { lifeInsuranceContent } from './data/services/life';
export { superVisaInsuranceContent } from './data/services/super-visa-insurance';
export { visitorsInsuranceContent } from './data/services/visitors-insurance';
export { disabilityInsuranceContent } from './data/services/disability-insurance';
export { criticalIllnessInsuranceContent } from './data/services/critical-illness-insurance';
export { respContent } from './data/services/resp';
export { rrspContent } from './data/services/rrsp';
export { drugDentalInsuranceContent } from './data/services/drug-dental-insurance';
export { tfsaContent } from './data/services/tfsa';

// Utilities (Advanced Features)
export {
  validateServiceContent,
  validatePageContent,
  validateAllContent,
  validateIcons,
  logContentValidation
} from './utils/validation';

export {
  generateServicePreview,
  generatePagePreview,
  generateContentAnalytics,
  logContentPreview
} from './utils/preview'; 