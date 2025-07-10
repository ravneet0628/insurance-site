import type { ServiceContent } from '../../types/services';

export const fhsaContent: ServiceContent = {
  meta: {
    title: 'FHSA - First Home Savings Account | Tax-Free Home Buying',
    description:
      'First Home Savings Account combining RRSP and TFSA benefits for first-time home buyers. Tax deductible contributions and tax-free withdrawals.',
    keywords: [
      'FHSA',
      'First Home Savings Account',
      'home buying',
      'tax benefits',
      'first-time home buyers',
      'real estate',
      'savings account',
    ],
  },
  hero: {
    title: 'FHSA',
    subtitle:
      'First Home Savings Account combining RRSP and TFSA benefits for first-time home buyers.',
    backgroundImage: '/images/real-estate.jpg',
    ctaText: 'Open FHSA Account',
    ctaLink: '/contact',
  },
  overview: {
    title: 'Your Path to Homeownership',
    content:
      'The First Home Savings Account (FHSA) is a revolutionary savings tool that combines the best features of RRSPs and TFSAs specifically for first-time home buyers. Get tax deductions on contributions like an RRSP, plus tax-free withdrawals like a TFSA when purchasing your first home.',
    highlights: [
      'Tax deductible contributions like RRSP',
      'Tax-free withdrawals like TFSA',
      'Up to $40,000 contribution room',
      'Designed for first-time home buyers',
    ],
  },
  features: {
    title: 'FHSA Benefits',
    subtitle: 'Maximize your home buying power',
    features: [
      {
        title: 'Tax Deduction Benefits',
        description:
          'Contribute up to $8,000 annually and claim immediate tax deductions, just like an RRSP.',
        icon: 'DollarSign',
        details: [
          'Annual contribution limit of $8,000',
          'Lifetime contribution limit of $40,000',
          'Immediate tax deduction on contributions',
          'Reduce your taxable income',
        ],
      },
      {
        title: 'Tax-Free Withdrawals',
        description:
          'Withdraw funds tax-free for your first home purchase, including investment growth.',
        icon: 'Home',
        details: [
          'Tax-free withdrawals for qualifying home purchases',
          'No need to repay withdrawn amounts',
          'Investment growth is also tax-free',
          'Can be used for down payment and closing costs',
        ],
      },
      {
        title: 'Flexible Investment Options',
        description:
          'Invest your FHSA funds in various qualified investments to grow your savings.',
        icon: 'TrendingUp',
        details: [
          'GICs and term deposits',
          'Mutual funds and ETFs',
          'Stocks and bonds',
          'Professional investment management available',
        ],
      },
      {
        title: 'First-Time Buyer Focus',
        description:
          "Specifically designed for Canadians who have never owned a home or haven't owned one in the past 4 years.",
        icon: 'Users',
        details: [
          'Must be a Canadian resident',
          'Must be 18 years of age or older',
          'First-time home buyer qualification',
          'Can contribute until age 71',
        ],
      },
    ],
  },
  details: {
    title: 'FHSA Rules & Guidelines',
    content: 'Important information about your First Home Savings Account',
    items: [
      {
        title: 'Contribution Rules',
        description: 'Annual and lifetime contribution limits for your FHSA',
        benefits: [
          'Annual contribution limit: $8,000',
          'Lifetime contribution limit: $40,000',
          'Unused contribution room carries forward',
          'Can contribute until December 31st of the year you turn 71',
        ],
      },
      {
        title: 'Withdrawal Requirements',
        description: 'Requirements for qualifying home purchases',
        benefits: [
          'Must be used for qualifying first home purchase',
          'Home must be located in Canada',
          'Must be your principal residence',
          'Written agreement to buy must be entered into by October 1st of the year following withdrawal',
        ],
      },
      {
        title: 'Account Duration',
        description: 'Timeline and closure requirements for your FHSA',
        benefits: [
          'Maximum 15 years from opening',
          'Must close by December 31st of the year you turn 71',
          'Closes automatically after first qualifying withdrawal',
          'Can transfer remaining funds to RRSP or RRIF tax-free',
        ],
      },
    ],
  },
  cta: {
    title: 'Ready to Start Saving for Your First Home?',
    subtitle:
      'Open your FHSA today and take advantage of the best tax benefits available for first-time home buyers.',
    buttonText: 'Open FHSA Account',
    buttonLink: '/contact',
    backgroundImage: '/images/real-estate.jpg',
  },
};
