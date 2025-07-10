import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

interface CTASectionProps {
  /** Main heading text */
  title: string;
  /** Subtitle/description text */
  subtitle: string;
  /** Background image path */
  backgroundImage?: string;
  /** Primary CTA button props */
  primaryCTA: {
    text: string;
    to?: string;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'light-outline';
  };
  /** Secondary CTA button props */
  secondaryCTA?: {
    text: string;
    to?: string;
    href?: string;
    icon?: React.ComponentType<{ className?: string }>;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'light-outline';
  };
  /** Alternative styling classes */
  className?: string;
  /** Container max width - controls text width */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

/**
 * Reusable Call-to-Action section component
 * Provides consistent styling and layout for CTA sections across all pages
 */
const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/financial-planning.jpg',
  primaryCTA,
  secondaryCTA,
  className = '',
  maxWidth = '4xl',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <section
      className={`py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Call to action background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-900/60 to-indigo-900/40"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-md"></div>

      {/* Content Container */}
      <div
        className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-ubuntu font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blue-50 mb-8 mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              to={primaryCTA.to || primaryCTA.href || '#'}
              variant={primaryCTA.variant || 'light'}
              size="lg"
            >
              {primaryCTA.text}
            </CTAButton>

            {secondaryCTA && (
              <CTAButton
                to={secondaryCTA.to || secondaryCTA.href || '#'}
                variant={secondaryCTA.variant || 'light-outline'}
                size="lg"
              >
                {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5 mr-2" />}
                {secondaryCTA.text}
              </CTAButton>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
