import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Card from './Card';

interface StatsCardProps {
  /** Main statistic number */
  value: string | number;
  /** Unit or suffix (e.g., '%', '+', 'M') */
  unit?: string;
  /** Descriptive label */
  label: string;
  /** Subtitle or description */
  subtitle?: string;
  /** Icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** Visual variant */
  variant?: 'default' | 'featured' | 'minimal' | 'gradient';
  /** Color theme */
  color?: 'primary' | 'success' | 'warning' | 'info';
  /** Animation delay */
  animationDelay?: number;
  /** Enable number animation */
  animateValue?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Optimized StatsCard component with performance enhancements
 * Features: Value animation, consistent styling, flexible layouts
 */
const StatsCard: React.FC<StatsCardProps> = React.memo(
  ({
    value,
    unit = '',
    label,
    subtitle,
    icon: Icon = TrendingUp,
    variant = 'default',
    color = 'primary',
    animationDelay = 0,
    animateValue = true,
    className = '',
  }) => {
    // Memoize numeric value for animation (for future use)
    // const numericValue = React.useMemo(() => {
    //   const parsed = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;
    //   return isNaN(parsed) ? 0 : parsed;
    // }, [value]);

    // Memoize variant classes for performance
    const variantClasses = React.useMemo(() => {
      const baseClasses = 'relative overflow-hidden';

      switch (variant) {
        case 'featured':
          return `${baseClasses} border-2 border-primary/20 bg-gradient-to-br from-white to-gray-50`;
        case 'minimal':
          return `${baseClasses} bg-transparent border-0 shadow-none`;
        case 'gradient':
          return `${baseClasses} bg-gradient-to-br from-primary/5 to-primary/10 border-primary/10`;
        default:
          return `${baseClasses} bg-white border border-gray-100`;
      }
    }, [variant]);

    // Memoize color classes
    const colorClasses = React.useMemo(
      () => ({
        primary: {
          value: 'text-primary',
          icon: 'text-primary',
          bg: 'bg-primary/10',
        },
        success: {
          value: 'text-green-600',
          icon: 'text-green-500',
          bg: 'bg-green-100',
        },
        warning: {
          value: 'text-orange-600',
          icon: 'text-orange-500',
          bg: 'bg-orange-100',
        },
        info: {
          value: 'text-blue-600',
          icon: 'text-blue-500',
          bg: 'bg-blue-100',
        },
      }),
      []
    );

    const currentColorClasses = colorClasses[color];

    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: animationDelay }}
        viewport={{ once: true, margin: '-30px' }}
        className="group"
      >
        <Card
          className={`p-6 h-full flex flex-col justify-between card-hover min-h-[160px] ${variantClasses} ${className}`}
        >
          {/* Background Pattern */}
          {variant !== 'minimal' && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
          )}

          {/* Header */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1">
              {/* Value with Animation */}
              <div className="flex items-baseline mb-2">
                {animateValue ? (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: animationDelay + 0.2, ease: 'backOut' }}
                    viewport={{ once: true }}
                    className={`text-3xl font-bold leading-none ${currentColorClasses.value}`}
                  >
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </motion.span>
                ) : (
                  <span className={`text-3xl font-bold leading-none ${currentColorClasses.value}`}>
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </span>
                )}
                {unit && (
                  <span
                    className={`text-lg font-medium ml-1 ${currentColorClasses.value} opacity-80`}
                  >
                    {unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-gray-700 font-medium text-sm uppercase tracking-wide mb-1">
                {label}
              </h3>

              {/* Subtitle */}
              {subtitle && <p className="text-gray-500 text-xs leading-relaxed">{subtitle}</p>}
            </div>

            {/* Icon */}
            {variant !== 'minimal' && (
              <div
                className={`w-12 h-12 rounded-xl ${currentColorClasses.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-6 h-6 ${currentColorClasses.icon}`} />
              </div>
            )}
          </div>

          {/* Progress indicator for featured variant */}
          {variant === 'featured' && (
            <div className="mt-4 relative">
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  transition={{ duration: 1, delay: animationDelay + 0.5 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${currentColorClasses.value.replace('text-', 'from-')} to-transparent`}
                />
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    );
  }
);

StatsCard.displayName = 'StatsCard';

export default StatsCard;
