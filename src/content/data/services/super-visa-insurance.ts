import type { ServiceContent } from '../../types/services';

export const superVisaInsuranceContent: ServiceContent = {
  meta: {
    title: 'Super Visa Insurance | Government Approved Coverage Plans',
    description: 'Mandatory insurance coverage for parents or grandparents seeking a Super Visa for Canada. Meets all government requirements with comprehensive medical protection.',
    keywords: ['super visa insurance', 'canada super visa', 'parent grandparent insurance', 'government approved coverage', 'mandatory insurance'],
  },
  hero: {
    title: 'Super Visa Insurance',
    subtitle: 'Government-approved mandatory insurance coverage for parents and grandparents visiting Canada on a Super Visa.',
    backgroundImage: '/images/family-protection.jpg',
    ctaText: 'Get Coverage Quote',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Essential Coverage for Super Visa Applications',
    content: 'Super Visa Insurance is mandatory coverage required for parents and grandparents applying for a Canadian Super Visa. Our government-approved plans meet all Immigration, Refugees and Citizenship Canada (IRCC) requirements while providing comprehensive medical protection.',
    highlights: [
      'Meets Government of Canada minimum requirements',
      'Coverage from $100,000 to $500,000 available',
      'Emergency medical expenses coverage',
      'Coverage for COVID-19 related expenses'
    ],
  },
  features: {
    title: 'Government-Approved Coverage Options',
    subtitle: 'Choose from plans that meet all Super Visa requirements',
    features: [
      {
        icon: 'Shield',
        title: 'Emergency Medical Coverage',
        description: 'Comprehensive emergency medical expenses coverage meeting minimum $100,000 requirement.',
        details: [
          'Hospital and physician expenses',
          'Emergency surgery and treatments',
          'Diagnostic tests and procedures',
          'Emergency prescription medications'
        ],
      },
      {
        icon: 'Heart',
        title: 'Additional Health Benefits',
        description: 'Extended coverage beyond basic requirements for complete protection.',
        details: [
          'Emergency dental coverage up to $3,000',
          'Vision care for emergencies',
          'Medical equipment and supplies',
          'Physiotherapy and rehabilitation'
        ],
      },
      {
        icon: 'Plane',
        title: 'Travel Protection',
        description: 'Coverage for travel-related emergencies and unexpected situations.',
        details: [
          'Emergency transportation coverage',
          'Repatriation coverage',
          'Trip interruption benefits',
          'Accommodation for family member'
        ],
      },
    ],
  },
  details: {
    title: 'Super Visa Requirements & Coverage Details',
    content: 'Our Super Visa Insurance plans are specifically designed to meet all Canadian government requirements while providing comprehensive medical protection during your visit.',
    items: [
      {
        title: 'Government Requirements Met',
        description: 'Fully compliant with IRCC Super Visa insurance requirements',
        benefits: [
          'Minimum $100,000 medical insurance coverage',
          'Valid for entire duration of stay in Canada',
          'Coverage from Canadian insurance company',
          'No deductible for emergency medical expenses'
        ],
      },
      {
        title: 'Medical Emergencies Covered',
        description: 'Comprehensive coverage for unexpected medical situations',
        benefits: [
          'Hospital accommodation and services',
          'Physician and specialist consultations',
          'Emergency surgery and procedures',
          'Prescription medications and medical supplies'
        ],
      },
      {
        title: 'COVID-19 Protection',
        description: 'Specific coverage for pandemic-related medical expenses',
        benefits: [
          'COVID-19 testing if medically necessary',
          'Treatment for COVID-19 symptoms',
          'Hospitalization for COVID-19',
          'Emergency medical evacuation if needed'
        ],
      },
    ],
  },
  cta: {
    title: 'Ready to Apply for Your Super Visa?',
    subtitle: 'Get government-approved Super Visa insurance coverage and take the first step toward reuniting with your family in Canada.',
    buttonText: 'Get Super Visa Quote',
    buttonLink: '/quote',
    backgroundImage: '/images/family-protection.jpg',
  },
}; 