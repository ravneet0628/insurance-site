import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Feature subtitle (optional) */
  subtitle?: string;
  /** Icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** Card variant */
  variant?: 'default' | 'featured' | 'compact' | 'testimonial' | 'team' | 'numbered';
  /** Animation delay */
  animationDelay?: number;
  /** Step number for numbered variant */
  stepNumber?: string;
  /** Custom className */
  className?: string;
}

/**
 * Optimized FeatureCard component for displaying features, benefits, testimonials, and team members
 */
const FeatureCard: React.FC<FeatureCardProps> = React.memo(({
  title,
  description,
  subtitle,
  icon: Icon = CheckCircle,
  variant = 'default',
  animationDelay = 0,
  stepNumber,
  className = ''
}) => {
  // Memoize variant classes
  const variantClasses = React.useMemo(() => {
    const baseClasses = 'h-full p-6 flex flex-col relative overflow-hidden';
    
    switch (variant) {
      case 'featured':
        return `${baseClasses} border-2 border-primary/20 bg-gradient-to-br from-white to-gray-50`;
      case 'compact':
        return `${baseClasses} p-4`;
      case 'testimonial':
        return `${baseClasses} bg-gradient-to-br from-gray-50 to-white border-l-4 border-primary`;
      case 'team':
        return `${baseClasses} text-center`;
      case 'numbered':
        return `${baseClasses} pl-16 md:pl-20`;
      default:
        return `${baseClasses} bg-white border border-gray-100`;
    }
  }, [variant]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true, margin: "-30px" }}
      className="group"
    >
      <Card className={`card-hover ${variantClasses} ${className}`}>
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        
        {/* Step number for numbered variant */}
        {variant === 'numbered' && stepNumber && (
          <div className="absolute left-6 top-6 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
            {stepNumber}
          </div>
        )}

        {/* Icon section */}
        {variant !== 'numbered' && variant !== 'testimonial' && (
          <div className={`relative z-10 mb-4 ${variant === 'team' ? 'flex justify-center' : ''}`}>
            <div className={`w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className={`text-xl font-ubuntu font-bold text-neutral-text mb-3 leading-tight ${variant === 'team' ? 'text-center' : ''}`}>
            {title}
          </h3>
          
          {subtitle && (
            <p className={`text-sm text-primary font-semibold mb-2 ${variant === 'team' ? 'text-center' : ''}`}>
              {subtitle}
            </p>
          )}
          
          <p className={`text-gray-600 leading-relaxed flex-1 ${variant === 'team' ? 'text-center' : ''} ${variant === 'compact' ? 'text-sm' : 'text-base'}`}>
            {description}
          </p>

          {/* Quote styling for testimonial variant */}
          {variant === 'testimonial' && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-gray-700">{title}</span>
              </div>
              {subtitle && (
                <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard; 