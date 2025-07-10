import type { HomePageContent } from '../../types/pages';

export const homePageContent: HomePageContent = {
  meta: {
    title: 'SecureChoice Insurance - Comprehensive Coverage for Life, Travel & Investment',
    description:
      'Protect what matters most with SecureChoice Insurance. Comprehensive life, travel, disability insurance and investment solutions. Get expert advice and competitive rates.',
    keywords: [
      'insurance',
      'life insurance',
      'travel insurance',
      'super visa',
      'visitors insurance',
      'RESP',
      'RRSP',
      'TFSA',
      'disability insurance',
      'critical illness',
      'Canada insurance',
    ],
  },
  hero: {
    title: 'Secure Your Future with Confidence',
    subtitle:
      'Comprehensive insurance solutions tailored to protect what matters most to you and your family. From life and travel insurance to investment planning - we have you covered.',
    backgroundImage: '/images/family-protection.jpg',
    primaryCTA: {
      text: 'Contact Us',
      link: '/contact',
    },
    secondaryCTA: {
      text: 'Learn More',
      link: '/resources',
    },
  },
  services: {
    title: 'Comprehensive Insurance & Investment Solutions',
    subtitle:
      'Complete protection and investment planning for every stage of life, backed by expert guidance and competitive rates',
    cards: [
      {
        id: 'super-visa-insurance',
        title: 'Super Visa Insurance',
        description:
          'Mandatory medical insurance for parents and grandparents visiting Canada on a Super Visa with a minimum coverage of $100,000.',
        icon: 'ShieldCheck',
        features: [
          'Minimum $100,000 coverage required',
          'Valid for multiple entries',
          'Pre-existing conditions accepted',
          'Emergency medical and hospitalization',
        ],
        link: '/services/super-visa-insurance',
      },
      {
        id: 'visitors-insurance',
        title: 'Visitors Insurance',
        description:
          'Essential travel medical insurance for visitors to Canada. Protect yourself from unexpected medical emergencies during your stay.',
        icon: 'Plane',
        features: [
          'Emergency medical coverage',
          'Prescription drugs coverage',
          'Trip interruption protection',
          'Coverage for family members',
        ],
        link: '/services/visitors-insurance',
      },
      {
        id: 'life-insurance',
        title: 'Life Insurance',
        description:
          "Secure your family's financial future with comprehensive life insurance coverage. Term and permanent life insurance options available.",
        icon: 'HeartHandshake',
        features: [
          'Term and whole life options',
          'Affordable premium rates',
          'Tax-free death benefit',
          'Living benefits available',
        ],
        link: '/services/life-insurance',
      },
      {
        id: 'disability-insurance',
        title: 'Disability Insurance',
        description:
          "Protect your income with disability insurance. Short-term and long-term coverage to maintain your lifestyle if you can't work.",
        icon: 'UserCheck',
        features: [
          'Income replacement up to 85%',
          'Short and long-term options',
          'Own occupation coverage',
          'Cost of living adjustments',
        ],
        link: '/services/disability-insurance',
      },
      {
        id: 'critical-illness-insurance',
        title: 'Critical Illness Insurance',
        description:
          'Financial protection when facing serious illness. Lump sum payment to help with medical costs and lifestyle adjustments.',
        icon: 'Heart',
        features: [
          'Lump sum tax-free benefit',
          'Coverage for 25+ conditions',
          'Return of premium options',
          'Family coverage available',
        ],
        link: '/services/critical-illness-insurance',
      },
      {
        id: 'resp',
        title: 'RESP',
        description:
          "Education savings plan with government grants up to $7,200 per child. Build your child's educational future.",
        icon: 'BookOpen',
        features: [
          'Government grants up to $7,200',
          '20% Canada Education Savings Grant',
          'Tax-deferred growth',
          'Flexible contribution options',
        ],
        link: '/services/resp',
      },
      {
        id: 'rrsp',
        title: 'RRSP',
        description:
          'Retirement savings plan with immediate tax deductions and long-term growth for your secure future.',
        icon: 'PiggyBank',
        features: [
          'Immediate tax deductions',
          'Tax-deferred growth',
          'Retirement income planning',
          'Spousal RRSP options',
        ],
        link: '/services/rrsp',
      },
      {
        id: 'tfsa',
        title: 'TFSA',
        description:
          'Tax-free savings account for flexible savings and investment growth with no tax on withdrawals.',
        icon: 'Star',
        features: [
          'Tax-free growth',
          'Flexible withdrawals',
          'No minimum age requirement',
          'Contribution room carries forward',
        ],
        link: '/services/tfsa',
      },
      {
        id: 'fhsa',
        title: 'FHSA',
        description:
          'First Home Savings Account combining RRSP and TFSA benefits for first-time home buyers.',
        icon: 'Home',
        features: [
          'Tax deductible contributions',
          'Tax-free withdrawals for home',
          'Up to $40,000 contribution room',
          'Designed for first-time buyers',
        ],
        link: '/services/fhsa',
      },
    ],
  },
  trustBadges: {
    title: 'Why Choose SecureChoice Insurance?',
    subtitle:
      'Trusted by thousands of Canadians for our expertise, reliability, and exceptional service',
    badges: [
      {
        title: '20+ Years Experience',
        description:
          'Two decades of serving Canadian families with expert insurance advice and comprehensive coverage solutions.',
        icon: 'Award',
      },
      {
        title: '50+ Insurance Partners',
        description:
          "We work with Canada's top insurance companies to find you the best coverage at the most competitive rates.",
        icon: 'Building2',
      },
      {
        title: '24/7 Claims Support',
        description:
          'Round-the-clock assistance when you need it most. Our claims support team is always here to help.',
        icon: 'Headphones',
      },
      {
        title: '98% Customer Satisfaction',
        description:
          'Our clients consistently rate us highly for service quality, expertise, and competitive pricing.',
        icon: 'Star',
      },
    ],
  },
  about: {
    title: 'Your Trusted Insurance Partner',
    subtitle: 'Professional guidance you can rely on',
    description:
      "At SecureChoice Insurance, we understand that choosing the right insurance can be overwhelming. That's why we've dedicated ourselves to providing clear, honest advice and comprehensive coverage options tailored to your unique needs.",
    image: '/images/about-team.jpg',
    features: [
      'Licensed insurance professionals',
      'Personalized coverage recommendations',
      'Competitive rates from top insurers',
      'Ongoing policy management and support',
    ],
    cta: {
      text: 'Contact Us',
      link: '/contact',
    },
  },
};
