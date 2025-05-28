import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Shield, Users, Award, Clock, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';

const HomePage: React.FC = () => {
  const products = [
    {
      icon: Car,
      title: 'Auto Insurance',
      description: 'Comprehensive coverage for your vehicle with competitive rates and excellent customer service.',
      features: ['Collision Coverage', 'Comprehensive Coverage', '24/7 Claims Support', 'Roadside Assistance'],
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your home and belongings with our comprehensive homeowners insurance policies.',
      features: ['Property Protection', 'Personal Belongings', 'Liability Coverage', 'Additional Living Expenses'],
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with our flexible life insurance options.',
      features: ['Term Life Insurance', 'Whole Life Insurance', 'Critical Illness', 'Disability Coverage'],
    },
  ];

  const trustBadges = [
    { name: 'A+ Rating', description: 'Better Business Bureau' },
    { name: '50,000+', description: 'Satisfied Customers' },
    { name: '15 Years', description: 'Industry Experience' },
    { name: '24/7', description: 'Customer Support' },
  ];

  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Customers' },
    { icon: Shield, number: '99.9%', label: 'Claims Satisfaction' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Secure Your Future with Trusted Insurance Solutions"
        subtitle="Get comprehensive coverage for auto, home, and life insurance with personalized service and competitive rates. Your peace of mind is our priority."
        ctaText="Get a Free Quote"
        ctaLink="/quote"
      />

      {/* Products Section */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Our Insurance Products
            </h2>
            <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of insurance products designed to protect what matters most to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <CTAButton variant="outline" size="sm" to="/quote">
                    Get Quote
                  </CTAButton>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Marquee */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-2xl font-ubuntu font-bold text-primary">
                  {badge.name}
                </div>
                <div className="text-sm text-gray-600">
                  {badge.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex justify-center">
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-3xl font-ubuntu font-bold">
                  {stat.number}
                </div>
                <div className="text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-6">
                Why Choose SecureChoice?
              </h2>
              <p className="text-clamp-base text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the insurance industry, SecureChoice has been 
                helping families and businesses protect what matters most. Our commitment to 
                personalized service and competitive rates has made us a trusted partner for 
                thousands of customers across Canada.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Licensed insurance professionals
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Competitive rates from top insurers
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  24/7 claims support and assistance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Personalized coverage recommendations
                </li>
              </ul>
              <CTAButton to="/about" variant="outline">
                Learn More About Us
              </CTAButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-blue-600">
                <div className="flex items-center justify-center text-white">
                  <div className="text-center">
                    <Shield className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-ubuntu">Your Protection, Our Priority</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Stay Informed
            </h2>
            <p className="text-clamp-base text-gray-600 mb-8">
              Subscribe to our newsletter for insurance tips, industry updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <CTAButton type="submit" size="md">
                Subscribe
              </CTAButton>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 