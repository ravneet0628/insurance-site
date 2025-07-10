import React from 'react';
import { motion } from 'framer-motion';

interface ContentGridProps {
  /** Grid content */
  children: React.ReactNode;
  /** Grid columns configuration */
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Gap between grid items */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Enable staggered animations - now defaults to false for better performance */
  stagger?: boolean;
  /** Animation delay */
  animationDelay?: number;
  /** Custom className */
  className?: string;
  /** Grid item minimum height */
  minHeight?: string;
  /** Alignment of grid items */
  align?: 'start' | 'center' | 'end' | 'stretch';
}

/**
 * Optimized ContentGrid component for better performance
 * Provides responsive grid layouts with minimal animations by default
 */
const ContentGrid: React.FC<ContentGridProps> = React.memo(
  ({
    children,
    columns = { sm: 1, md: 2, lg: 3, xl: 3 },
    gap = 'lg',
    stagger = false, // Changed default to false for better performance
    animationDelay = 0,
    className = '',
    minHeight,
    align = 'stretch',
  }) => {
    // Memoize grid column classes
    const columnClasses = React.useMemo(() => {
      const classes = ['grid'];

      if (columns.sm) classes.push(`grid-cols-${columns.sm}`);
      if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
      if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
      if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);

      return classes.join(' ');
    }, [columns]);

    // Memoize gap classes
    const gapClasses = React.useMemo(
      () => ({
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
        xl: 'gap-12',
      }),
      []
    );

    // Memoize alignment classes
    const alignClasses = React.useMemo(
      () => ({
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      }),
      []
    );

    // Simplified animation variants for better performance
    const containerVariants = React.useMemo(
      () => ({
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4, // Slightly faster
            when: 'beforeChildren',
            staggerChildren: stagger ? 0.08 : 0, // Reduced stagger delay
            delayChildren: animationDelay,
          },
        },
      }),
      [stagger, animationDelay]
    );

    // Simplified item variants to reduce complexity
    const itemVariants = React.useMemo(
      () => ({
        hidden: {
          opacity: 0,
          y: 20, // Reduced from 30
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }),
      []
    );

    // Process children only if stagger is needed
    const processedChildren = React.useMemo(() => {
      if (!stagger) return children;

      const itemTransition = {
        duration: 0.4, // Faster animation
        ease: [0.4, 0, 0.2, 1] as const,
      };

      return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              key={`grid-item-${index}`}
              variants={itemVariants}
              transition={itemTransition}
              className={minHeight ? `min-h-[${minHeight}]` : ''}
            >
              {child}
            </motion.div>
          );
        }
        return child;
      });
    }, [children, stagger, itemVariants, minHeight]);

    const gridClasses = `
    ${columnClasses} 
    ${gapClasses[gap]} 
    ${alignClasses[align]} 
    ${className}
  `.trim();

    // Only use motion components when stagger is explicitly enabled
    if (stagger) {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }} // Reduced margin for earlier trigger
          className={gridClasses}
        >
          {processedChildren}
        </motion.div>
      );
    }

    // Default to regular div for best performance
    return <div className={gridClasses}>{children}</div>;
  }
);

ContentGrid.displayName = 'ContentGrid';

export default ContentGrid;
