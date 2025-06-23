import type { ServiceContent } from '../../types/services';

export const disabilityInsuranceContent: ServiceContent = {
  meta: {
    title: 'Disability Insurance | Income Protection Coverage',
    description: 'Protect your income with comprehensive disability insurance. Short and long-term coverage for illness, injury, and other disabilities that prevent you from working.',
    keywords: ['disability insurance', 'income protection', 'short term disability', 'long term disability', 'salary protection'],
  },
  hero: {
    title: 'Disability Insurance',
    subtitle: 'Protect your most valuable asset - your ability to earn income. Get comprehensive disability coverage for when you need it most.',
    backgroundImage: '/images/office-building.jpg',
    ctaText: 'Protect Your Income',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Why Disability Insurance is Essential',
    content: 'Your ability to earn income is likely your most valuable asset. If an illness or injury prevents you from working, disability insurance provides essential income replacement to help you maintain your standard of living and meet your financial obligations.',
    highlights: [
      'Replace 60-85% of your income if disabled',
      'Short-term and long-term coverage options',
      'Coverage for illness, injury, and mental health',
      'Benefits payable to age 65 for long-term claims'
    ],
  },
  features: {
    title: 'Comprehensive Income Protection',
    subtitle: 'Choose the coverage that fits your needs and occupation',
    features: [
      {
        icon: 'CheckCircle',
        title: 'Income Replacement',
        description: 'Protect your ability to earn income when you cannot work due to disability.',
        details: [
          'Replace 60-85% of your monthly income',
          'Tax-free benefits in most cases',
          'Coverage for own occupation or any occupation',
          'Benefits continue until recovery or age 65'
        ],
      },
      {
        icon: 'Timer',
        title: 'Short & Long Term Options',
        description: 'Coverage options for both short-term and long-term disability situations.',
        details: [
          'Short-term: Coverage up to 2 years',
          'Long-term: Coverage to age 65',
          'Elimination periods from 30 days to 2 years',
          'Partial and residual benefits available'
        ],
      },
      {
        icon: 'DollarSign',
        title: 'Flexible Benefits',
        description: 'Choose benefit amounts and features that fit your needs and budget.',
        details: [
          'Cost of living adjustments available',
          'Future increase options without medical exams',
          'Return to work incentives',
          'Waiver of premium benefits included'
        ],
      },
    ],
  },
  details: {
    title: 'Types of Disabilities Covered',
    content: 'Our disability insurance covers a wide range of conditions that can affect your ability to work, providing comprehensive protection for your income.',
    items: [
      {
        title: 'Illness-Related Disability',
        description: 'Coverage for disabilities caused by illness and medical conditions',
        benefits: [
          'Cancer and other serious illnesses',
          'Heart disease and cardiovascular conditions',
          'Mental health conditions and stress disorders',
          'Chronic diseases and progressive conditions'
        ],
      },
      {
        title: 'Injury-Related Disability',
        description: 'Protection against disabilities resulting from accidents and injuries',
        benefits: [
          'Work-related and non-work-related injuries',
          'Motor vehicle accidents',
          'Sports and recreational injuries',
          'Home and workplace accidents'
        ],
      },
      {
        title: 'Partial & Residual Benefits',
        description: 'Support when you can work part-time or at reduced capacity',
        benefits: [
          'Proportional benefits for reduced income',
          'Return to work transition benefits',
          'Rehabilitation and retraining support',
          'Workplace accommodation assistance'
        ],
      },
    ],
  },
  cta: {
    title: 'Don\'t Risk Your Financial Future',
    subtitle: 'Statistics show you\'re more likely to become disabled than to die during your working years. Protect your income today.',
    buttonText: 'Get Disability Quote',
    buttonLink: '/quote',
    backgroundImage: '/images/office-building.jpg',
  },
}; 