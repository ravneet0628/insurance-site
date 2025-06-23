import React from 'react';
import { motion } from 'framer-motion';

interface HeroImageSectionProps {
  /** Background image path */
  backgroundImage: string;
  /** Section title */
  title: string;
  /** Section subtitle */
  subtitle?: string;
  /** Content alignment */
  alignment?: 'left' | 'center' | 'right';
  /** Text color theme */
  textColor?: 'light' | 'dark';
  /** Overlay intensity */
  overlay?: 'none' | 'light' | 'medium' | 'heavy';
  /** Section height */
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'screen';
  /** Enable parallax effect */
  parallax?: boolean;
  /** Children content */
  children?: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Image loading optimization */
  eager?: boolean;
  /** Image alt text */
  imageAlt?: string;
}

/**
 * Optimized HeroImageSection component
 * Features: Lazy loading, responsive images, performance optimized
 */
const HeroImageSection: React.FC<HeroImageSectionProps> = React.memo(({
  backgroundImage,
  title,
  subtitle,
  alignment = 'center',
  textColor = 'light',
  overlay = 'medium',
  height = 'lg',
  parallax = false,
  children,
  className = '',
  eager = false,
  imageAlt = ''
}) => {
  // Memoize height classes
  const heightClasses = React.useMemo(() => ({
    sm: 'h-64 md:h-80',
    md: 'h-80 md:h-96',
    lg: 'h-96 md:h-[500px]',
    xl: 'h-[500px] md:h-[600px]',
    screen: 'h-screen'
  }), []);

  // Memoize alignment classes
  const alignmentClasses = React.useMemo(() => ({
    left: 'text-left items-start justify-start',
    center: 'text-center items-center justify-center',
    right: 'text-right items-end justify-end'
  }), []);

  // Memoize text color classes
  const textColorClasses = React.useMemo(() => ({
    light: 'text-white',
    dark: 'text-gray-900'
  }), []);

  // Memoize overlay classes
  const overlayClasses = React.useMemo(() => ({
    none: 'bg-transparent',
    light: 'bg-black/20',
    medium: 'bg-black/40',
    heavy: 'bg-black/60'
  }), []);

  // Create responsive background image styles
  const backgroundImageStyle = React.useMemo(() => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }), [backgroundImage]);

  return (
    <section 
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden ${className}`}
      style={backgroundImageStyle}
      role="banner"
      aria-label={imageAlt || title}
    >
      {/* Optimized Background Image with Intersection Observer */}
      <div className="absolute inset-0">
        {/* Preload critical images */}
        {eager && (
          <link rel="preload" as="image" href={backgroundImage} />
        )}
        
        {/* Parallax container */}
        <motion.div
          className="w-full h-full"
          style={parallax ? { y: 0 } : undefined}
          animate={parallax ? { y: [-20, 20] } : undefined}
          transition={parallax ? {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          } : undefined}
        >
          {/* Gradient overlay for text readability */}
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
          
          {/* Optional gradient overlay for better text contrast */}
          {textColor === 'light' && overlay !== 'none' && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          )}
        </motion.div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${alignmentClasses[alignment]} max-w-4xl`}>
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${textColorClasses[textColor]}`}
          style={{
            textShadow: textColor === 'light' ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'
          }}
        >
          {title}
        </motion.h1>

        {/* Animated Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl ${textColorClasses[textColor]} ${textColor === 'light' ? 'text-opacity-90' : 'text-opacity-80'}`}
            style={{
              textShadow: textColor === 'light' ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none'
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Children Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`w-6 h-10 border-2 ${textColor === 'light' ? 'border-white/50' : 'border-gray-600'} rounded-full flex justify-center`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-1 h-3 ${textColor === 'light' ? 'bg-white/70' : 'bg-gray-600'} rounded-full mt-2`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

HeroImageSection.displayName = 'HeroImageSection';

export default HeroImageSection; 