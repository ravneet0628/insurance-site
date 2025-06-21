import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Phone, Clock, Shield, Heart, Globe, Plane } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';

const VisitorsInsurancePage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: 'Emergency Medical Coverage',
      description: 'Comprehensive emergency medical expenses coverage for unexpected health issues'
    },
    {
      icon: Globe,
      title: 'Trip Protection',
      description: 'Coverage for trip interruption, cancellation, and emergency evacuations'
    },
    {
      icon: Heart,
      title: 'Pre-existing Conditions',
      description: 'Coverage available for stable pre-existing medical conditions'
    },
    {
      icon: Clock,
      title: 'Instant Coverage',
      description: 'Quick application process with immediate coverage activation'
    }
  ];

  const coverageDetails = [
    'Emergency medical coverage up to $500,000',
    'Trip interruption and cancellation',
    'Emergency dental coverage',
    'Prescription drug coverage',
    'Medical equipment coverage',
    'Emergency transportation',
    'Coverage for pre-existing conditions (stable)',
    'Hospital accommodation',
    'Ambulance services',
    'Emergency evacuation and repatriation'
  ];

  const whoNeedsIt = [
    {
      title: 'International Visitors to Canada',
      description: 'Foreign nationals visiting Canada for tourism, business, or family visits'
    },
    {
      title: 'Canadian Residents Traveling Abroad',
      description: 'Canadians traveling outside their home province or internationally'
    },
    {
      title: 'New Immigrants',
      description: 'New immigrants waiting for government health coverage to begin'
    },
    {
      title: 'Temporary Workers & Students',
      description: 'International workers and students in Canada on temporary permits'
    }
  ];

  return (
    <>
      <title>Visitors Insurance - SecureChoice Insurance | Travel Medical Coverage</title>
      <meta 
        name="description" 
        content="Comprehensive visitors insurance for international travelers to Canada and Canadians traveling abroad. Emergency medical coverage, trip protection, and more." 
      />

      <Hero
        title="Visitors Insurance"
        subtitle="Comprehensive travel medical insurance for visitors to Canada and Canadians traveling abroad. Protect yourself from unexpected medical emergencies."
        bgImg="/images/hero-bg.jpg"
        height="md"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-ubuntu font-bold text-neutral-text mb-6">
                Why Visitors Insurance Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're visiting Canada or traveling abroad, unexpected medical emergencies 
                can result in significant financial burden. Visitors insurance provides essential 
                protection against emergency medical expenses that may not be covered by your 
                regular health insurance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive visitors insurance plans offer peace of mind with extensive 
                coverage for medical emergencies, trip interruptions, and emergency evacuations.
              </p>
              <CTAButton to="/quote" className="inline-flex">
                Get Your Quote Today
              </CTAButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/images/office-building.jpg" 
                  alt="Travelers with luggage representing visitors insurance coverage"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Plane className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-xl font-ubuntu font-bold drop-shadow-lg">Travel with Confidence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-ubuntu font-bold text-neutral-text mb-4">
              Comprehensive Travel Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our visitors insurance provides extensive coverage to protect you during your travels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-ubuntu font-bold text-neutral-text mb-4">
              Who Needs Visitors Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visitors insurance is essential for various types of travelers and temporary residents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoNeedsIt.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start">
                    <Users className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-ubuntu font-bold text-neutral-text mb-6">
                What's Covered
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our visitors insurance provides comprehensive protection for a wide range 
                of medical emergencies and travel-related incidents.
              </p>
              <ul className="space-y-4">
                {coverageDetails.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-6">
                Coverage Tips
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-neutral-text mb-2">Choose the Right Amount</h4>
                  <p className="text-gray-600">Select coverage amounts based on your destination and length of stay. Higher coverage is recommended for longer trips.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-text mb-2">Pre-existing Conditions</h4>
                  <p className="text-gray-600">Ensure your pre-existing conditions have been stable before coverage begins to qualify for protection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-text mb-2">Emergency Contacts</h4>
                  <p className="text-gray-600">Keep your insurance provider's 24/7 emergency contact information easily accessible during your trip.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-ubuntu font-bold mb-6">
              Ready to Protect Your Trip?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let unexpected medical emergencies ruin your travel plans. 
              Get comprehensive visitors insurance coverage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/quote" 
                variant="secondary" 
                className="text-lg px-8 py-3"
              >
                Get Free Quote
              </CTAButton>
              <CTAButton 
                to="/contact" 
                variant="outline" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak to an Expert
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VisitorsInsurancePage; 