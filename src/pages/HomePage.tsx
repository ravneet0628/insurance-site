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
      slug: "super-visa-insurance"
    },
    {
      icon: Users,
      title: "Visitors Insurance",
      description: "Whether it is you or your family or friends visiting Canada, always consider purchasing an all-encompassing visitors insurance plan.",
      slug: "visitors-insurance"
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Mishappenings are never intentional and can happen at any time. Life Insurance can be a safety net to keep your mind at ease when you least expect it.",
      slug: "life-insurance"
    },
    {
      icon: Cross,
      title: "Disability Insurance",
      description: "An accident is more financially disastrous than a disability. If you are disabled, you might not be able to work, resulting in no or less income.",
      slug: "disability-insurance"
    },
    {
      icon: Activity,
      title: "Critical Illness Insurance",
      description: "Offers a substantial amount of money to the insured client who is diagnosed with any critical illness.",
      slug: "critical-illness-insurance"
    },
    {
      icon: Award,
      title: "RESP",
      description: "You can consider RESP as a long-term investment strategy that can help your children with the expenses of higher education in Canada.",
      slug: "resp"
    },
    {
      icon: Clock,
      title: "RRSP",
      description: "Short for Registered Retirement Savings Plan, this policy is an investment vehicle for both employees and self-employed individuals in Canada.",
      slug: "rrsp"
    },
    {
      icon: CheckCircle,
      title: "Drug & Dental Insurance",
      description: "Drug and Dental Plan benefits generally include dental care, eye care, prescription drugs, semi-private…",
      slug: "drug-dental-insurance"
    },
    {
      icon: Wallet,
      title: "TFSA",
      description: "A federal government tax-sheltered savings program intended to encourage Canadians to save and invest for short or long term goals.",
      slug: "tfsa"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Secure Your Future with Trusted Insurance Solutions"
        subtitle="Get comprehensive coverage including Super Visa, Visitors, Life, Disability, and Critical Illness insurance plus RESP, RRSP, TFSA investments with personalized service and competitive rates."
        bgImg="/images/hero-bg.jpg"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-ubuntu font-bold text-neutral-text mb-3 h-14 flex items-center">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1 flex items-start leading-relaxed">
                    <span className="line-clamp-4">
                      {product.description}
                    </span>
                  </p>
                  <CTAButton 
                    variant="outline" 
                    size="sm" 
                    to={`/services/${product.slug}`}
                    className="mt-auto"
                  >
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
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="/images/handshake.jpg" 
                  alt="Professional handshake representing trust and partnership in insurance"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Shield className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-xl font-ubuntu font-bold drop-shadow-lg">Your Protection, Our Priority</p>
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