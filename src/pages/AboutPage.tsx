import React from 'react';

import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Shield, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const AboutPage: React.FC = () => {
  const timeline = [
    { year: '2010', event: 'SecureChoice Insurance founded with a mission to provide personalized insurance solutions.' },
    { year: '2013', event: 'Expanded services to include comprehensive life insurance products.' },
    { year: '2016', event: 'Reached 10,000 satisfied customers milestone.' },
    { year: '2019', event: 'Launched digital platform for seamless quote and claims processing.' },
    { year: '2022', event: 'Achieved A+ rating from Better Business Bureau.' },
    { year: '2024', event: 'Serving over 50,000 customers across Canada.' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      experience: '20+ years',
      specialization: 'Strategic Leadership',
    },
    {
      name: 'Michael Chen',
      role: 'VP of Operations',
      experience: '15+ years',
      specialization: 'Claims Management',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Insurance Advisor',
      experience: '12+ years',
      specialization: 'Auto & Home Insurance',
    },
    {
      name: 'David Thompson',
      role: 'Life Insurance Specialist',
      experience: '10+ years',
      specialization: 'Life & Health Insurance',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest, transparent communication and ethical business practices.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your needs come first. We listen, understand, and provide personalized solutions that fit your life.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from customer service to claims processing.',
    },
  ];

  return (
    <>
      <title>About Us - SecureChoice Insurance | Your Trusted Insurance Partner</title>
      <meta name="description" content="Learn about SecureChoice Insurance - over 15 years of experience providing personalized insurance solutions. Meet our team and discover our mission." />
      <meta property="og:title" content="About SecureChoice Insurance" />
      <meta property="og:description" content="Your trusted insurance partner since 2010. Learn about our mission, values, and experienced team." />

              <Hero
        title="About SecureChoice Insurance"
        subtitle="Your trusted insurance partner since 2010, committed to protecting what matters most to you and your family."
        bgImg="/images/office-building.jpg"
        height="md"
      />

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl font-ubuntu font-bold text-neutral-text">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, affordable insurance solutions that give our clients peace of mind 
                  and financial security. We are committed to building lasting relationships through exceptional 
                  service, expert guidance, and unwavering support when you need it most.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl font-ubuntu font-bold text-neutral-text">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be Canada's most trusted insurance brokerage, known for our personalized approach, 
                  innovative solutions, and commitment to protecting families and businesses. We envision 
                  a future where everyone has access to the right insurance coverage at the right price.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Our Journey
            </h2>
            <p className="text-clamp-base text-gray-600">
              From humble beginnings to becoming a trusted insurance partner for thousands of Canadians.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-primary text-white px-4 py-2 rounded-full inline-block mb-2 font-ubuntu font-bold">
                    {item.year}
                  </div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="/images/about-team.jpg" 
                alt="Professional team collaboration at SecureChoice Insurance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-ubuntu font-bold mb-2">Our Expert Team</h2>
                  <p className="text-lg">Dedicated professionals working for your peace of mind</p>
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
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-clamp-base text-gray-600">
              Our experienced professionals are here to help you find the right insurance solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-ubuntu font-bold text-neutral-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Our Values
            </h2>
            <p className="text-clamp-base text-gray-600">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 