import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { ChevronDown } from 'lucide-react';

interface CTAProps {
  text: string;
  link?: string;
  scrollTo?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  bgImg?: string;
  primaryCTA?: CTAProps;
  secondaryCTA?: CTAProps;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  overlay?: 'light' | 'medium' | 'heavy';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bgImg,
  primaryCTA,
  secondaryCTA,
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

  // Check if we have any CTA buttons for layout logic
  const hasCtaButtons = primaryCTA || secondaryCTA;

  // Function to handle scroll-to-section
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

          {/* CTA buttons container */}
          {hasCtaButtons && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto px-4 sm:px-0"
            >
              {primaryCTA && (
                <CTAButton
                  to={primaryCTA.link}
                  onClick={primaryCTA.scrollTo ? () => handleScroll(primaryCTA.scrollTo!) : undefined}
                  size="lg"
                  variant="light"
                  className="w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px]"
                >
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton
                  to={secondaryCTA.link}
                  onClick={
                    secondaryCTA.scrollTo ? () => handleScroll(secondaryCTA.scrollTo!) : undefined
                  }
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px] "
                >
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated Chevron Scroll Indicator */}
      {height !== 'sm' && (
        <motion.div
          className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white/70" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
