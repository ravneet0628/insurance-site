import type { AboutPageContent } from '../../types/pages';

export const aboutPageContent: AboutPageContent = {
  meta: {
    title: 'About SecureChoice Insurance | Our Story & Team',
    description:
      "Learn about SecureChoice Insurance's 20+ year journey providing comprehensive insurance solutions to Canadian families and businesses. Meet our expert team.",
    keywords: [
      'about SecureChoice',
      'insurance company',
      'Canadian insurance',
      'insurance experts',
      'company history',
    ],
  },

  hero: {
    title: 'About SecureChoice Insurance',
    subtitle:
      'Over two decades of experience protecting Canadian families and businesses with comprehensive insurance solutions and exceptional service.',
    backgroundImage: '/images/office-building.jpg',
    primaryCTA: {
      text: 'Contact Us',
      link: '/contact',
    },
  },

  mission: {
    title: 'Our Mission',
    content:
      'To provide comprehensive, affordable insurance solutions that give our clients peace of mind and financial security. We are committed to building lasting relationships through exceptional service, expert guidance, and unwavering support when you need it most.',
    icon: 'Compass',
  },

  vision: {
    title: 'Our Vision',
    content:
      "To be Canada's most trusted insurance brokerage, known for our personalized approach, innovative solutions, and commitment to protecting families and businesses. We envision a future where everyone has access to the right insurance coverage at the right price.",
    icon: 'Focus',
  },

  timeline: {
    title: 'Our Journey',
    items: [
      {
        year: '2004',
        title: 'Company Founded',
        description:
          'SecureChoice Insurance was established with a vision to provide personalized insurance solutions.',
      },
      {
        year: '2008',
        title: 'Expanded Services',
        description:
          'Added life, disability, and critical illness insurance to our growing portfolio of services.',
      },
      {
        year: '2012',
        title: 'Digital Innovation',
        description:
          'Launched our online platform for faster quotes and streamlined customer service.',
      },
      {
        year: '2016',
        title: 'Investment Services',
        description:
          'Introduced RESP, RRSP, and TFSA investment services to help clients build wealth.',
      },
      {
        year: '2020',
        title: 'Enhanced Support',
        description:
          'Implemented 24/7 customer support and expanded our claims assistance services.',
      },
      {
        year: '2024',
        title: 'Continued Growth',
        description:
          'Serving over 50,000 customers across Canada with comprehensive insurance solutions.',
      },
    ],
  },

  team: {
    title: 'Meet Our Expert Team',
    subtitle:
      'Our experienced professionals are here to help you find the right insurance solutions.',
    members: [
      {
        name: 'Sarah Johnson',
        position: 'Senior Insurance Advisor',
        bio: '15+ years experience in life and health insurance',
        image: '/images/team/sarah-johnson.jpg',
      },
      {
        name: 'Michael Chen',
        position: 'Investment Specialist',
        bio: 'Expert in RESP, RRSP, and TFSA planning',
        image: '/images/team/michael-chen.jpg',
      },
      {
        name: 'Jennifer Davis',
        position: 'Claims Manager',
        bio: 'Dedicated to helping clients through claims process',
        image: '/images/team/jennifer-davis.jpg',
      },
      {
        name: 'Robert Wilson',
        position: 'Travel Insurance Expert',
        bio: 'Specialist in Super Visa and Visitors Insurance',
        image: '/images/team/robert-wilson.jpg',
      },
    ],
  },
};
