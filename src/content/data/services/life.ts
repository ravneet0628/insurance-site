import type { ServiceContent } from '../../types/services';

export const lifeInsuranceContent: ServiceContent = {
  meta: {
    title: 'Life Insurance | Comprehensive Coverage Plans',
    description:
      "Protect your family's future with our comprehensive life insurance plans. Term, whole, and universal life options available.",
    keywords: ['life insurance', 'term life', 'whole life', 'family protection', 'death benefit'],
  },

  hero: {
    title: 'Life Insurance',
    subtitle:
      "Protect your family's financial future with comprehensive life insurance coverage tailored to your needs.",
    backgroundImage: '/images/family-protection.jpg',
    ctaText: 'Get Started',
    ctaLink: '/contact',
  },

  overview: {
    title: "Secure Your Family's Tomorrow",
    content:
      'Life insurance provides essential financial protection for your loved ones when they need it most. Our comprehensive plans ensure your family can maintain their lifestyle, pay off debts, and secure their future even in your absence.',
    highlights: [
      'Tax-free death benefits for beneficiaries',
      'Flexible coverage amounts and payment options',
      'Additional riders for enhanced protection',
      'Competitive rates with fast approval',
    ],
  },

  features: {
    title: 'Life Insurance Options',
    subtitle: 'Choose the plan that best fits your needs and budget',
    features: [
      {
        icon: 'FileText',
        title: 'Term Life Insurance',
        description:
          'Affordable coverage for a specific period, perfect for temporary needs and budget-conscious families.',
        details: [
          '10, 20, or 30-year terms available',
          'Renewable and convertible options',
          'Most affordable premium options',
          'Ideal for mortgage protection',
        ],
      },
      {
        icon: 'Home',
        title: 'Whole Life Insurance',
        description:
          'Permanent coverage with cash value accumulation and guaranteed premiums for lifetime protection.',
        details: [
          'Guaranteed death benefit',
          'Cash value growth potential',
          'Fixed premium payments',
          'Dividend opportunities',
        ],
      },
      {
        icon: 'ArrowUpRight',
        title: 'Universal Life Insurance',
        description:
          'Flexible permanent insurance with investment options and adjustable premiums.',
        details: [
          'Flexible premium payments',
          'Investment growth potential',
          'Adjustable death benefits',
          'Cash value accessibility',
        ],
      },
    ],
  },

  details: {
    title: 'Coverage Details & Benefits',
    content:
      'Our life insurance policies are designed to provide comprehensive financial protection with features that adapt to your changing needs throughout life.',
    items: [
      {
        title: 'Death Benefit Protection',
        description: 'Guaranteed tax-free payout to your beneficiaries',
        benefits: [
          'Replace lost income for family expenses',
          'Pay off mortgage and outstanding debts',
          "Fund children's education expenses",
          'Cover final expenses and estate costs',
        ],
      },
      {
        title: 'Living Benefits',
        description: "Access your coverage while you're still alive",
        benefits: [
          'Accelerated death benefits for terminal illness',
          'Cash value loans and withdrawals',
          'Premium waiver for disability',
          'Long-term care benefits',
        ],
      },
      {
        title: 'Additional Riders',
        description: 'Enhance your coverage with optional add-ons',
        benefits: [
          'Accidental death and dismemberment',
          'Critical illness coverage',
          'Disability waiver of premium',
          "Children's term life insurance",
        ],
      },
    ],
  },

  cta: {
    title: 'Ready to Protect Your Family?',
    subtitle:
      "Get a personalized life insurance quote in minutes and secure your family's financial future today.",
    buttonText: 'Contact Us',
    buttonLink: '/contact',
    backgroundImage: '/images/family-protection.jpg',
  },
};
