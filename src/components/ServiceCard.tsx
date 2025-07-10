import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Card from './Card';
import CTAButton from './CTAButton';
import IconContainer from './IconContainer';

interface ServiceCardProps {
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Icon name or component */
  icon: string | React.ComponentType<{ className?: string }>;
  /** Array of service features */
  features: string[];
  /** Link to service details */
  link: string;
  /** Animation delay for staggered loading */
  animationDelay?: number;
  /** Card variant */
  variant?: 'default' | 'featured' | 'compact';
  /** Maximum features to display */
  maxFeatures?: number;
  /** Custom CTA text */
  ctaText?: string;
  /** Show service ID for tracking */
  serviceId?: string;
  /** Custom className */
  className?: string;
}

/**
 * Optimized ServiceCard component - Consolidates all service card patterns
 * Features: Consistent design, performance optimized, flexible variants
 */
const ServiceCard: React.FC<ServiceCardProps> = React.memo(
  ({
    title,
    description,
    icon,
    features,
    link,
    animationDelay = 0,
    variant = 'default',
    maxFeatures = 3,
    ctaText = 'Learn More →',
    serviceId,
    className = '',
  }) => {
    const variantClasses = {
      default: 'h-[420px]',
      featured: 'h-[450px] border-2 border-primary/20',
      compact: 'h-[320px]',
    };

    const iconSizes = {
      default: 'lg',
      featured: 'xl',
      compact: 'md',
    } as const;

    // Memoize feature list to prevent unnecessary re-renders
    const displayFeatures = React.useMemo(
      () => features.slice(0, maxFeatures),
      [features, maxFeatures]
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: animationDelay }}
        viewport={{ once: true, margin: '-50px' }}
        className="group"
      >
        <Card
          className={`h-full p-8 flex flex-col card-hover border-0 bg-white relative overflow-hidden ${variantClasses[variant]} ${className}`}
        >
          {/* Optimized Background Pattern */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 will-change-transform"></div>

          {/* Icon Section */}
          <div className="relative z-10 mb-6">
            <IconContainer
              icon={icon}
              variant="gradient"
              size={iconSizes[variant]}
              className="hover-scale"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-card-title mb-4 leading-tight">{title}</h3>

            <div className="flex-1">
              <p className="text-body content-spacing-sm h-16 overflow-hidden text-ellipsis">
                {description}
              </p>
            </div>

            {/* Optimized Feature List */}
            {displayFeatures.length > 0 && (
              <div className="content-spacing">
                <ul className="space-y-2" role="list">
                  {displayFeatures.map((feature, index) => (
                    <li
                      key={`${serviceId}-feature-${index}`}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Button */}
            <CTAButton
              variant="outline"
              size="md"
              to={link}
              className="mt-auto w-full"
              aria-label={`Learn more about ${title}`}
            >
              {ctaText}
            </CTAButton>
          </div>
        </Card>
      </motion.div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
