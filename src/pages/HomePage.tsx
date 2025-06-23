import React from 'react';
import { motion } from 'framer-motion';
import { useHomePageContent } from '../content/hooks/usePageContent';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import StatsCard from '../components/StatsCard';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import ContentGrid from '../components/ContentGrid';

/**
 * HomePage component - Main landing page with hero, services, stats, and features
 */
const HomePage: React.FC = () => {
  const content = useHomePageContent();
  const { hero, services, trustBadges, about } = content;

  // Define stats data locally since it's not in the content structure
  const stats = [
    { label: "Years of Experience", value: "20+", description: "Serving Canadian families", color: "primary" as const },
    { label: "Insurance Partners", value: "50+", description: "Top Canadian insurers", color: "success" as const },
    { label: "Customer Satisfaction", value: "98%", description: "Highly rated service", color: "info" as const },
    { label: "Claims Support", value: "24/7", description: "Always here to help", color: "warning" as const }
  ];

  // Define features data from trustBadges with contextually appropriate icons
  const features = trustBadges.badges.map((badge: { title: string; description: string; icon: string }) => {
    return {
      title: badge.title,
      description: badge.description,
      icon: badge.icon // Use the icon from the content data directly
    };
  });

  // Use about section for CTA data
  const cta = {
    title: "Ready to Get Protected?",
    subtitle: "Join thousands of satisfied customers who trust SecureChoice Insurance for their protection needs.",
    primaryButton: {
      text: "Get Your Quote",
      href: "/quote"
    },
    secondaryButton: {
      text: "Contact Us",
      href: "/contact"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImg={hero.backgroundImage}
        ctaText={hero.primaryCTA.text}
        ctaLink={hero.primaryCTA.link}
        height="lg"
        overlay="heavy"
      />

      {/* Services Section */}
      <PageContainer className="py-16 lg:py-24">
        <SectionHeader
          title={services.title}
          subtitle={services.subtitle}
          textAlign="center"
          className="mb-16"
        />
        
        <ContentGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
          {services.cards.map((service: any, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                link={service.link}
                variant="default"
              />
            </motion.div>
          ))}
        </ContentGrid>
      </PageContainer>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <PageContainer>
          <SectionHeader
            title="Trusted by Thousands"
            subtitle="Our commitment to excellence shows in our numbers"
            textAlign="center"
            className="mb-16"
          />
          
          <ContentGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  label={stat.label}
                  value={stat.value}
                  subtitle={stat.description}
                  variant="default"
                  color={stat.color}
                />
              </motion.div>
            ))}
          </ContentGrid>
        </PageContainer>
      </section>

      {/* Features Section */}
      <PageContainer className="py-16 lg:py-24">
        <SectionHeader
          title={trustBadges.title}
          subtitle={trustBadges.subtitle}
          textAlign="center"
          className="mb-16"
        />
        
        <ContentGrid columns={{ sm: 1, md: 2 }} gap="xl">
          {features.map((feature: any, index: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant={index === Math.floor(features.length / 2) ? "featured" : "default"}
              />
            </motion.div>
          ))}
        </ContentGrid>
      </PageContainer>

      {/* About Preview Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                title={about.title}
                subtitle={about.subtitle}
                textAlign="left"
                className="mb-6"
              />
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {about.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {about.features.map((feature: string, index: number) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href={about.cta.link}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {about.cta.text}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={about.image}
                alt="SecureChoice Insurance Team"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
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
        backgroundImage="/images/handshake.jpg"
      />
    </div>
  );
};

export default HomePage;