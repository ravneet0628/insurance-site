import type { ServiceContent } from '../../types/services';

export const criticalIllnessInsuranceContent: ServiceContent = {
  meta: {
    title: 'Critical Illness Insurance | Comprehensive Coverage for Serious Conditions',
    description:
      'Protect yourself against critical illnesses with comprehensive coverage. Lump sum payments for cancer, heart attack, stroke, and 25+ other conditions.',
    keywords: [
      'critical illness insurance',
      'cancer coverage',
      'heart attack insurance',
      'stroke coverage',
      'serious illness protection',
    ],
  },
  hero: {
    title: 'Critical Illness Insurance',
    subtitle:
      'Financial protection when you need it most. Get a lump sum payment to help cover expenses when diagnosed with a critical illness.',
    backgroundImage: '/images/family-protection.jpg',
    ctaText: 'Get Protection Quote',
    ctaLink: '/contact',
  },
  overview: {
    title: "Protection Against Life's Unexpected Challenges",
    content:
      'Critical Illness Insurance provides a tax-free lump sum payment upon diagnosis of a covered critical illness. This financial support helps you focus on recovery while covering medical expenses, lost income, and other costs not covered by traditional health insurance.',
    highlights: [
      'Tax-free lump sum payment upon diagnosis',
      'Coverage for 25+ critical illnesses',
      'Use benefits however you need',
      'Return of premium options available',
    ],
  },
  features: {
    title: 'Comprehensive Critical Illness Protection',
    subtitle: 'Coverage for the conditions that matter most',
    features: [
      {
        icon: 'AlertTriangle',
        title: 'Major Critical Illnesses',
        description: 'Comprehensive coverage for the most serious and life-changing conditions.',
        details: [
          'Cancer (life-threatening)',
          'Heart attack and stroke',
          'Coronary artery bypass surgery',
          'Major organ transplants',
        ],
      },
      {
        icon: 'Users',
        title: 'Additional Conditions',
        description: 'Extended coverage for a wide range of serious medical conditions.',
        details: [
          "Multiple sclerosis and Parkinson's disease",
          'Kidney failure and liver disease',
          "Alzheimer's disease and dementia",
          'Paralysis and spinal cord injuries',
        ],
      },
      {
        icon: 'Layers',
        title: 'Flexible Benefits',
        description: 'Options to customize your coverage and enhance your protection.',
        details: [
          'Coverage amounts from $10,000 to $2,000,000',
          'Return of premium at age 75',
          "Children's critical illness coverage",
          'Partial payment for less severe conditions',
        ],
      },
    ],
  },
  details: {
    title: 'How Critical Illness Insurance Works',
    content:
      'Critical Illness Insurance provides financial support when you need it most, with a straightforward claims process and flexible use of benefits.',
    items: [
      {
        title: 'Diagnosis & Claims',
        description: 'Simple process from diagnosis to benefit payment',
        benefits: [
          'Diagnosis by qualified medical professional',
          'Survival period (typically 30 days)',
          'Submit claim with medical documentation',
          'Tax-free lump sum payment upon approval',
        ],
      },
      {
        title: 'Use Benefits Your Way',
        description: 'Complete flexibility in how you use your benefit payment',
        benefits: [
          'Cover medical expenses not covered by health insurance',
          'Replace lost income during treatment and recovery',
          'Pay for experimental treatments or private care',
          'Modify your home for accessibility needs',
        ],
      },
      {
        title: 'Enhanced Coverage Options',
        description: 'Additional features to maximize your protection',
        benefits: [
          'Inflation protection to maintain coverage value',
          'Guaranteed renewability regardless of health changes',
          'Waiver of premium if you become disabled',
          'Convertibility options for changing needs',
        ],
      },
    ],
  },
  cta: {
    title: 'Protect Against the Unexpected',
    subtitle:
      "One in two people will be diagnosed with cancer in their lifetime. Don't face a critical illness without financial protection.",
    buttonText: 'Get Critical Illness Quote',
    buttonLink: '/contact',
    backgroundImage: '/images/family-protection.jpg',
  },
};
