import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, CheckCircle, Star, TrendingUp, Phone, ArrowRight, ShieldCheck, Plane, HeartHandshake, UserCheck, BookOpen, Tablets, PiggyBank } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import CTASection from '../components/CTASection';
import { useServiceContent } from '../content/hooks/useServiceContent';
import type { ServiceContent } from '../content/types/services';

/**
 * ServicesPage component - Comprehensive overview of all insurance services
 * Implements enhanced layout with contextual imagery and improved user experience
 */
const ServicesPage: React.FC = () => {
  // Service slugs in order of importance
  const serviceSlugs = [
    'super-visa-insurance',
    'visitors-insurance', 
    'life-insurance',
    'disability-insurance',
    'critical-illness-insurance',
    'resp',
    'rrsp',
    'drug-dental-insurance',
    'tfsa'
  ];

  // Get all service content from content management system
  const allServices = serviceSlugs
    .map(slug => ({ slug, content: useServiceContent(slug) }))
    .filter(service => service.content !== null) as { slug: string; content: ServiceContent }[];

  // Service-specific icon mapping matching HomePage
  const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'super-visa-insurance': ShieldCheck,
    'visitors-insurance': Plane,
    'life-insurance': HeartHandshake,
    'disability-insurance': UserCheck,
    'critical-illness-insurance': Heart,
    'resp': BookOpen,
    'rrsp': Star,
    'drug-dental-insurance': Tablets,
    'tfsa': PiggyBank
  };

  // Transform the content management data to enhanced accordion format
  const accordionItems = allServices.map((service, index) => ({
    id: `service-${index}`,
    title: service.content.meta.title.split(' | ')[0] || service.content.meta.title,
    description: service.content.hero.subtitle,
    features: service.content.features.features.slice(0, 4).map((feature: any) => feature.description),
    icon: serviceIconMap[service.slug] || Shield,
    slug: service.slug,
    price: service.content.overview.highlights?.[0] || 'Contact for pricing',
    category: service.slug.includes('visa') || service.slug.includes('visitors') ? 'Travel' : 
              service.slug.includes('life') || service.slug.includes('disability') || service.slug.includes('critical') ? 'Personal' :
              'Investment'
  }));

  // Enhanced benefits data with unique icons
  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Our licensed professionals with 20+ years of experience help you navigate complex insurance decisions with confidence and clarity.',
      icon: Award,
      stats: '20+ Years Experience'
    },
    {
      title: 'Competitive Rates',
      description: 'We work with 50+ top-rated insurers to find you the best coverage at the most competitive prices in the market.',
      icon: TrendingUp,
      stats: '50+ Insurance Partners'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock claims support and customer service whenever you need assistance, 365 days a year.',
      icon: Phone,
      stats: '24/7 Availability'
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Insurance Services - SecureChoice Insurance | Auto, Home, Life & More</title>
        <meta 
          name="description" 
          content="Explore our comprehensive insurance services including auto, home, life, commercial, and travel insurance. Compare coverage options and get personalized quotes." 
        />
        <meta property="og:title" content="Insurance Services - SecureChoice" />
        <meta property="og:description" content="Comprehensive insurance solutions for auto, home, life, business, and travel coverage." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <Hero
        title="Our Insurance Services"
        subtitle="Comprehensive coverage solutions tailored to protect what matters most to you and your family"
        bgImg="/images/insurance-security.jpg"
        height="md"
        overlay="medium"
      />

      {/* Service Categories Overview */}
              <section className="section-spacing gradient-neutral">
          <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-divider">
              <div className="section-divider-line mr-4"></div>
              <span className="section-divider-text">Service Categories</span>
              <div className="section-divider-line ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              Protection for Every Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From personal protection to investment planning, we offer comprehensive insurance solutions 
              designed to secure your future and protect what matters most.
            </p>
          </motion.div>

          {/* Service Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: 'Personal Protection',
                description: 'Life, disability, and critical illness insurance to protect you and your family',
                image: '/images/life-protection.jpg',
                services: ['Life Insurance', 'Disability Insurance', 'Critical Illness'],
                color: 'from-blue-600 to-purple-600'
              },
              {
                category: 'Travel Insurance',
                description: 'Comprehensive coverage for visitors and super visa applicants',
                image: '/images/travel-insurance.jpg',
                services: ['Super Visa Insurance', 'Visitors Insurance', 'Travel Coverage'],
                color: 'from-green-600 to-teal-600'
              },
              {
                category: 'Investment Planning',
                description: 'RESP, RRSP, and TFSA solutions for your financial future',
                image: '/images/investment-growth.jpg',
                services: ['RESP Plans', 'RRSP Contributions', 'TFSA Options'],
                color: 'from-orange-600 to-red-600'
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={`${category.category} insurance services`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-ubuntu font-bold text-white text-center px-4">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    
                    <CTAButton 
                      variant="outline" 
                      size="sm" 
                      to="#services-list"
                      className="w-full"
                    >
                      View Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </CTAButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Products Accordion - Enhanced */}
      <section id="services-list" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">All Services</span>
              <Star className="w-6 h-6 text-primary ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              Insurance Products
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of insurance products designed to protect 
              your assets, family, and future. Click on each product to learn more about 
              the features and benefits we offer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion items={accordionItems} />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-neutral-bg to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Quality Hero Image - Better Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/insurance-security.jpg" 
                alt="Professional insurance security and protection services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/70 flex items-center">
                <div className="text-white px-12 max-w-4xl">
                  <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-6">Trusted Partnership</h2>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    Building lasting relationships through exceptional service, expert guidance, and unwavering commitment to your protection
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton 
                      to="/contact" 
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-100 shadow-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Get Consultation
                    </CTAButton>
                    <CTAButton 
                      to="/about" 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Meet Our Team
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <Award className="w-6 h-6 text-primary ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              The SecureChoice Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're committed to providing exceptional insurance solutions with 
              personalized service, competitive rates, and unmatched expertise.
            </p>
          </motion.div>

          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center h-full p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {benefit.stats}
                    </div>
                    
                    <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Ready to Get Protected?"
        subtitle="Don't wait until it's too late. Get a personalized insurance quote today and secure your family's future with confidence."
        backgroundImage="/images/business-growth.jpg"
        primaryCTA={{
          text: "Get Free Quote",
          to: "/quote"
        }}
        secondaryCTA={{
          text: "Speak to Expert",
          to: "/contact",
          icon: Phone
        }}
      />
    </div>
  );
};

export default ServicesPage;