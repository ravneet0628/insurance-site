export interface InsuranceProduct {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}



export const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Comprehensive vehicle protection with competitive rates and excellent customer service.',
    features: [
      'Collision and comprehensive coverage',
      '24/7 claims support',
      'Roadside assistance',
      'Rental car coverage',
      'Glass replacement',
      'Accident forgiveness'
    ],
    icon: 'Car'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Protect your home and belongings with our comprehensive homeowners insurance policies.',
    features: [
      'Dwelling protection',
      'Personal property coverage',
      'Liability protection',
      'Additional living expenses',
      'Water damage coverage',
      'Home-based business coverage'
    ],
    icon: 'Home'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with our flexible life insurance options.',
    features: [
      'Term and whole life options',
      'Critical illness coverage',
      'Disability insurance',
      'Accidental death benefit',
      'Child coverage',
      'No medical exam options'
    ],
    icon: 'Heart'
  },
  {
    id: 'commercial',
    title: 'Commercial Insurance',
    description: 'Comprehensive business protection for companies of all sizes and industries.',
    features: [
      'General liability',
      'Professional liability',
      'Commercial property',
      'Workers compensation',
      'Cyber liability',
      'Business interruption'
    ],
    icon: 'Building'
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    description: 'Travel with confidence knowing you\'re protected against unexpected events.',
    features: [
      'Trip cancellation',
      'Medical emergencies',
      'Baggage protection',
      'Flight delays',
      'Emergency evacuation',
      'Pre-existing conditions'
    ],
    icon: 'Plane'
  }
];

 