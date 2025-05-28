import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

interface HeroProps {
  title: string;
  subtitle: string;
  bgImg?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bgImg,
  ctaText = 'Get Started',
  ctaLink = '/quote',
  height = 'lg',
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-[500px]',
    xl: 'h-screen',
  };

  const backgroundStyle = bgImg
    ? {
        backgroundImage: `linear-gradient(rgba(30, 42, 120, 0.7), rgba(30, 42, 120, 0.7)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: 'linear-gradient(135deg, #1e2a78 0%, #2563eb 100%)',
      };

  return (
    <section
      className={`relative flex items-center justify-center text-white ${heightClasses[height]}`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-clamp-3xl font-ubuntu font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-clamp-lg mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <CTAButton
                to={ctaLink}
                size="lg"
                className="shadow-xl hover:shadow-2xl"
              >
                {ctaText}
              </CTAButton>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 