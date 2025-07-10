import type { ServiceContent } from '../../types/services';

export const rrspContent: ServiceContent = {
  meta: {
    title: 'RRSP | Registered Retirement Savings Plan for Your Future',
    description:
      'Build your retirement savings with RRSP. Tax-deductible contributions, tax-deferred growth, and flexible investment options for a secure retirement.',
    keywords: [
      'RRSP',
      'retirement savings plan',
      'tax deductible contributions',
      'retirement planning',
      'investment growth',
    ],
  },
  hero: {
    title: 'RRSP - Retirement Savings Plan',
    subtitle:
      "Build your retirement wealth with tax-deductible contributions and tax-deferred growth. Secure your financial future with Canada's premier retirement savings vehicle.",
    backgroundImage: '/images/office-building.jpg',
    ctaText: 'Start Retirement Planning',
    ctaLink: '/contact',
  },
  overview: {
    title: 'Your Path to Retirement Security',
    content:
      'A Registered Retirement Savings Plan (RRSP) is the foundation of retirement planning in Canada. With immediate tax deductions, tax-deferred growth, and flexible investment options, your RRSP helps you build wealth while reducing your current tax burden.',
    highlights: [
      'Tax-deductible contributions reduce current taxes',
      'Tax-deferred growth on all investments',
      'Contribution room based on 18% of income',
      'Wide range of investment options available',
    ],
  },
  features: {
    title: 'Maximize Your Retirement Savings',
    subtitle: "Take advantage of Canada's most powerful retirement savings tool",
    features: [
      {
        icon: 'BadgePercent',
        title: 'Tax Benefits',
        description: 'Immediate tax deductions and long-term tax-deferred growth.',
        details: [
          'Tax-deductible contributions',
          'Reduce current year taxable income',
          'Tax-deferred growth on investments',
          'Potentially lower tax rate at withdrawal',
        ],
      },
      {
        icon: 'Target',
        title: 'Investment Growth',
        description: 'Build wealth through compound growth over decades.',
        details: [
          'Wide range of investment options',
          'GICs, mutual funds, stocks, bonds',
          'Self-directed or managed options',
          'Professional investment management available',
        ],
      },
      {
        icon: 'Building',
        title: 'Special Programs',
        description: 'Access your RRSP for major life events without penalties.',
        details: [
          "Home Buyers' Plan (HBP) - up to $60,000",
          'Lifelong Learning Plan (LLP) - up to $20,000',
          'Spousal RRSP options for income splitting',
          'Carry-forward unused contribution room',
        ],
      },
    ],
  },
  details: {
    title: 'RRSP Strategies & Benefits',
    content:
      'Maximize your RRSP benefits with strategic planning and understanding of the various options available to optimize your retirement savings.',
    items: [
      {
        title: 'Contribution Strategies',
        description: 'Optimize your RRSP contributions for maximum benefit',
        benefits: [
          "Contribute 18% of previous year's income",
          'Maximum annual contribution limits',
          'Carry-forward unused contribution room',
          'Spousal RRSP for income splitting strategies',
        ],
      },
      {
        title: 'Investment Options',
        description: 'Choose from a wide range of qualified investments',
        benefits: [
          'Guaranteed Investment Certificates (GICs)',
          'Mutual funds and ETFs',
          'Individual stocks and bonds',
          'Real Estate Investment Trusts (REITs)',
        ],
      },
      {
        title: 'Withdrawal & Conversion',
        description: 'Understand your options as you approach retirement',
        benefits: [
          'Convert to RRIF by age 71',
          'Purchase an annuity for guaranteed income',
          'Lump sum withdrawal (fully taxable)',
          'Minimum withdrawal requirements after conversion',
        ],
      },
    ],
  },
  cta: {
    title: 'Start Building Your Retirement Today',
    subtitle:
      'Every year you delay retirement savings is a year of lost compound growth. Start your RRSP and secure your financial future.',
    buttonText: 'Open RRSP Account',
    buttonLink: '/contact',
    backgroundImage: '/images/office-building.jpg',
  },
};
