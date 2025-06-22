import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Heart, Target, Eye, Users, Award, TrendingUp, Building, Handshake } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { useAboutPageContent } from '../content/hooks/usePageContent';

/**
 * AboutPage component - Company information, mission, vision, timeline, team, and values
 * Implements comprehensive layout improvements with contextual images and responsive design
 */
const AboutPage: React.FC = () => {
  const content = useAboutPageContent();

  // Enhanced icon mapping for dynamic icons
  const iconMap = {
    Target,
    Eye,
    Shield,
    Heart,
    CheckCircle,
    Users,
    Award,
    TrendingUp,
    Building,
    Handshake,
  };

  // Enhanced values data with better icons
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in honest, transparent communication and ethical business practices in everything we do.',
      icon: Shield,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in our service delivery, continuously improving to exceed expectations.',
      icon: Award,
    },
    {
      title: 'Compassion',
      description: 'We understand that insurance decisions are personal and treat every client with empathy and care.',
      icon: Heart,
    },
  ];

  // Enhanced team data mapped from content
  const team = content.team.members.map(member => ({
    name: member.name,
    role: member.position,
    experience: member.bio,
    specialization: '', // Could be added to content structure if needed
  }));

  // Timeline data from content
  const timeline = content.timeline.items.map(item => ({
    year: item.year,
    event: item.description
  }));

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
        height="md"
        ctaText={content.hero.primaryCTA.text}
        ctaLink={content.hero.primaryCTA.link}
      />

      {/* Mission & Vision - Enhanced Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Purpose</span>
              <div className="h-1 w-12 bg-primary ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that drive everything we do for our clients and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-primary">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    {React.createElement(iconMap[content.mission.icon as keyof typeof iconMap] || Target, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-2">{content.mission.title}</h3>
                    <div className="w-12 h-1 bg-primary"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {content.mission.content}
                </p>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-500 border-l-4 border-blue-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    {React.createElement(iconMap[content.vision.icon as keyof typeof iconMap] || Eye, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-2">{content.vision.title}</h3>
                    <div className="w-12 h-1 bg-blue-600"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {content.vision.content}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline - Enhanced Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Journey</span>
              <TrendingUp className="w-6 h-6 text-primary ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              {content.timeline.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted insurance partner for thousands of Canadians.
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-blue-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-ubuntu font-bold text-sm mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <Building className="w-4 h-4 mr-2" />
                        {item.year}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.event}</p>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative z-10 hidden md:block">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with Better Images */}
      <section className="py-20 bg-gradient-to-br from-neutral-bg to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Hero Image - Better Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/modern-office-team.jpg" 
                alt="SecureChoice Insurance professional team collaboration and expertise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-600/80 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-8">
                  <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-4">Our Expert Team</h2>
                  <p className="text-xl md:text-2xl font-light">Dedicated professionals working for your peace of mind</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our People</span>
              <Users className="w-6 h-6 text-primary ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              {content.team.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.team.subtitle}
            </p>
          </motion.div>

          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center h-full p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Enhanced Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">{member.experience}</p>
                  {member.specialization && (
                    <p className="text-xs text-gray-500 italic">{member.specialization}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Values</span>
              <Award className="w-6 h-6 text-primary ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold text-neutral-text mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center h-full p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-ubuntu font-bold text-neutral-text mb-6">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 gradient-cta relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/client-meeting.jpg"
            alt="Professional client consultation and advisory meeting"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 gradient-cta-light"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-ubuntu font-bold text-white mb-6 drop-shadow-lg">
              Ready to Experience the SecureChoice Difference?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Join thousands of satisfied clients who trust us with their insurance needs. Let's build your protection plan together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                to="/quote"
                variant="light"
                size="lg"
              >
                Get Started Today
              </CTAButton>
              <CTAButton
                to="/contact"
                variant="light-outline"
                size="lg"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Meet Our Team
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 