import React from 'react';
import { motion } from 'framer-motion';
import { useHomePageContent } from '../content/hooks/usePageContent';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import ContentGrid from '../components/ContentGrid';
import type { HomeServiceCard } from '../content/types/pages';

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
    { name: 'Manulife', logo: 'https://www.manulife.ca/etc/designs/manulife-ca/img/logo.svg' },
    { name: 'Sun Life', logo: 'https://www.sunlife.ca/etc/designs/sunlife-external/img/sl-logo-en.svg' },
    { name: 'Canada Life', logo: 'https://www.canadalife.com/content/dam/canadalife/images/logos/canada-life-logo.png' },
    { name: 'RBC Insurance', logo: 'https://www.rbcinsurance.com/etc/designs/personal-insurance/img/common/logos/rbc-insurance.svg' },
    { name: 'Desjardins', logo: 'https://www.desjardins.com/ressources/images/logo-desjardins.svg' },
    { name: 'BMO Insurance', logo: 'https://www.bmo.com/etc/designs/bmo/images/logos/bmo-logo-en.svg' },
    { name: 'TD Insurance', logo: 'https://www.tdinsurance.com/etc/designs/meloche-monnex/images/logos/td-insurance-logo-en.svg' },
    { name: 'Scotiabank', logo: 'https://www.scotiabank.com/etc/designs/scotiabank/images/logos/scotiabank-logo.svg' },
    { name: 'Intact Insurance', logo: 'https://www.intact.ca/etc/designs/intact-financial-corp/public/img/logos/intact-logo.svg' },
    { name: 'Aviva', logo: 'https://www.avivacanada.com/etc/designs/aviva-ca/img/logos/aviva-logo.svg' },
    { name: 'Industrial Alliance', logo: 'https://ia.ca/etc/designs/ia-redesign/img/logo-ia-en.svg' },
    { name: 'Wawanesa', logo: 'https://www.wawanesa.com/etc/designs/wawanesa/img/logos/wawanesa-logo.svg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImg={hero.backgroundImage}
        ctaText={hero.primaryCTA.text}
        ctaLink={hero.primaryCTA.link}
        height="lg"
        overlay="heavy"
      />

      {/* Services & Investment Solutions Section */}
      <PageContainer className="py-16 lg:py-24">
        <SectionHeader
          title={services.title}
          subtitle={services.subtitle}
          textAlign="center"
          className="mb-16"
        />

        {/* Remove stagger animations for better performance */}
        <ContentGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg" stagger={false}>
          {services.cards.map((service: HomeServiceCard) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              link={service.link}
              variant="default"
            />
          ))}
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
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
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
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
                      <div className="flex items-center">
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
                      </div>
                      <div className="flex items-center">
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
                      </div>
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
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-xs font-medium text-gray-600 text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-xs font-medium text-gray-600 text-center">
                    {partner.name}
                  </span>
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
