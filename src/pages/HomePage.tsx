import React from 'react';
import { motion } from 'framer-motion';
import { useHomePageContent } from '../content/hooks/usePageContent';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import ContentGrid from '../components/ContentGrid';
import { allServicesContent } from '../content/data/services';

const serviceDetailsMap: { [key: string]: { icon: string; features: string[] } } = {
  'super-visa-insurance': {
    icon: 'ShieldCheck',
    features: [
      'Minimum $100,000 coverage required',
      'Valid for multiple entries',
      'Pre-existing conditions accepted',
    ],
  },
  'visitors-insurance': {
    icon: 'Plane',
    features: [
      'Emergency medical coverage',
      'Prescription drugs coverage',
      'Trip interruption protection',
    ],
  },
  'life-insurance': {
    icon: 'HeartHandshake',
    features: ['Term and whole life options', 'Affordable premium rates', 'Tax-free death benefit'],
  },
  'disability-insurance': {
    icon: 'UserCheck',
    features: [
      'Income replacement up to 85%',
      'Short and long-term options',
      'Own occupation coverage',
    ],
  },
  'critical-illness-insurance': {
    icon: 'Heart',
    features: [
      'Lump sum tax-free benefit',
      'Coverage for 25+ conditions',
      'Return of premium options',
    ],
  },
  resp: {
    icon: 'BookOpen',
    features: [
      'Government grants up to $7,200',
      '20% Canada Education Savings Grant',
      'Tax-deferred growth',
    ],
  },
  rrsp: {
    icon: 'PiggyBank',
    features: ['Immediate tax deductions', 'Tax-deferred growth', 'Retirement income planning'],
  },
  tfsa: {
    icon: 'ArrowUpRight',
    features: ['Tax-free growth', 'Flexible withdrawals', 'No minimum age requirement'],
  },
  fhsa: {
    icon: 'Home',
    features: [
      'Tax deductible contributions',
      'Tax-free withdrawals for home',
      'Up to $40,000 contribution room',
    ],
  },
};

/**
 * HomePage component - Main landing page with hero, services, stats, and features
 */
const HomePage: React.FC = () => {
  const content = useHomePageContent();
  const { hero, services, about } = content;

  // Use about section for CTA data
  const cta = {
    title: 'Ready to Get Protected?',
    subtitle:
      'Join thousands of satisfied customers who trust SecureChoice Insurance for their protection needs.',
    primaryButton: {
      text: 'Contact Us',
      href: '/contact',
    },
    secondaryButton: {
      text: 'Learn More',
      href: '/resources',
    },
  };

  // Partner companies with logos
  const partners = [
    { name: 'Manulife', logo: '/images/partners/manulife.png' },
    { name: 'Sun Life', logo: '/images/partners/sunlife.png' },
    { name: 'Canada Life', logo: '/images/partners/canadalife.png' },
    { name: 'Desjardins', logo: '/images/partners/desjardins.png' },
    { name: 'BMO Insurance', logo: '/images/partners/bmo.gif' },
    { name: 'Industrial Alliance', logo: '/images/partners/ia.gif' },
    { name: 'Equitable Life', logo: '/images/partners/equitable.png' },
    { name: 'Foresters Financial', logo: '/images/partners/foresters.svg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImg={hero.backgroundImage}
        primaryCTA={{ text: 'Contact Us', link: '/contact' }}
        secondaryCTA={{ text: 'View Services', scrollTo: 'services-section' }}
        height="lg"
        overlay="light"
      />

      {/* Services & Investment Solutions Section */}
      <PageContainer id="services-section" className="py-16 lg:py-24">
        <SectionHeader
          title={services.title}
          subtitle={services.subtitle}
          textAlign="center"
          className="mb-16"
        />

        {/* Remove stagger animations for better performance */}
        <ContentGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg" stagger={false}>
          {allServicesContent.map(service => {
            const details = serviceDetailsMap[service.slug];
            return (
              <ServiceCard
                key={service.slug}
                title={service.hero.title}
                description={service.overview?.highlights?.[0] ?? ''}
                icon={details?.icon ?? 'ShieldCheck'}
                features={details?.features ?? []}
                link={`/services/${service.slug}`}
                variant="default"
              />
            );
          })}
        </ContentGrid>
      </PageContainer>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                title={about.title}
                subtitle={about.subtitle}
                textAlign="left"
                className="mb-6"
              />

              <p className="text-lg text-gray-600 leading-relaxed mb-8">{about.description}</p>

              {/* Simplified feature list without stagger animation */}
              <div className="space-y-3 mb-8">
                {about.features.map((feature: string) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href={about.cta.link}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {about.cta.text}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  {/* Bio */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Expert Insurance Advisor
                  </h4>
                  <p className="text-blue-600 font-semibold mb-4">20+ Years Experience</p>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated team member specializes in providing comprehensive insurance
                    solutions tailored to your unique needs. With over two decades of experience in
                    the Canadian insurance industry, we ensure you get the best coverage at
                    competitive rates.
                  </p>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200 w-full">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05, color: '#2563eb' }}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Licensed Professional
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05, color: '#2563eb' }}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Certified Advisor
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* Enhanced Partners Banner with Moving Slideshow */}
      <section className="py-12 bg-white border-t border-gray-200 overflow-hidden">
        <PageContainer>
          <div className="text-center mb-8">
            <h3 className="text-lg font-ubuntu font-semibold text-gray-900 mb-2">
              Trusted Partners
            </h3>
            <p className="text-sm text-gray-600">
              We work with Canada's leading insurance companies
            </p>
          </div>

          {/* Animated Logo Slideshow */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-slide-left">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 h-16 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicated set for seamless animation */}
              {partners.map((partner, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex-shrink-0 w-36 h-16 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        primaryCTA={{
          text: cta.primaryButton.text,
          href: cta.primaryButton.href,
        }}
        secondaryCTA={{
          text: cta.secondaryButton.text,
          href: cta.secondaryButton.href,
        }}
        backgroundImage="/images/handshake.jpg"
      />
    </div>
  );
};

export default HomePage;
