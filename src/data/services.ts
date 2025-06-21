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
    description: 'Mandatory insurance for parents or grandparents seeking a Super Visa for Canada.',
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
    description: 'Whether it is you or your family or friends visiting Canada, always consider purchasing an all-encompassing visitors insurance plan.',
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
    description: 'Mishappenings are never intentional and can happen at any time. Life Insurance can be a safety net to keep your mind at ease when you least expect it.',
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
    description: 'An accident is more financially disastrous than a disability. If you are disabled, you might not be able to work, resulting in no or less income.',
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
    icon: 'Cross',
    slug: 'disability-insurance'
  },
  {
    id: 'critical-illness',
    title: 'Critical Illness Insurance',
    description: 'Offers a substantial amount of money to the insured client who is diagnosed with any critical illness.',
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
    description: 'You can consider RESP as a long-term investment strategy that can help your children with the expenses of higher education in Canada.',
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
    description: 'Short for Registered Retirement Savings Plan, this policy is an investment vehicle for both employees and self-employed individuals in Canada.',
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
    description: 'Drug and Dental Plan benefits generally include dental care, eye care, prescription drugs, semi-private hospital room coverage.',
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
    description: 'A federal government tax-sheltered savings program intended to encourage Canadians to save and invest for short or long term goals.',
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

 