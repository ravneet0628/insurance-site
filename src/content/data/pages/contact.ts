import type { ContactPageContent } from '../../types/pages';

export const contactPageContent: ContactPageContent = {
  meta: {
    title: 'Contact Us - Top Trust Insurance | Get in Touch',
    description:
      'Contact licensed insurance advisor Sukhveer Singh at Top Trust Insurance. Get quotes, ask questions, or discuss life, travel, and investment planning.',
    keywords: [
      'contact Top Trust',
      'Sukhveer Singh advisor',
      'insurance advisor Ontario',
      'Top Trust Insurance',
      'insurance quotes',
      'insurance help',
    ],
  },

  hero: {
    title: 'Contact Top Trust',
    subtitle:
      "We're here to help with all your insurance and financial security needs. Reach out to advisor Sukhveer Singh today.",
    backgroundImage: '/images/office-building.jpg',
    primaryCTA: {
      text: 'Our Services',
      link: '/services',
    },
  },

  contactInfo: {
    title: 'Get In Touch',
    subtitle: 'Reach out to us directly via phone or email.',
    office: {
      title: 'Office',
      address: [],
      coordinates: [0, 0],
    },
    phone: {
      title: 'Phone',
      numbers: [
        {
          label: 'Sukhveer Singh',
          value: '(905) 961-0050',
          href: 'tel:9059610050',
        },
      ],
    },
    email: {
      title: 'Email',
      addresses: [
        {
          label: 'Sukhveer Singh',
          value: 'sukhvirsingh31@yahoo.com',
          href: 'mailto:sukhvirsingh31@yahoo.com',
        },
      ],
    },
    hours: {
      title: 'Business Hours',
      schedule: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: By Appointment',
        'Sunday: Closed',
      ],
    },
  },

  form: {
    title: 'Send Us A Message',
    subtitle:
      "Have a question or need a quote? Fill out the form below and we'll get back to you within 24 hours.",
    successMessage: "Thank you for contacting us! We'll respond to your message within 24 hours.",
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true,
      },
      email: {
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true,
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us how we can help you...',
        required: true,
      },
    },
  },
};
