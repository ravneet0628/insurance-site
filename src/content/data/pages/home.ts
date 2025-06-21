import type { HomePageContent } from '../../types/pages';

export const homePageContent: HomePageContent = {
  meta: {
    title: 'SecureChoice Insurance | Comprehensive Coverage Solutions',
    description: 'SecureChoice Insurance provides comprehensive insurance solutions for auto, home, life, commercial, and travel coverage with expert guidance and competitive rates.',
    keywords: ['insurance', 'auto insurance', 'home insurance', 'life insurance', 'commercial insurance', 'travel insurance', 'insurance broker'],
  },
  hero: {
    title: 'Your Trusted Insurance Partner',
    subtitle: 'Comprehensive coverage solutions tailored to protect what matters most to you and your family. Get expert guidance and competitive rates.',
    primaryCTA: {
      text: 'Get Free Quote',
      link: '/quote',
    },
    secondaryCTA: {
      text: 'Learn More',
      link: '/about',
    },
    backgroundImage: '/images/hero-bg.jpg',
  },
  services: {
    title: 'Comprehensive Insurance Solutions',
    subtitle: 'Discover our range of insurance products designed to protect your assets, family, and future.',
    cards: [
      {
        id: 'super-visa',
        title: 'Super Visa Insurance',
        description: 'Mandatory insurance coverage for parents or grandparents seeking a Super Visa for Canada.',
        icon: 'Shield',
        link: '/services/super-visa-insurance',
        features: [
          'Meets Government requirements',
          'Coverage from $100,000+',
          'Emergency medical expenses',
          'COVID-19 coverage included'
        ],
      },
      {
        id: 'visitors',
        title: 'Visitors Insurance',
        description: 'Comprehensive emergency medical coverage for visitors to Canada and Canadians traveling abroad.',
        icon: 'Users',
        link: '/services/visitors-insurance',
        features: [
          'Emergency medical coverage',
          'Trip interruption benefits',
          'Pre-existing conditions covered',
          'Worldwide emergency assistance'
        ],
      },
      {
        id: 'life',
        title: 'Life Insurance',
        description: 'Financial protection for your loved ones when they need it most. Term, whole, and universal options.',
        icon: 'Heart',
        link: '/services/life-insurance',
        features: [
          'Term and permanent options',
          'Tax-free death benefits',
          'Flexible coverage amounts',
          'Fast approval process'
        ],
      },
      {
        id: 'disability',
        title: 'Disability Insurance',
        description: 'Income protection when illness or injury prevents you from working.',
        icon: 'Shield',
        link: '/services/disability-insurance',
        features: [
          'Replace 60-85% of income',
          'Short and long-term options',
          'Tax-free benefits',
          'Return to work incentives'
        ],
      },
      {
        id: 'critical-illness',
        title: 'Critical Illness Insurance',
        description: 'Lump sum payment upon diagnosis of covered critical illnesses like cancer, heart attack, stroke.',
        icon: 'Activity',
        link: '/services/critical-illness-insurance',
        features: [
          'Coverage for 25+ conditions',
          'Tax-free lump sum payment',
          'Use benefits however needed',
          'Return of premium options'
        ],
      },
      {
        id: 'resp',
        title: 'RESP',
        description: 'Education savings plan with government grants and tax-deferred growth for your children.',
        icon: 'Award',
        link: '/services/resp',
        features: [
          'Government grants up to $7,200',
          'Tax-deferred growth',
          'Flexible investment options',
          'No annual contribution limits'
        ],
      },
      {
        id: 'rrsp',
        title: 'RRSP',
        description: 'Registered Retirement Savings Plan for tax-deferred retirement savings and wealth building.',
        icon: 'Clock',
        link: '/services/rrsp',
        features: [
          'Tax-deductible contributions',
          'Tax-deferred growth',
          'Home Buyers\' Plan access',
          'Professional management available'
        ],
      },
      {
        id: 'drug-dental',
        title: 'Drug & Dental Insurance',
        description: 'Comprehensive health benefits including prescription drugs, dental care, and vision coverage.',
        icon: 'CheckCircle',
        link: '/services/drug-dental-insurance',
        features: [
          'Prescription drug coverage',
          'Dental and vision care',
          'Paramedical services',
          'Flexible spending accounts'
        ],
      },
      {
        id: 'tfsa',
        title: 'TFSA',
        description: 'Tax-Free Savings Account for flexible, tax-free growth on your savings and investments.',
        icon: 'Wallet',
        link: '/services/tfsa',
        features: [
          'Tax-free growth and withdrawals',
          'Flexible contributions',
          'Wide investment options',
          'No age limit for contributions'
        ],
      },
    ],
  },
  trustBadges: {
    title: 'Why Choose SecureChoice?',
    badges: [
      {
        icon: 'Award',
        title: 'Licensed Professionals',
        description: 'Our experienced agents provide expert guidance for all your insurance needs.',
      },
      {
        icon: 'DollarSign',
        title: 'Competitive Rates',
        description: 'We work with top-rated insurers to find you the best coverage at competitive prices.',
      },
      {
        icon: 'Clock',
        title: '24/7 Support',
        description: 'Round-the-clock claims support and customer service when you need it most.',
      },
      {
        icon: 'Shield',
        title: 'Comprehensive Coverage',
        description: 'Wide range of insurance products to protect all aspects of your life and business.',
      },
    ],
  },
  about: {
    title: 'About SecureChoice Insurance',
    content: 'With over two decades of experience in the insurance industry, SecureChoice Insurance has been providing comprehensive coverage solutions to families and businesses across Canada. Our commitment to exceptional service, expert guidance, and competitive rates has made us a trusted partner for thousands of satisfied clients.',
    highlights: [
      'Over 20 years of industry experience',
      'Thousands of satisfied clients served',
      'Comprehensive range of insurance products',
      'Expert guidance and personalized service'
    ],
    ctaText: 'Learn More About Us',
    ctaLink: '/about',
  },
}; 