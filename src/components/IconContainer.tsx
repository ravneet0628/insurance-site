import React from 'react';
import { 
  Shield, 
  Users, 
  Heart, 
  Activity, 
  Award, 
  Clock, 
  CheckCircle, 
  Wallet, 
  Star, 
  TrendingUp, 
  Phone, 
  ArrowRight,
  DollarSign,
  Home,
  Plane,
  Eye,
  Smile,
  Tablets,
  Timer,
  GraduationCap,
  Umbrella,
  TrendingDown,
  Building2,
  Headphones,
  ThumbsUp,
  UserCheck,
  FileText,
  Zap,
  Target,
  PiggyBank,
  HeartHandshake,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  Layers,
  BarChart
} from 'lucide-react';

interface IconContainerProps {
  /** Icon component or icon name string */
  icon: string | React.ComponentType<{ className?: string }>;
  /** Visual variant */
  variant?: 'gradient' | 'solid' | 'soft' | 'outline' | 'none';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Color theme */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Custom className */
  className?: string;
  /** Custom icon className */
  iconClassName?: string;
  /** Animation on hover */
  enableHover?: boolean;
}

// Comprehensive icon mapping for contextually appropriate icons
const iconMap = {
  // Protection & Security
  Shield,
  ShieldCheck,
  
  // People & Family
  Users,
  UserCheck,
  
  // Health & Medical
  Heart,
  HeartHandshake,
  Activity,
  Tablets,
  Smile,
  Eye,
  
  // Achievement & Quality
  Award,
  Star,
  Target,
  
  // Time & Support
  Clock,
  Timer,
  
  // Verification & Success
  CheckCircle,
  
  // Financial & Investment
  Wallet,
  DollarSign,
  PiggyBank,
  TrendingUp,
  TrendingDown,
  
  // Communication & Service
  Phone,
  Headphones,
  
  // Navigation & Action
  ArrowRight,
  
  // Property & Assets
  Home,
  Building2,
  
  // Travel & Transportation
  Plane,
  
  // Education & Learning
  GraduationCap,
  BookOpen,
  
  // Approval & Satisfaction
  ThumbsUp,
  
  // Coverage & Protection
  Umbrella,
  
  // Documentation
  FileText,
  
  // Performance & Energy
  Zap
} as const;

/**
 * High-performance IconContainer component
 * Optimizes icon rendering with memoization and consistent styling
 */
const IconContainer: React.FC<IconContainerProps> = React.memo(({
  icon,
  variant = 'gradient',
  size = 'lg',
  color = 'primary',
  className = '',
  iconClassName = '',
  enableHover = true
}) => {
  // Memoize icon component resolution
  const IconComponent = React.useMemo(() => {
    if (typeof icon === 'string') {
      return iconMap[icon as keyof typeof iconMap] || Shield;
    }
    return icon;
  }, [icon]);

  // Memoize size classes
  const sizeClasses = React.useMemo(() => ({
    sm: { container: 'w-12 h-12', icon: 'w-6 h-6' },
    md: { container: 'w-16 h-16', icon: 'w-8 h-8' },
    lg: { container: 'w-20 h-20', icon: 'w-10 h-10' },
    xl: { container: 'w-24 h-24', icon: 'w-12 h-12' }
  }), []);

  // Memoize color schemes
  const colorSchemes = React.useMemo(() => ({
    primary: {
      gradient: 'from-primary to-blue-600',
      solid: 'bg-primary',
      soft: 'from-primary/10 to-blue-100',
      outline: 'border-primary text-primary'
    },
    secondary: {
      gradient: 'from-gray-600 to-gray-800',
      solid: 'bg-gray-600',
      soft: 'from-gray-100 to-gray-200',
      outline: 'border-gray-600 text-gray-600'
    },
    success: {
      gradient: 'from-green-500 to-green-700',
      solid: 'bg-green-500',
      soft: 'from-green-100 to-green-200',
      outline: 'border-green-500 text-green-500'
    },
    warning: {
      gradient: 'from-yellow-500 to-orange-500',
      solid: 'bg-yellow-500',
      soft: 'from-yellow-100 to-orange-100',
      outline: 'border-yellow-500 text-yellow-500'
    },
    error: {
      gradient: 'from-red-500 to-red-700',
      solid: 'bg-red-500',
      soft: 'from-red-100 to-red-200',
      outline: 'border-red-500 text-red-500'
    }
  }), []);

  // Memoize variant classes
  const variantClasses = React.useMemo(() => {
    const scheme = colorSchemes[color];
    const baseClasses = 'flex items-center justify-center rounded-2xl';
    const hoverClasses = enableHover ? 'group-hover:scale-110 transition-transform duration-300 will-change-transform' : '';
    
    switch (variant) {
      case 'gradient':
        return `${baseClasses} bg-gradient-to-br ${scheme.gradient} ${hoverClasses}`;
      case 'solid':
        return `${baseClasses} ${scheme.solid} ${hoverClasses}`;
      case 'soft':
        return `${baseClasses} bg-gradient-to-br ${scheme.soft} ${hoverClasses}`;
      case 'outline':
        return `${baseClasses} border-2 ${scheme.outline} bg-transparent ${hoverClasses}`;
      case 'none':
        return `flex items-center justify-start ${hoverClasses}`;
      default:
        return `${baseClasses} bg-gradient-to-br ${scheme.gradient} ${hoverClasses}`;
    }
  }, [variant, color, enableHover, colorSchemes]);

  // Memoize icon color classes
  const iconColorClasses = React.useMemo(() => {
    if (variant === 'gradient' || variant === 'solid') return 'text-white';
    if (variant === 'soft') return `text-${color === 'primary' ? 'primary' : color === 'secondary' ? 'gray-600' : `${color}-600`}`;
    if (variant === 'outline') return `text-${color === 'primary' ? 'primary' : color === 'secondary' ? 'gray-600' : `${color}-500`}`;
    if (variant === 'none') return `text-${color === 'primary' ? 'primary' : color === 'secondary' ? 'gray-600' : `${color}-500`}`;
    return 'text-white';
  }, [variant, color]);

  const containerSize = sizeClasses[size].container;
  const iconSize = sizeClasses[size].icon;

  if (variant === 'none') {
    return (
      <div className={`${variantClasses} ${className}`}>
        <IconComponent className={`${iconSize} ${iconColorClasses} ${iconClassName}`} />
      </div>
    );
  }

  return (
    <div className={`${containerSize} ${variantClasses} ${className}`}>
      <IconComponent className={`${iconSize} ${iconColorClasses} ${iconClassName}`} />
    </div>
  );
});

IconContainer.displayName = 'IconContainer';

export default IconContainer; 