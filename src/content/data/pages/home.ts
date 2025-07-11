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
    cards: [],
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
