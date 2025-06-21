import type { ContactPageContent } from '../../types/pages';

export const contactPageContent: ContactPageContent = {
  meta: {
    title: "Contact Us - SecureChoice Insurance | Get in Touch",
    description: "Contact SecureChoice Insurance in Toronto. Get quotes, file claims, or ask questions. Office location, phone numbers, email, and business hours.",
    keywords: ["contact SecureChoice", "insurance office Toronto", "insurance quotes", "claims contact", "insurance help"]
  },

  hero: {
    title: "Contact SecureChoice",
    subtitle: "We're here to help with all your insurance needs. Get in touch with our experienced team today.",
    backgroundImage: "/images/office-building.jpg",
    primaryCTA: {
      text: "Get Free Quote",
      link: "/quote"
    }
  },

  contactInfo: {
    title: "Get In Touch",
    subtitle: "Multiple ways to reach us. Choose what works best for you.",
    office: {
      title: "Office Address",
      address: [
        "123 Insurance Street",
        "Toronto, ON M5V 3A8", 
        "Canada"
      ],
      coordinates: [43.6532, -79.3832]
    },
    phone: {
      title: "Phone Numbers",
      numbers: [
        {
          label: "Main Office",
          value: "(123) 456-7890",
          href: "tel:+1234567890"
        },
        {
          label: "Claims",
          value: "(123) 456-7891", 
          href: "tel:+1234567891"
        },
        {
          label: "Emergency",
          value: "(123) 456-7892",
          href: "tel:+1234567892"
        }
      ]
    },
    email: {
      title: "Email Addresses",
      addresses: [
        {
          label: "General Inquiries",
          value: "info@securechoice.com",
          href: "mailto:info@securechoice.com"
        },
        {
          label: "Quotes",
          value: "quotes@securechoice.com",
          href: "mailto:quotes@securechoice.com"
        },
        {
          label: "Claims", 
          value: "claims@securechoice.com",
          href: "mailto:claims@securechoice.com"
        }
      ]
    },
    hours: {
      title: "Business Hours",
      schedule: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM", 
        "Sunday: Closed",
        "Emergency Claims: 24/7"
      ]
    }
  },

  form: {
    title: "Send Us A Message",
    subtitle: "Have a question or need a quote? Fill out the form below and we'll get back to you within 24 hours.",
    successMessage: "Thank you for contacting us! We'll respond to your message within 24 hours.",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true
      },
      email: {
        label: "Email Address", 
        placeholder: "Enter your email address",
        required: true
      },
      message: {
        label: "Message",
        placeholder: "Tell us how we can help you...",
        required: true
      }
    }
  }
}; 