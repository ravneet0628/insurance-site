import { criticalIllnessInsuranceContent } from './critical-illness-insurance';
import { disabilityInsuranceContent } from './disability-insurance';
import { fhsaContent } from './fhsa';
import { lifeInsuranceContent } from './life';
import { respContent } from './resp';
import { rrspContent } from './rrsp';
import { superVisaInsuranceContent } from './super-visa-insurance';
import { tfsaContent } from './tfsa';
import { visitorsInsuranceContent } from './visitors-insurance';

export const allServicesContent = [
  { ...superVisaInsuranceContent, slug: 'super-visa-insurance' },
  { ...visitorsInsuranceContent, slug: 'visitors-insurance' },
  { ...lifeInsuranceContent, slug: 'life-insurance' },
  { ...disabilityInsuranceContent, slug: 'disability-insurance' },
  { ...criticalIllnessInsuranceContent, slug: 'critical-illness-insurance' },
  { ...fhsaContent, slug: 'fhsa' },
  { ...respContent, slug: 'resp' },
  { ...rrspContent, slug: 'rrsp' },
  { ...tfsaContent, slug: 'tfsa' }
]; 