import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'light-outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';

  // Simplified variant classes without theme complexity
  const variantClasses = {
    primary:
      'bg-primary hover:bg-primary/90 text-white focus:ring-primary shadow-lg hover:shadow-xl',
    secondary:
      'bg-accent hover:bg-accent/90 text-white focus:ring-accent shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary bg-transparent hover:shadow-lg',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary hover:shadow-md',
    // New variants for use on dark backgrounds
    light: 'bg-white hover:bg-gray-100 text-primary focus:ring-white shadow-lg hover:shadow-xl',
    'light-outline':
      'border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white bg-transparent hover:shadow-lg',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg font-semibold',
    md: 'px-6 py-3 text-base rounded-xl font-semibold',
    lg: 'px-8 py-4 text-lg rounded-2xl font-bold',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};

export default CTAButton;
