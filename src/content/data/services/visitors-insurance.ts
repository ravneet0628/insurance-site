import type { ServiceContent } from '../../types/services';

export const visitorsInsuranceContent: ServiceContent = {
  meta: {
    title: 'Visitors Insurance | Travel Medical Coverage for Canada',
    description: 'Comprehensive visitors insurance for international travelers to Canada and Canadians traveling abroad. Emergency medical coverage, trip protection, and more.',
    keywords: ['visitors insurance', 'travel medical insurance', 'canada travel insurance', 'international visitors', 'emergency medical coverage'],
  },
  hero: {
    title: 'Visitors Insurance',
    subtitle: 'Comprehensive travel medical insurance for visitors to Canada and Canadians traveling abroad. Protect yourself from unexpected medical emergencies.',
    backgroundImage: '/images/hero-bg.jpg',
    ctaText: 'Get Travel Quote',
    ctaLink: '/quote',
  },
  overview: {
    title: 'Essential Protection for International Travel',
    content: 'Visitors Insurance provides crucial medical coverage for unexpected health emergencies during international travel. Whether you\'re visiting Canada or traveling abroad, our comprehensive plans protect you from high medical costs and ensure access to quality healthcare.',
    highlights: [
      'Emergency medical coverage up to $5,000,000',
      'Coverage for pre-existing conditions (stable)',
      'Trip interruption and cancellation benefits',
      '24/7 worldwide emergency assistance'
    ],
  },
  features: {
    title: 'Comprehensive Travel Protection',
    subtitle: 'Coverage options for every type of traveler',
    features: [
      {
        icon: 'Zap',
        title: 'Emergency Medical Coverage',
        description: 'Comprehensive coverage for unexpected medical emergencies and treatments.',
        details: [
          'Hospital and physician expenses',
          'Emergency surgery and treatments',
          'Prescription medications',
          'Medical equipment and supplies'
        ],
      },
      {
        icon: 'Eye',
        title: 'Additional Health Benefits',
        description: 'Extended coverage for dental, vision, and paramedical services.',
        details: [
          'Emergency dental coverage up to $3,000',
          'Vision care for eye injuries',
          'Physiotherapy and chiropractic care',
          'Ambulance and emergency transportation'
        ],
      },
      {
        icon: 'ArrowRight',
        title: 'Travel Benefits',
        description: 'Protection for travel-related emergencies and disruptions.',
        details: [
          'Trip interruption coverage',
          'Emergency evacuation and repatriation',
          'Accommodation for family members',
          'Return of mortal remains coverage'
        ],
      },
    ],
  },
  details: {
    title: 'Who Needs Visitors Insurance?',
    content: 'Visitors Insurance is essential for anyone traveling internationally, whether visiting Canada or traveling abroad from Canada.',
    items: [
      {
        title: 'International Visitors to Canada',
        description: 'Foreign nationals visiting Canada for tourism, business, or family visits',
        benefits: [
          'Coverage not provided by home country insurance',
          'Protection against Canadian healthcare costs',
          'Peace of mind during extended visits',
          'Required for some visa applications'
        ],
      },
      {
        title: 'Canadians Traveling Abroad',
        description: 'Canadian residents traveling outside their home province or internationally',
        benefits: [
          'Coverage beyond provincial health plans',
          'Protection in countries with expensive healthcare',
          'Emergency evacuation back to Canada',
          'Coverage for trip cancellation and interruption'
        ],
      },
      {
        title: 'New Immigrants & Students',
        description: 'New immigrants and international students waiting for coverage',
        benefits: [
          'Bridge coverage until provincial health begins',
          'Protection for temporary workers',
          'Coverage for international students',
          'Family coverage options available'
        ],
      },
    ],
  },
  cta: {
    title: 'Travel with Confidence',
    subtitle: 'Don\'t let unexpected medical emergencies ruin your trip. Get comprehensive visitors insurance coverage today.',
    buttonText: 'Get Travel Insurance Quote',
    buttonLink: '/quote',
    backgroundImage: '/images/hero-bg.jpg',
  },
}; 