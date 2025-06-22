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
  overlay?: 'light' | 'medium' | 'dark';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bgImg,
  ctaText = 'Get Started',
  ctaLink = '/quote',
  height = 'lg',
  overlay = 'medium',
}) => {
  const heightClasses = {
    sm: 'h-80',
    md: 'h-96',
    lg: 'h-[600px]',
    xl: 'h-screen',
  };

  const overlayClasses = {
    light: 'rgba(30, 42, 120, 0.4)',
    medium: 'rgba(30, 42, 120, 0.6)',
    dark: 'rgba(30, 42, 120, 0.8)',
  };

  const backgroundStyle = bgImg
    ? {
        backgroundImage: `linear-gradient(${overlayClasses[overlay]}, ${overlayClasses[overlay]}), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }
    : {
        background: 'linear-gradient(135deg, #1e2a78 0%, #2563eb 50%, #1e40af 100%)',
      };

  return (
    <section
      className={`relative flex items-center justify-center text-white ${heightClasses[height]} overflow-hidden`}
      style={backgroundStyle}
      role="banner"
    >
      {/* Enhanced overlay with pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CTAButton
                to={ctaLink}
                size="lg"
                variant="primary"
                theme="dark"
                className="min-w-[200px]"
              >
                {ctaText}
              </CTAButton>
              
              <CTAButton
                to="/contact"
                size="lg"
                variant="outline"
                theme="dark"
                className="min-w-[200px]"
              >
                Ask Questions
              </CTAButton>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-white/70 text-xs mt-2 font-medium">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;