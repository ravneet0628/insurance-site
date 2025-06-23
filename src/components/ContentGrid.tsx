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
  /** Enable staggered animations */
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
 * High-performance ContentGrid component
 * Provides responsive grid layouts with optimized animations
 */
const ContentGrid: React.FC<ContentGridProps> = React.memo(({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 3 },
  gap = 'lg',
  stagger = true,
  animationDelay = 0,
  className = '',
  minHeight,
  align = 'stretch'
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
  const gapClasses = React.useMemo(() => ({
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }), []);

  // Memoize alignment classes
  const alignClasses = React.useMemo(() => ({
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }), []);

  // Animation variants for grid container
  const containerVariants = React.useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: stagger ? 0.1 : 0,
        delayChildren: animationDelay
      }
    }
  }), [stagger, animationDelay]);

  // Animation variants for grid items
  const itemVariants = React.useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }), []);

  const itemTransition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1] as const
  };

  // Process children to add animation variants if stagger is enabled
  const processedChildren = React.useMemo(() => {
    if (!stagger) return children;

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

  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={gridClasses}
      >
        {processedChildren}
      </motion.div>
    );
  }

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
});

ContentGrid.displayName = 'ContentGrid';

export default ContentGrid; 