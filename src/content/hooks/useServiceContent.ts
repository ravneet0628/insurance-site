import { useMemo } from 'react';
import type { ServiceContent } from '../types/services';

// Import all service content
import { lifeInsuranceContent } from '../data/services/life';
import { superVisaInsuranceContent } from '../data/services/super-visa-insurance';
import { visitorsInsuranceContent } from '../data/services/visitors-insurance';
import { disabilityInsuranceContent } from '../data/services/disability-insurance';
import { criticalIllnessInsuranceContent } from '../data/services/critical-illness-insurance';
import { respContent } from '../data/services/resp';
import { rrspContent } from '../data/services/rrsp';
import { drugDentalInsuranceContent } from '../data/services/drug-dental-insurance';
import { tfsaContent } from '../data/services/tfsa';

const serviceContentMap: Record<string, ServiceContent> = {
  'life-insurance': lifeInsuranceContent,
  'super-visa-insurance': superVisaInsuranceContent,
  'visitors-insurance': visitorsInsuranceContent,
  'disability-insurance': disabilityInsuranceContent,
  'critical-illness-insurance': criticalIllnessInsuranceContent,
  'resp': respContent,
  'rrsp': rrspContent,
  'drug-dental-insurance': drugDentalInsuranceContent,
  'tfsa': tfsaContent,
};

export function useServiceContent(serviceSlug: string): ServiceContent | null {
  return useMemo(() => {
    const content = serviceContentMap[serviceSlug];
    
    if (!content) {
      console.warn(`No content found for service: ${serviceSlug}. Available services:`, Object.keys(serviceContentMap));
      return null;
    }
    
    return content;
  }, [serviceSlug]);
}

export function getAvailableServices(): string[] {
  return Object.keys(serviceContentMap);
}

export function hasServiceContent(serviceSlug: string): boolean {
  return serviceSlug in serviceContentMap;
} 