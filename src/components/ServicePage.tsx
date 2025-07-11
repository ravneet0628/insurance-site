import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useServiceContent } from '../content/hooks/useServiceContent';

import ScrollToTop from './ScrollToTop';
import CTAButton from './CTAButton';
import CTASection from './CTASection';
import Card from './Card';
import * as Icons from 'lucide-react';

/**
 * ServicePage component - Dynamic service page with enhanced layout and contextual imagery
 * Implements comprehensive design improvements with proper responsive behavior
 */
const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const content = useServiceContent(serviceSlug || '');

  /**
   * Service-specific icon mapping to ensure consistency with homepage
   */
  const serviceIconMap = useMemo(
    () =>
      ({
        'super-visa-insurance': 'ShieldCheck',
        'visitors-insurance': 'Plane',
        'life-insurance': 'HeartHandshake',
        'disability-insurance': 'UserCheck',
        'critical-illness-insurance': 'Heart',
        resp: 'BookOpen',
        rrsp: 'PiggyBank',
        tfsa: 'Star',
      }) as const,
    []
  );

  /**
   * Renders an icon component with fallback - memoized for performance
   */
  const renderIcon = useMemo(
    () =>
      (iconName: string, className: string = '') => {
        const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{
          className?: string;
        }>;
        return IconComponent ? (
          <IconComponent className={className} />
        ) : (
          <Icons.Shield className={className} />
        );
      },
    []
  );

  /**
   * Gets the consistent icon for the current service
   */
  const getServiceIcon = useMemo(() => {
    const slug = serviceSlug || '';
    return serviceIconMap[slug as keyof typeof serviceIconMap] || 'Shield';
  }, [serviceSlug, serviceIconMap]);

  /**
   * Gets contextual image based on service type - memoized for performance
   */
  const serviceImage = useMemo(() => {
    const imageMap: Record<string, string> = {
      'life-insurance': '/images/life-protection.jpg',
      'super-visa-insurance': '/images/travel-insurance.jpg',
      'visitors-insurance': '/images/travel-insurance.jpg',
      'disability-insurance': '/images/professional-consultation.jpg',
      'critical-illness-insurance': '/images/critical-care.jpg',
      resp: '/images/education-savings.jpg',
      rrsp: '/images/investment-growth.jpg',
      tfsa: '/images/investment-growth.jpg',
    };

    return imageMap[serviceSlug || ''] || '/images/professional-consultation.jpg';
  }, [serviceSlug]);

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.AlertCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-ubuntu font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The requested service page could not be found. Please check the URL or return to our
              services page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/" variant="primary">
                View All Services
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                Contact Us
              </CTAButton>
            </div>
            {serviceSlug && (
              <p className="text-sm text-gray-400 mt-4">Service slug: {serviceSlug}</p>
            )}
          </div>
        </main>

        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <title>{content.meta.title}</title>
      <meta name="description" content={content.meta.description} />
      {content.meta.keywords && <meta name="keywords" content={content.meta.keywords.join(', ')} />}
      {content.meta.ogImage && <meta property="og:image" content={content.meta.ogImage} />}
      <meta property="og:title" content={content.meta.title} />
      <meta property="og:description" content={content.meta.description} />
      <meta property="og:type" content="website" />

      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary to-blue-600 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={content.hero.backgroundImage || serviceImage}
              alt={`${content.hero.title} background`}
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-white mr-4"></div>
                  <span className="text-blue-100 font-semibold uppercase tracking-wider text-sm">
                    Insurance Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-ubuntu font-bold mb-6 leading-tight">
                  {content.hero.title}
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  {content.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton to={content.hero.ctaLink} variant="light" size="lg">
                    {content.hero.ctaText}
                  </CTAButton>
                  <CTAButton to="/contact" variant="light-outline" size="lg">
                    <Icons.Phone className="w-5 h-5 mr-2" />
                    Get Expert Advice
                  </CTAButton>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="w-96 h-96 bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-64 h-64 bg-white/20 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                        {renderIcon(getServiceIcon, 'w-16 h-16 text-primary')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-1 w-12 bg-primary mr-4"></div>
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                    Service Overview
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-8 leading-tight">
                  {content.overview.title}
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {content.overview.content}
                </p>

                {content.overview.highlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {content.overview.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <Icons.CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={serviceImage}
                      alt={`${content.overview.title} consultation and planning`}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">100%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-4">
                <Icons.Star className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Key Features
                </span>
                <Icons.Star className="w-6 h-6 text-primary ml-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
                {content.features.title}
              </h2>
              {content.features.subtitle && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {content.features.subtitle}
                </p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.features.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="group"
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 bg-white border-0 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Enhanced Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {renderIcon(feature.icon, 'w-8 h-8 text-white')}
                      </div>

                      <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                      {feature.details && (
                        <ul className="space-y-3">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <Icons.CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-4">
                <Icons.Info className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Detailed Information
                </span>
                <Icons.Info className="w-6 h-6 text-primary ml-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
                {content.details.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {content.details.content}
              </p>
            </motion.div>

            {content.details.items && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {content.details.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full p-8 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-4">
                          {item.title}
                        </h3>
                        <div className="w-12 h-1 bg-primary"></div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                      {item.benefits && (
                        <ul className="space-y-3">
                          {item.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <Icons.ArrowRight className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <CTASection
          title={content.cta.title}
          subtitle={content.cta.subtitle}
          backgroundImage="/images/financial-planning.jpg"
          primaryCTA={{
            text: 'Contact Us',
            to: '/contact',
          }}
          secondaryCTA={{
            text: 'Learn More',
            to: '/resources',
          }}
        />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default ServicePage;
