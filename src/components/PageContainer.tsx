import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  /** Page content */
  children: React.ReactNode;
  /** Maximum width preset */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Background variant */
  background?: 'white' | 'gray' | 'gradient' | 'none';
  /** Enable page animations */
  animate?: boolean;
  /** Custom className */
  className?: string;
  /** Semantic HTML element */
  as?: 'main' | 'section' | 'article' | 'div';
  /** Accessibility label */
  'aria-label'?: string;
}

/**
 * Optimized PageContainer component
 * Provides consistent page layouts with performance optimizations
 */
const PageContainer: React.FC<PageContainerProps> = React.memo(
  ({
    children,
    maxWidth = 'xl',
    padding = 'lg',
    background = 'white',
    animate = true,
    className = '',
    as: Component = 'main',
    'aria-label': ariaLabel,
  }) => {
    // Memoize max width classes
    const maxWidthClasses = React.useMemo(
      () => ({
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        '2xl': 'max-w-screen-2xl',
        full: 'max-w-full',
      }),
      []
    );

    // Memoize padding classes
    const paddingClasses = React.useMemo(
      () => ({
        none: '',
        sm: 'px-4 py-8 sm:px-6 sm:py-12',
        md: 'px-4 py-12 sm:px-6 lg:px-8 sm:py-16',
        lg: 'px-4 py-16 sm:px-6 lg:px-8 sm:py-20',
        xl: 'px-4 py-20 sm:px-6 lg:px-8 sm:py-24',
      }),
      []
    );

    // Memoize background classes
    const backgroundClasses = React.useMemo(
      () => ({
        white: 'bg-white',
        gray: 'bg-gray-50',
        gradient: 'bg-gradient-to-br from-gray-50 to-white',
        none: '',
      }),
      []
    );

    // Animation variants for page transitions
    const pageVariants = React.useMemo(
      () => ({
        initial: {
          opacity: 0,
          y: 20,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: -20,
        },
      }),
      []
    );

    const pageTransition = {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    };

    const containerClasses = `
    mx-auto w-full 
    ${maxWidthClasses[maxWidth]} 
    ${paddingClasses[padding]} 
    ${backgroundClasses[background]} 
    ${className}
  `.trim();

    if (animate) {
      return (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className={backgroundClasses[background]}
        >
          <Component
            className={containerClasses.replace(backgroundClasses[background], '')}
            aria-label={ariaLabel}
          >
            {children}
          </Component>
        </motion.div>
      );
    }

    return (
      <Component className={containerClasses} aria-label={ariaLabel}>
        {children}
      </Component>
    );
  }
);

PageContainer.displayName = 'PageContainer';

export default PageContainer;
