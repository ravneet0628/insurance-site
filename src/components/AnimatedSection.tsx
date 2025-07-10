import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Animation variant */
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'none';
  /** Animation delay */
  delay?: number;
  /** Animation duration - reduced default for better performance */
  duration?: number;
  /** Custom className */
  className?: string;
  /** HTML element to render */
  as?: 'div' | 'section';
}

/**
 * Optimized AnimatedSection component with reduced animations for better performance
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = React.memo(
  ({ children, variant = 'fadeUp', delay = 0, duration = 0.4, className = '', as = 'div' }) => {
    // Memoize animation variants with simplified animations
    const variants = React.useMemo(() => {
      const baseVariants = {
        fadeUp: {
          hidden: { opacity: 0, y: 20 }, // Reduced distance
          visible: { opacity: 1, y: 0 },
        },
        fadeIn: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
        slideLeft: {
          hidden: { opacity: 0, x: -30 }, // Reduced distance
          visible: { opacity: 1, x: 0 },
        },
        slideRight: {
          hidden: { opacity: 0, x: 30 }, // Reduced distance
          visible: { opacity: 1, x: 0 },
        },
        scaleIn: {
          hidden: { opacity: 0, scale: 0.95 }, // Less dramatic scale
          visible: { opacity: 1, scale: 1 },
        },
        none: {
          hidden: {},
          visible: {},
        },
      };

      return baseVariants[variant];
    }, [variant]);

    // Early return for 'none' variant to skip animation entirely
    if (variant === 'none') {
      return as === 'section' ? (
        <section className={className}>{children}</section>
      ) : (
        <div className={className}>{children}</div>
      );
    }

    const transition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Smoother easing
    };

    return as === 'section' ? (
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }} // Larger margin for earlier trigger
        transition={transition}
        className={className}
      >
        {children}
      </motion.section>
    ) : (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }} // Larger margin for earlier trigger
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
