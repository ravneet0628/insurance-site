import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Activity, Award, Clock, CheckCircle, Wallet, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { useHomePageContent } from '../content/hooks/usePageContent';

const HomePage: React.FC = () => {
  const content = useHomePageContent();

  // Icon mapping for dynamic content
  const iconMap = {
    Shield,
    Users,
    Heart,
    Activity,
    Award,
    Clock,
    CheckCircle,
    Wallet,
    DollarSign,
  };

  return (
    <div>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        {content.meta.keywords && (
          <meta name="keywords" content={content.meta.keywords.join(', ')} />
        )}
      </Helmet>

      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        bgImg={content.hero.backgroundImage}
        ctaText={content.hero.primaryCTA.text}
        ctaLink={content.hero.primaryCTA.link}
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
              {content.services.title}
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {content.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.cards.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(iconMap[service.icon as keyof typeof iconMap] || Shield, {
                      className: "w-8 h-8 text-primary"
                    })}
                  </div>
                  <h3 className="text-lg font-ubuntu font-bold text-neutral-text mb-3 h-14 flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1 flex items-start leading-relaxed">
                    <span className="line-clamp-4">
                      {service.description}
                    </span>
                  </p>
                  <CTAButton 
                    variant="outline" 
                    size="sm" 
                    to={service.link}
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

      {/* Trust Badges Section */}
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
              {content.trustBadges.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.trustBadges.badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(iconMap[badge.icon as keyof typeof iconMap] || Shield, {
                    className: "w-8 h-8 text-primary"
                  })}
                </div>
                <h3 className="text-lg font-ubuntu font-bold text-neutral-text mb-3">
                  {badge.title}
                </h3>
                <p className="text-gray-600">
                  {badge.description}
                </p>
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
                {content.about.title}
              </h2>
              <p className="text-clamp-base text-gray-600 mb-6 leading-relaxed">
                {content.about.content}
              </p>
              <ul className="space-y-3 mb-8">
                {content.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <CTAButton to={content.about.ctaLink} variant="outline">
                {content.about.ctaText}
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