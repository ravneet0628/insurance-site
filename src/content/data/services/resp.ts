import type { ServiceContent } from '../../types/services';

export const respContent: ServiceContent = {
  meta: {
    title: 'RESP | Registered Education Savings Plan for Your Child\'s Future',
    description: 'Save for your child\'s education with RESP. Get government grants up to $7,200, tax-deferred growth, and flexible investment options for post-secondary education.',
    keywords: ['RESP', 'education savings plan', 'government grants', 'CESG', 'children education savings', 'post-secondary funding'],
  },
  hero: {
    title: 'RESP - Education Savings Plan',
    subtitle: 'Invest in your child\'s future with government grants and tax-deferred growth. Build education savings that grow with your family\'s dreams.',
    backgroundImage: '/images/family-protection.jpg',
    ctaText: 'Start Saving Today',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Invest in Education, Invest in the Future',
    content: 'A Registered Education Savings Plan (RESP) is one of the best ways to save for your child\'s post-secondary education. With government grants that can add thousands to your savings and tax-deferred growth, every dollar you contribute works harder for your child\'s future.',
    highlights: [
      'Government grants up to $7,200 per child',
      '20% Canada Education Savings Grant on first $2,500 annually',
      'Tax-deferred investment growth',
      'Flexible contribution and withdrawal options'
    ],
  },
  features: {
    title: 'Maximize Your Education Savings',
    subtitle: 'Take advantage of government incentives and investment growth',
    features: [
      {
        icon: 'GraduationCap',
        title: 'Government Grants & Bonds',
        description: 'Receive substantial government contributions to boost your savings.',
        details: [
          'Canada Education Savings Grant (CESG) - 20% match',
          'Additional CESG for lower-income families up to 40%',
          'Canada Learning Bond up to $2,000',
          'Provincial education savings incentives'
        ],
      },
      {
        icon: 'TrendingUp',
        title: 'Tax-Deferred Growth',
        description: 'Investment growth accumulates tax-free until withdrawal for education.',
        details: [
          'No tax on investment growth while in plan',
          'Wide range of investment options available',
          'Professional investment management available',
          'Self-directed investment options'
        ],
      },
      {
        icon: 'BookOpen',
        title: 'Flexible Family Options',
        description: 'Plans designed to work for families of all sizes and situations.',
        details: [
          'Individual plans for single beneficiaries',
          'Family plans for multiple children',
          'Beneficiary substitution within family',
          'No annual contribution limits'
        ],
      },
    ],
  },
  details: {
    title: 'RESP Benefits & Qualifying Programs',
    content: 'RESP funds can be used for a wide variety of post-secondary education options, giving your child flexibility in their educational choices.',
    items: [
      {
        title: 'Post-Secondary Programs Covered',
        description: 'Wide range of qualifying educational institutions and programs',
        benefits: [
          'Universities and colleges in Canada and abroad',
          'Trade schools and apprenticeship programs',
          'Part-time and full-time studies',
          'Professional certification programs'
        ],
      },
      {
        title: 'How RESP Works',
        description: 'Simple process from opening to using your education savings',
        benefits: [
          'Open RESP and make contributions',
          'Government adds 20% through CESG',
          'Investments grow tax-deferred over time',
          'Withdraw funds for qualified education expenses'
        ],
      },
      {
        title: 'Tax Benefits',
        description: 'Maximize your tax efficiency with RESP strategies',
        benefits: [
          'Educational Assistance Payments taxed in student\'s hands',
          'Typically lower tax rate for students',
          'Return of contributions is tax-free',
          'Accumulated Income Payments if not used for education'
        ],
      },
    ],
  },
  cta: {
    title: 'Give Your Child the Gift of Education',
    subtitle: 'Start saving today and watch government grants and compound growth build your child\'s education fund.',
    buttonText: 'Open RESP Account',
    buttonLink: '/quote',
    backgroundImage: '/images/family-protection.jpg',
  },
}; 