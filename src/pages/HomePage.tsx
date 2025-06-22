import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Activity, Award, Clock, CheckCircle, Wallet, DollarSign, Star, TrendingUp, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { useHomePageContent } from '../content/hooks/usePageContent';

/**
 * HomePage component - Main landing page with hero, services, trust badges, and about sections
 * Implements comprehensive layout improvements with proper image usage and responsive design
 */
const HomePage: React.FC = () => {
  const content = useHomePageContent();

  // Icon mapping for dynamic content with enhanced icon set
  const iconMap = {
    Shield,
    Users,
    Heart,
    Activity,
    Award,
    Clock,
    CheckCircle,
    Wallet,
    DollarSign,
    Star,
    TrendingUp,
    Phone,
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        {content.meta.keywords && (
          <meta name="keywords" content={content.meta.keywords.join(', ')} />
        )}
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        bgImg={content.hero.backgroundImage}
        ctaText={content.hero.primaryCTA.text}
        ctaLink={content.hero.primaryCTA.link}
        height="lg"
      />

      {/* Services Section - Enhanced Layout */}
      <section className="section-spacing gradient-neutral" id="services">
        <div className="page-container">
          {/* Section Header with Better Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-divider">
              <div className="section-divider-line mr-4"></div>
              <span className="section-divider-text">Our Services</span>
              <div className="section-divider-line ml-4"></div>
            </div>
            <h2 className="text-section-title content-spacing-sm leading-tight">
              {content.services.title}
            </h2>
            <p className="text-body-large max-w-3xl mx-auto">
              {content.services.subtitle}
            </p>
          </motion.div>

          {/* Enhanced Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {content.services.cards.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full p-8 flex flex-col card-hover border-0 bg-white relative overflow-hidden min-h-[400px]">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon with Enhanced Design */}
                  <div className="relative z-10 mb-6">
                    <div className="icon-container mb-4 hover-scale">
                      {React.createElement(iconMap[service.icon as keyof typeof iconMap] || Shield, {
                        className: "w-10 h-10 text-white"
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-card-title mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-body content-spacing-sm flex-1">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <div className="content-spacing">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <CTAButton 
                      variant="outline" 
                      size="md" 
                      to={service.link}
                      className="mt-auto w-full"
                    >
                      Learn More →
                    </CTAButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section - Enhanced Design */}
      <section className="section-spacing bg-white relative overflow-hidden" id="why-choose-us">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-100 rounded-full"></div>
        
        <div className="page-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-divider">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <span className="section-divider-text">Why Choose Us</span>
              <Star className="w-6 h-6 text-yellow-500 ml-2" />
            </div>
            <h2 className="text-section-title content-spacing-sm">
              {content.trustBadges.title}
            </h2>
            <p className="text-body-large max-w-2xl mx-auto">
              {content.trustBadges.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.trustBadges.badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="icon-container-soft mx-auto content-spacing-sm hover-scale">
                    {React.createElement(iconMap[badge.icon as keyof typeof iconMap] || Shield, {
                      className: "w-10 h-10 text-primary"
                    })}
                  </div>
                </div>
                <h3 className="text-card-title content-spacing-xs">
                  {badge.title}
                </h3>
                <p className="text-body">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section - Redesigned with Better Image Usage */}
      <section className="section-spacing gradient-neutral-dark" id="about">
                  <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="section-divider">
                <div className="section-divider-line mr-4"></div>
                <span className="section-divider-text">About Us</span>
              </div>
              
              <h2 className="text-section-title content-spacing leading-tight">
                {content.about.title}
              </h2>
              
              <p className="text-body-large content-spacing">
                {content.about.description}
              </p>
              
              {/* Enhanced Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {content.about.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to={content.about.cta.link} variant="primary" size="lg">
                  {content.about.cta.text}
                </CTAButton>
                <CTAButton to="/contact" variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </CTAButton>
              </div>
            </motion.div>

            {/* Image Column - Better Context */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/professional-consultation.jpg" 
                    alt="Professional insurance consultation and advisory services"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50K+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-100 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-spacing gradient-cta relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/trusted-advisor.jpg"
            alt="Professional trusted insurance advisor"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 gradient-cta-light"></div>
                  <div className="text-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-subsection-title text-white content-spacing-sm drop-shadow-lg">
              Ready to Protect What Matters Most?
            </h2>
            <p className="text-xl text-blue-50 content-spacing max-w-2xl mx-auto drop-shadow-md">
              Get a personalized insurance quote in minutes. Our experts are here to help you find the perfect coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/quote" 
                variant="light"
                size="lg"
              >
                Get Free Quote
              </CTAButton>
              <CTAButton 
                to="/contact" 
                variant="light-outline"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;