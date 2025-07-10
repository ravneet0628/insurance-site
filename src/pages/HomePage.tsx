import React from 'react';
import { motion } from 'framer-motion';
import { useHomePageContent, useAboutPageContent } from '../content/hooks/usePageContent';
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
  const aboutContent = useAboutPageContent();
  const { hero, services, about } = content;
  const { mission, vision } = aboutContent;

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

        <ContentGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
          {services.cards.map((service: HomeServiceCard, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                link={service.link}
                variant="default"
              />
            </motion.div>
          ))}
        </ContentGrid>
      </PageContainer>

      {/* Mission & Vision Section */}
      <PageContainer className="py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{mission.content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{vision.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{vision.content}</p>
          </motion.div>
        </div>
      </PageContainer>

      {/* About Preview Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
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

              <div className="space-y-3 mb-8">
                {about.features.map((feature: string, index: number) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
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

      {/* Partners Banner */}
      <section className="py-12 bg-white border-t border-gray-200">
        <PageContainer>
          <div className="text-center mb-8">
            <h3 className="text-lg font-ubuntu font-semibold text-gray-900 mb-2">
              Trusted Partners
            </h3>
            <p className="text-sm text-gray-600">
              We work with Canada's leading insurance companies
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
            {[
              'Manulife',
              'Sun Life',
              'Canada Life',
              'RBC Insurance',
              'Desjardins',
              'BMO Insurance',
              'TD Insurance',
              'Scotiabank',
              'Intact Insurance',
              'Aviva',
            ]
              .slice(0, 10)
              .map((partner) => (
                <div
                  key={partner}
                  className="w-24 h-16 flex items-center justify-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xs font-medium text-gray-600 text-center">{partner}</span>
                </div>
              ))}
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
