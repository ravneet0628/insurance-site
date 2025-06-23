import type { ServiceContent } from '../../types/services';

export const drugDentalInsuranceContent: ServiceContent = {
  meta: {
    title: 'Drug & Dental Insurance | Comprehensive Health Benefits Coverage',
    description: 'Comprehensive health benefits coverage including prescription drugs, dental care, vision care, and paramedical services for you and your family.',
    keywords: ['drug insurance', 'dental insurance', 'health benefits', 'prescription coverage', 'vision care', 'paramedical services'],
  },
  hero: {
    title: 'Drug & Dental Insurance',
    subtitle: 'Comprehensive health benefits coverage for prescription drugs, dental care, vision, and paramedical services to keep your family healthy.',
    backgroundImage: '/images/family-protection.jpg',
    ctaText: 'Get Health Coverage',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Complete Health Benefits Protection',
    content: 'Our Drug & Dental Insurance provides comprehensive coverage for essential healthcare needs not covered by provincial health plans. From prescription medications to dental care, vision services, and paramedical treatments, we help you maintain optimal health for you and your family.',
    highlights: [
      'Prescription drug coverage up to 100%',
      'Comprehensive dental care including major services',
      'Vision care and eye examinations',
      'Paramedical services coverage'
    ],
  },
  features: {
    title: 'Comprehensive Health Benefits',
    subtitle: 'Coverage for all your essential healthcare needs',
    features: [
      {
        icon: 'Tablets',
        title: 'Prescription Drug Coverage',
        description: 'Comprehensive coverage for prescription medications with flexible reimbursement options.',
        details: [
          'Generic and brand name drug coverage',
          '80-100% reimbursement options',
          'Coverage for specialty medications',
          'Online pharmacy services available'
        ],
      },
      {
        icon: 'Smile',
        title: 'Dental Care Benefits',
        description: 'Complete dental coverage from routine cleanings to major procedures.',
        details: [
          'Routine cleanings and checkups',
          'Fillings, crowns, and bridges',
          'Root canals and oral surgery',
          'Orthodontic coverage for children'
        ],
      },
      {
        icon: 'Glasses',
        title: 'Vision & Paramedical',
        description: 'Coverage for eye care and alternative healthcare services.',
        details: [
          'Regular eye examinations',
          'Prescription glasses and contact lenses',
          'Physiotherapy and massage therapy',
          'Chiropractic and psychology services'
        ],
      },
    ],
  },
  details: {
    title: 'Health Benefits Categories',
    content: 'Our comprehensive health benefits plan covers a wide range of healthcare services to ensure you and your family receive the care you need.',
    items: [
      {
        title: 'Prescription Drug Benefits',
        description: 'Comprehensive coverage for prescription medications',
        benefits: [
          'Generic and brand name drug coverage',
          'Specialty and high-cost medication coverage',
          'Diabetic supplies and medical equipment',
          'Smoking cessation and contraceptive coverage'
        ],
      },
      {
        title: 'Dental Care Coverage',
        description: 'Complete dental benefits for the whole family',
        benefits: [
          'Basic services: cleanings, fillings, extractions',
          'Major services: crowns, bridges, dentures',
          'Orthodontic treatment for children and adults',
          'Emergency dental care coverage'
        ],
      },
      {
        title: 'Extended Health Services',
        description: 'Coverage for vision care and paramedical services',
        benefits: [
          'Vision care: exams, glasses, contact lenses',
          'Physiotherapy and occupational therapy',
          'Massage therapy and chiropractic care',
          'Psychology and counseling services'
        ],
      },
    ],
  },
  cta: {
    title: 'Protect Your Family\'s Health',
    subtitle: 'Don\'t let health expenses strain your budget. Get comprehensive drug and dental coverage for peace of mind.',
    buttonText: 'Get Health Benefits Quote',
    buttonLink: '/quote',
    backgroundImage: '/images/family-protection.jpg',
  },
}; 