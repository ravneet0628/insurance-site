import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Phone, Clock, DollarSign, FileText, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';

const SuperVisaInsurancePage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: 'Government Compliant',
      description: 'Meets all Government of Canada minimum requirements for Super Visa applications'
    },
    {
      icon: DollarSign,
      title: 'Flexible Coverage',
      description: 'Coverage options from $100,000 to $500,000 to suit your needs and budget'
    },
    {
      icon: FileText,
      title: 'Easy Application',
      description: 'Simple application process with quick approval and instant policy issuance'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency assistance and claims support'
    }
  ];

  const coverageDetails = [
    'Emergency medical expenses coverage',
    'Hospital and physician expenses',
    'Emergency dental coverage up to $3,000',
    'Prescription drug coverage',
    'Coverage for COVID-19 related expenses',
    'Repatriation coverage',
    'Emergency transportation',
    'Medical equipment and supplies'
  ];

  return (
    <>
      <title>Super Visa Insurance - SecureChoice Insurance | Government Approved Coverage</title>
      <meta 
        name="description" 
        content="Get mandatory Super Visa insurance for parents and grandparents visiting Canada. Government compliant coverage from $100K-$500K. Quick approval guaranteed." 
      />

      <Hero
        title="Super Visa Insurance"
        subtitle="Mandatory insurance coverage for parents and grandparents seeking a Super Visa for Canada. Government approved and compliant."
        bgImg="/images/family-protection.jpg"
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
                What is Super Visa Insurance?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Super Visa Insurance is mandatory medical insurance required by the Government of Canada 
                for parents and grandparents applying for a Super Visa. This special visa allows them 
                to visit Canada for up to 2 years without renewing their status.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Super Visa insurance plans meet all government requirements and provide comprehensive 
                emergency medical coverage to ensure your loved ones are protected during their stay in Canada.
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
                  src="/images/about-team.jpg" 
                  alt="Family with elderly parents representing Super Visa insurance coverage"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-xl font-ubuntu font-bold drop-shadow-lg">Protecting Family Visits</p>
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
              Why Choose Our Super Visa Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make the Super Visa application process easier with comprehensive coverage and expert support.
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

      {/* Coverage Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-ubuntu font-bold text-neutral-text mb-6">
                Comprehensive Coverage Included
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Super Visa insurance provides complete protection for emergency medical situations 
                during your parents' or grandparents' visit to Canada.
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
              className="bg-neutral-bg rounded-lg p-8"
            >
              <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-6">
                Government Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-text">Minimum Coverage</h4>
                    <p className="text-gray-600">$100,000 emergency medical coverage minimum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-text">Coverage Period</h4>
                    <p className="text-gray-600">Valid for at least 1 year from entry date</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-text">Canadian Insurer</h4>
                    <p className="text-gray-600">Must be purchased from a Canadian insurance company</p>
                  </div>
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
              Ready to Apply for Super Visa Insurance?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get your government-compliant Super Visa insurance quote in minutes. 
              Our experts are here to help make the process simple and stress-free.
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

export default SuperVisaInsurancePage; 