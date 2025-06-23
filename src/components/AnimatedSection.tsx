import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Animation variant */
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'none';
  /** Animation delay */
  delay?: number;
  /** Animation duration */
  duration?: number;
  /** Custom className */
  className?: string;
  /** HTML element to render */
  as?: 'div' | 'section';
}

/**
 * Simplified AnimatedSection component with performance optimizations
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = React.memo(({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div'
}) => {
  // Memoize animation variants
  const variants = React.useMemo(() => {
    const baseVariants = {
      fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      },
      slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      },
      none: {
        hidden: {},
        visible: {}
      }
    };

    return baseVariants[variant];
  }, [variant]);

  // Early return for 'none' variant
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
    ease: [0.4, 0, 0.2, 1] as const
  };

  return as === 'section' ? (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
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
      viewport={{ once: true, margin: "-50px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection; 