import type { ServiceContent } from '../../types/services';

export const tfsaContent: ServiceContent = {
  meta: {
    title: 'TFSA | Tax-Free Savings Account for Flexible Growth',
    description: 'Tax-Free Savings Account for flexible, tax-free growth on your savings. Ideal for short-term and long-term financial goals with no tax on withdrawals.',
    keywords: ['TFSA', 'tax-free savings account', 'tax-free growth', 'flexible savings', 'investment account'],
  },
  hero: {
    title: 'TFSA - Tax-Free Savings Account',
    subtitle: 'Achieve your financial goals with completely tax-free growth and withdrawals. The most flexible savings and investment account available to Canadians.',
    backgroundImage: '/images/office-building.jpg',
    ctaText: 'Open TFSA Account',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Ultimate Savings Flexibility',
    content: 'A Tax-Free Savings Account (TFSA) offers the ultimate in savings flexibility with completely tax-free growth and withdrawals. Whether you\'re saving for a vacation, emergency fund, or long-term goals, your TFSA grows without any tax implications.',
    highlights: [
      'Completely tax-free growth and withdrawals',
      'Flexible contributions and withdrawals anytime',
      'Wide range of investment options available',
      'No age limit for contributions'
    ],
  },
  features: {
    title: 'Tax-Free Growth & Flexibility',
    subtitle: 'The perfect account for all your savings and investment goals',
    features: [
      {
        icon: 'DollarSign',
        title: 'Tax-Free Benefits',
        description: 'Enjoy completely tax-free growth and withdrawals with no tax implications.',
        details: [
          'No tax on investment growth',
          'No tax on withdrawals',
          'Contribution room is never lost',
          'Re-contribute withdrawn amounts next year'
        ],
      },
      {
        icon: 'BarChart',
        title: 'Investment Options',
        description: 'Choose from a wide range of qualified investments to grow your money.',
        details: [
          'High-interest savings accounts',
          'Guaranteed Investment Certificates (GICs)',
          'Mutual funds and ETFs',
          'Individual stocks and bonds'
        ],
      },
      {
        icon: 'Wallet',
        title: 'Complete Flexibility',
        description: 'Access your money anytime without penalties or tax consequences.',
        details: [
          'Withdraw funds anytime for any purpose',
          'No minimum withdrawal requirements',
          'Use for short-term or long-term goals',
          'Ideal for emergency funds'
        ],
      },
    ],
  },
  details: {
    title: 'TFSA Benefits & Strategies',
    content: 'Maximize your TFSA benefits with strategic planning and understanding of contribution limits and investment options.',
    items: [
      {
        title: 'Contribution Room & Limits',
        description: 'Understanding TFSA contribution rules and maximizing your room',
        benefits: [
          'Annual contribution limit (currently $7,000)',
          'Unused room carries forward indefinitely',
          'Re-contribute withdrawn amounts next calendar year',
          'No income restrictions on contributions'
        ],
      },
      {
        title: 'Ideal Uses for TFSA',
        description: 'Perfect for various financial goals and life situations',
        benefits: [
          'Emergency fund savings',
          'Short-term savings goals',
          'Tax-free retirement income',
          'Supplement to RRSP savings'
        ],
      },
      {
        title: 'Estate Planning Benefits',
        description: 'TFSA advantages for estate and family planning',
        benefits: [
          'Designate beneficiaries for tax-free transfer',
          'No impact on Old Age Security or Guaranteed Income Supplement',
          'Spouse can inherit contribution room',
          'No required withdrawals at any age'
        ],
      },
    ],
  },
  cta: {
    title: 'Start Growing Your Money Tax-Free',
    subtitle: 'Every dollar you don\'t save in a TFSA is a dollar that could be growing completely tax-free. Open your account today.',
    buttonText: 'Open TFSA Today',
    buttonLink: '/quote',
    backgroundImage: '/images/office-building.jpg',
  },
}; 