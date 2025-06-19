import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Cross, Heart, Activity, Award, Clock, CheckCircle, Wallet } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';

const HomePage: React.FC = () => {
  const products = [
  {
    icon: Shield,
    title: "Super Visa Insurance",
    description: "Mandatory insurance for parents or grandparents seeking a Super Visa for Canada.",
    },
  {
    icon: Users,
    title: "Visitors Insurance",
    description: "Whether it is you or your family or friends visiting Canada, always consider purchasing an all-encompassing visitors insurance plan.",
    
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Mishappenings are never intentional and can happen at any time. Life Insurance can be a safety net to keep your mind at ease when you least expect it.",
    
  },
  {
    icon: Cross,
    title: "Disability Insurance",
    description: "An accident is more financially disastrous than a disability. If you are disabled, you might not be able to work, resulting in no or less income.",
    
  },
  {
    icon: Activity,
    title: "Critical Illness Insurance",
    description: "Offers a substantial amount of money to the insured client who is diagnosed with any critical illness.",
    
  },
  {
    icon: Award,
    title: "RESP",
    description: "You can consider RESP as a long-term investment strategy that can help your children with the expenses of higher education in Canada.",
    
  },
  {
    icon: Clock,
    title: "RRSP",
    description: "Short for Registered Retirement Savings Plan, this policy is an investment vehicle for both employees and self-employed individuals in Canada.",
    
  },
  {
    icon: CheckCircle,
    title: "Drug & Dental Insurance",
    description: "Drug and Dental Plan benefits generally include dental care, eye care, prescription drugs, semi-private…",
    
  },
  {
    icon: Wallet,
    title: "TFSA",
    description: "A federal government tax-sheltered savings program intended to encourage Canadians to save and invest for short or long term goals.",
    
  }
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
        subtitle="Get comprehensive coverage for auto, home, and life insurance with personalizeAlld service and competitive rates. Your peace of mind is our priority."
        ctaText="Get a Free Quote"
        ctaLink="/quote"
      />

      {/* Products Section */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Our Insurance Products
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection from what matters most to you
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols4 gap-3 sm:gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <product.icon className="w-5 h-5 text-primary" />
                  </div>
                    <h3 className="text-sm font-ubuntu font-bold text-neutral-text mb-1">
                    {product.title}
                    </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                  {product.description}
                  </p>
                 <CTAButton variant="outline" size="sm" to="/quote" className="mt-auto text-xs">
                    Learn More →
                    </CTAButton>
                      </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-10 bg-neutral-bg">
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

    </div>
  );
};

export default HomePage; 