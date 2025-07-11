// Types
export type * from './types';

// Hooks
export { useHomePageContent, useContactPageContent, usePageContent } from './hooks/usePageContent';

export {
  useServiceContent,
  getAvailableServices,
  hasServiceContent,
} from './hooks/useServiceContent';

// Content Data
export { homePageContent } from './data/pages/home';
export { contactPageContent } from './data/pages/contact';

// Service Content (optional exports for advanced usage)
export { lifeInsuranceContent } from './data/services/life';
export { superVisaInsuranceContent } from './data/services/super-visa-insurance';
export { visitorsInsuranceContent } from './data/services/visitors-insurance';
export { disabilityInsuranceContent } from './data/services/disability-insurance';
export { criticalIllnessInsuranceContent } from './data/services/critical-illness-insurance';
export { respContent } from './data/services/resp';
export { rrspContent } from './data/services/rrsp';

export { tfsaContent } from './data/services/tfsa';

// All utility functions have been removed for simplicity
