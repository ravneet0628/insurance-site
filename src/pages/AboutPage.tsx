import React from 'react';
import { motion } from 'framer-motion';
import { useAboutPageContent } from '../content/hooks/usePageContent';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import ContentGrid from '../components/ContentGrid';
import IconContainer from '../components/IconContainer';
import Card from '../components/Card';

/**
 * AboutPage component - Company information, mission, team, and timeline
 */
const AboutPage: React.FC = () => {
  const content = useAboutPageContent();
  const { hero, mission, vision, timeline, team } = content;

  // Create CTA data since it's not in the content structure
  const cta = {
    title: "Ready to Work With Us?",
    subtitle: "Experience the SecureChoice difference with personalized service and expert guidance.",
    primaryButton: {
      text: "Get Your Quote",
      href: "/quote"
    },
    secondaryButton: {
      text: "Contact Our Team",
      href: "/contact"
    }
  };

  // Create reasons data from mission and vision with unique icons
  const reasons = [
    {
      title: "Expert Guidance",
      description: "Our licensed professionals provide personalized recommendations based on your unique needs and circumstances.",
      icon: "ThumbsUp"
    },
    {
      title: "Comprehensive Coverage",
      description: "From life and travel insurance to investment planning, we offer complete protection solutions.",
      icon: "Umbrella"
    },
    {
      title: "Competitive Rates", 
      description: "We work with 50+ top insurers to find you the best coverage at the most competitive prices.",
      icon: "TrendingDown"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock claims support and customer service when you need assistance most.",
      icon: "Phone"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImg={hero.backgroundImage}
        ctaText={hero.primaryCTA.text}
        ctaLink={hero.primaryCTA.link}
        height="md"
        overlay="heavy"
      />

      {/* Mission & Vision Section */}
      <PageContainer className="py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{mission.content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{vision.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{vision.content}</p>
          </motion.div>
        </div>
      </PageContainer>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <PageContainer>
          <SectionHeader
            title={timeline.title}
            subtitle="Two decades of growth, innovation, and service excellence"
            textAlign="center"
            className="mb-16"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.items.map((item: any, index: number) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-blue-600 mr-3">{item.year}</span>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Team Section */}
      <PageContainer className="py-16 lg:py-24">
        <SectionHeader
          title={team.title}
          subtitle={team.subtitle}
          textAlign="center"
          className="mb-16"
        />
        
        <ContentGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
          {team.members.map((member: any, index: number) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </ContentGrid>
      </PageContainer>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <PageContainer>
          <SectionHeader
            title="Why Choose SecureChoice?"
            subtitle="Experience the difference of working with true insurance professionals"
            textAlign="center"
            className="mb-16"
          />
          
          <ContentGrid columns={{ sm: 1, md: 2 }} gap="lg">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 card-hover bg-white border border-gray-100 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon section */}
                  <div className="relative z-10 mb-4">
                    <IconContainer 
                      icon={reason.icon}
                      variant="gradient"
                      size="md"
                      className="hover-scale"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-3 leading-tight">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {reason.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </ContentGrid>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        primaryCTA={{
          text: cta.primaryButton.text,
          href: cta.primaryButton.href,
        }}
        secondaryCTA={{
          text: cta.secondaryButton.text,
          href: cta.secondaryButton.href,
        }}
        backgroundImage="/images/professional-consultation.jpg"
      />
    </div>
  );
};

export default AboutPage; 