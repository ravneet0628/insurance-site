import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Heart, Target, Eye, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { useAboutPageContent } from '../content/hooks/usePageContent';

const AboutPage: React.FC = () => {
  const content = useAboutPageContent();

  // Icon mapping for dynamic icons
  const iconMap = {
    Target,
    Eye,
    Shield,
    Heart,
    CheckCircle,
    Users,
  };

  // Values data (could be moved to content management system later)
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in honest, transparent communication and ethical business practices in everything we do.',
      icon: Shield,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in our service delivery, continuously improving to exceed expectations.',
      icon: CheckCircle,
    },
    {
      title: 'Compassion',
      description: 'We understand that insurance decisions are personal and treat every client with empathy and care.',
      icon: Heart,
    },
  ];

  // Team data mapped from content
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
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        {content.meta.keywords && (
          <meta name="keywords" content={content.meta.keywords.join(', ')} />
        )}
      </Helmet>

      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        bgImg={content.hero.backgroundImage}
        ctaText={content.hero.primaryCTA.text}
        ctaLink={content.hero.primaryCTA.link}
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
                  {React.createElement(iconMap[content.mission.icon as keyof typeof iconMap] || Target, {
                    className: "w-8 h-8 text-primary mr-3"
                  })}
                  <h2 className="text-2xl font-ubuntu font-bold text-neutral-text">{content.mission.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {content.mission.content}
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
                  {React.createElement(iconMap[content.vision.icon as keyof typeof iconMap] || Eye, {
                    className: "w-8 h-8 text-primary mr-3"
                  })}
                  <h2 className="text-2xl font-ubuntu font-bold text-neutral-text">{content.vision.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {content.vision.content}
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
              {content.timeline.title}
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
              {content.team.title}
            </h2>
            <p className="text-clamp-base text-gray-600">
              {content.team.subtitle}
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