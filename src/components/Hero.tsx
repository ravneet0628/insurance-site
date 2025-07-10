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
  overlay?: 'light' | 'medium' | 'heavy';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bgImg,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  height = 'lg',
  overlay = 'medium',
}) => {
  // Responsive height classes with proper min-heights for content breathing room
  const heightClasses = {
    sm: 'min-h-[400px] h-80 sm:h-96',
    md: 'min-h-[500px] h-96 sm:h-[500px]',
    lg: 'min-h-[680px] h-[500px] sm:h-[600px] lg:h-[680px]',
    xl: 'min-h-screen h-screen',
  };

  // Enhanced overlay with better contrast ratios for text legibility
  const overlayClasses = {
    light: 'rgba(30, 42, 120, 0.5)',
    medium: 'rgba(30, 42, 120, 0.7)',
    heavy: 'rgba(30, 42, 120, 0.85)',
  };

  // Responsive background - we'll handle fixed attachment via CSS classes
  const backgroundStyle = bgImg
    ? {
        backgroundImage: `linear-gradient(${overlayClasses[overlay]}, ${overlayClasses[overlay]}), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: 'linear-gradient(135deg,rgb(97, 107, 172) 0%, #2563eb 50%, #1e40af 100%)',
      };

  // Check if we have CTA buttons for better layout logic
  const hasCtaButton = ctaText && ctaLink;

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-white ${heightClasses[height]} overflow-hidden ${bgImg ? 'bg-fixed md:bg-fixed bg-scroll' : ''}`}
      style={backgroundStyle}
      role="banner"
    >
      {/* Enhanced overlay stack with proper z-indexing */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-20"></div>

      {/* Decorative elements - hidden on small screens to prevent content overlap */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-white/5 rounded-full animate-pulse hidden sm:block z-0"></div>
      <div
        className="absolute bottom-16 left-4 sm:bottom-20 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white/5 rounded-full animate-pulse hidden sm:block z-0"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Main content container with proper z-index and responsive spacing */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Responsive heading with fluid sizing to prevent overflow */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold leading-tight sm:leading-tight md:leading-tight break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Responsive subtitle with proper line height and max width */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light break-words px-2 sm:px-0 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* Single CTA button - removed redundant second button */}
          {hasCtaButton && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center w-full max-w-lg mx-auto px-4 sm:px-0"
            >
              <CTAButton
                to={ctaLink}
                size="lg"
                variant="light"
                className="w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px]"
              >
                {ctaText}
              </CTAButton>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator with conditional rendering based on height and proper spacing */}
      {height !== 'sm' && (
        <motion.div
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center relative">
            <motion.div
              className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <p className="text-white/70 text-xs mt-1.5 sm:mt-2 font-medium text-center hidden sm:block">
            Scroll Down
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
