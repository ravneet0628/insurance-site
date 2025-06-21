import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Cross, Heart, Activity, Award, Clock, CheckCircle, Wallet } from 'lucide-react';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import { insuranceProducts } from '../data/services';

const ServicesPage: React.FC = () => {
  // Map icon strings to actual components
  const iconMap = {
    Shield,
    Users,
    Cross,
    Heart,
    Activity,
    Award,
    Clock,
    CheckCircle,
    Wallet,
  };

  // Transform the data to include actual icon components
  const accordionItems = insuranceProducts.map((product) => ({
    ...product,
    icon: iconMap[product.icon as keyof typeof iconMap] || Shield,
  }));

  return (
    <>
      <title>Insurance Services - SecureChoice Insurance | Auto, Home, Life & More</title>
      <meta 
        name="description" 
        content="Explore our comprehensive insurance services including auto, home, life, commercial, and travel insurance. Compare coverage options and get personalized quotes." 
      />
      <meta property="og:title" content="Insurance Services - SecureChoice" />
      <meta property="og:description" content="Comprehensive insurance solutions for auto, home, life, business, and travel coverage." />
      <link rel="canonical" href="/services" />

      <Hero
        title="Our Insurance Services"
        subtitle="Comprehensive coverage solutions tailored to protect what matters most to you and your family"
        bgImg="/images/family-protection.jpg"
        height="md"
      />

      {/* Insurance Products Accordion */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Insurance Products
            </h2>
            <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto">
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

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Quality Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img 
                src="/images/handshake.jpg" 
                alt="Professional service and trust in insurance partnerships"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="text-white px-12">
                  <h2 className="text-4xl font-ubuntu font-bold mb-4">Trusted Partnership</h2>
                  <p className="text-xl max-w-lg">Building lasting relationships through exceptional service and expert guidance</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold mb-4">
              Why Choose SecureChoice?
            </h2>
            <p className="text-clamp-base text-neutral-text max-w-2xl mx-auto">
              We're committed to providing exceptional insurance solutions with 
              personalized service and competitive rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our licensed professionals help you navigate complex insurance decisions with confidence.',
              },
              {
                title: 'Competitive Rates',
                description: 'We work with top-rated insurers to find you the best coverage at the most competitive prices.',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock claims support and customer service whenever you need assistance.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-ubuntu font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-text">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 