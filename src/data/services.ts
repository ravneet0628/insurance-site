export interface InsuranceProduct {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  slug: string;
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'super-visa',
    title: 'Super Visa Insurance',
    description: 'Mandatory insurance coverage for parents or grandparents seeking a Super Visa for Canada. Meets all government requirements.',
    features: [
      'Meets Government of Canada minimum requirements',
      'Coverage from $100,000 to $500,000',
      'Emergency medical expenses coverage',
      'Hospital and physician expenses',
      'Emergency dental coverage up to $3,000',
      'Prescription drug coverage',
      'Coverage for COVID-19 related expenses',
      'Repatriation coverage'
    ],
    icon: 'Shield',
    slug: 'super-visa-insurance'
  },
  {
    id: 'visitors',
    title: 'Visitors Insurance',
    description: 'Comprehensive emergency medical coverage for visitors to Canada. Protects against unexpected medical expenses during your stay.',
    features: [
      'Emergency medical coverage',
      'Trip interruption and cancellation',
      'Emergency dental coverage',
      'Prescription drug coverage',
      'Medical equipment coverage',
      'Emergency transportation',
      'Coverage for pre-existing conditions (stable)',
      'Hospital accommodation'
    ],
    icon: 'Users',
    slug: 'visitors-insurance'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Financial protection for your loved ones when they need it most. Term, whole, and universal life insurance options available.',
    features: [
      'Term life insurance options',
      'Whole life insurance',
      'Universal life insurance',
      'Accidental death benefit',
      'Waiver of premium benefit',
      'Child term rider',
      'Convertibility options',
      'No medical exam options available'
    ],
    icon: 'Heart',
    slug: 'life-insurance'
  },
  {
    id: 'disability',
    title: 'Disability Insurance',
    description: 'Income protection when illness or injury prevents you from working. Short-term and long-term coverage options available.',
    features: [
      'Short-term disability coverage',
      'Long-term disability coverage',
      'Partial disability benefits',
      'Residual benefits',
      'Cost of living adjustments',
      'Future increase options',
      'Return to work incentives',
      'Workplace and non-workplace coverage'
    ],
    icon: 'Shield',
    slug: 'disability-insurance'
  },
  {
    id: 'critical-illness',
    title: 'Critical Illness Insurance',
    description: 'Lump sum payment upon diagnosis of covered critical illnesses. Provides financial support for cancer, heart attack, stroke, and more.',
    features: [
      'Coverage for 25+ critical illnesses',
      'Cancer coverage',
      'Heart attack and stroke coverage',
      'Kidney failure coverage',
      'Multiple sclerosis coverage',
      'Return of premium option',
      'Children\'s critical illness coverage',
      'Partial payment for less severe conditions'
    ],
    icon: 'Activity',
    slug: 'critical-illness-insurance'
  },
  {
    id: 'resp',
    title: 'RESP',
    description: 'Education savings plan with government grants and tax-deferred growth. Helps fund your children\'s post-secondary education costs.',
    features: [
      'Government grants and bonds',
      'Canada Education Savings Grant (CESG)',
      'Canada Learning Bond (CLB)',
      'Tax-deferred growth',
      'Flexible contribution options',
      'Wide range of investment options',
      'Family plan options',
      'Beneficiary substitution allowed'
    ],
    icon: 'Award',
    slug: 'resp'
  },
  {
    id: 'rrsp',
    title: 'RRSP',
    description: 'Registered Retirement Savings Plan for tax-deferred retirement savings. Reduces current taxes while building your retirement fund.',
    features: [
      'Tax-deductible contributions',
      'Tax-deferred growth',
      'Spousal RRSP options',
      'Home Buyers\' Plan (HBP)',
      'Lifelong Learning Plan (LLP)',
      'Wide range of investment options',
      'Contribution room carry-forward',
      'Automatic conversion to RRIF at 71'
    ],
    icon: 'Clock',
    slug: 'rrsp'
  },
  {
    id: 'drug-dental',
    title: 'Drug & Dental Insurance',
    description: 'Comprehensive health benefits coverage including prescription drugs, dental care, vision care, and paramedical services.',
    features: [
      'Prescription drug coverage',
      'Dental care coverage',
      'Eye care and vision coverage',
      'Paramedical services',
      'Semi-private hospital room',
      'Medical equipment coverage',
      'Travel coverage',
      'Flexible benefit spending accounts'
    ],
    icon: 'CheckCircle',
    slug: 'drug-dental-insurance'
  },
  {
    id: 'tfsa',
    title: 'TFSA',
    description: 'Tax-Free Savings Account for flexible, tax-free growth on your savings. Ideal for short-term and long-term financial goals.',
    features: [
      'Tax-free growth and withdrawals',
      'Flexible contribution and withdrawal',
      'Wide range of investment options',
      'Re-contribution of withdrawn amounts',
      'No minimum withdrawal requirements',
      'No age limit for contributions',
      'Beneficiary designation allowed',
      'Protection from creditors in most provinces'
    ],
    icon: 'Wallet',
    slug: 'tfsa'
  }
];

 