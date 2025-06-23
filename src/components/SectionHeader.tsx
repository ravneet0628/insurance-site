import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  /** Section label text (optional, will use title if not provided) */
  label?: string;
  /** Main section title */
  title: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** Icon component for decoration */
  icon?: React.ComponentType<{ className?: string }>;
  /** Text alignment */
  textAlign?: 'left' | 'center' | 'right';
  /** Alternative alignment prop for compatibility */
  alignment?: 'left' | 'center' | 'right';
  /** Custom container class */
  className?: string;
  /** Custom title size */
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Maximum width for subtitle */
  subtitleMaxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Animation delay */
  animationDelay?: number;
}

/**
 * Reusable section header component
 * Provides consistent styling and layout for section headers across all pages
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  icon: Icon,
  textAlign,
  alignment,
  className = '',
  titleSize = 'lg',
  subtitleMaxWidth = '3xl',
  animationDelay = 0
}) => {
  // Use alignment prop if provided, otherwise textAlign, default to center
  const actualAlignment = alignment || textAlign || 'center';
  const actualLabel = label || title;
  const titleSizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const justifyClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className={`mb-16 ${alignmentClasses[actualAlignment]} ${className}`}
    >
      {/* Section Label with Decorative Elements */}
      <div className={`flex items-center mb-4 ${justifyClasses[actualAlignment]}`}>
        {actualAlignment === 'center' ? (
          <>
            {Icon && <Icon className="w-6 h-6 text-primary mr-2" />}
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {actualLabel}
            </span>
            {Icon && <Icon className="w-6 h-6 text-primary ml-2" />}
          </>
        ) : (
          <>
            <div className="h-1 w-12 bg-primary mr-4"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {actualLabel}
            </span>
            {actualAlignment === 'left' && <div className="h-1 w-12 bg-primary ml-4"></div>}
          </>
        )}
      </div>
      
      {/* Main Title */}
      <h2 className={`${titleSizeClasses[titleSize]} font-ubuntu font-bold text-neutral-text mb-6 leading-tight`}>
        {title}
      </h2>
      
      {/* Optional Subtitle */}
      {subtitle && (
        <p className={`text-lg text-gray-600 leading-relaxed ${
          actualAlignment === 'center' ? `mx-auto ${maxWidthClasses[subtitleMaxWidth]}` : ''
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 