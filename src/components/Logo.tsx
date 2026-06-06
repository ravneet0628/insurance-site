import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Premium Logo Mark */}
      <img
        src={light ? "/logo-bg.jpg" : "/logo-transparent.png"}
        alt=""
        className="w-9 h-9 mr-3 object-contain rounded-lg"
        aria-hidden="true"
      />

      {!iconOnly && (
        <span
          className={`text-2xl font-ubuntu font-bold tracking-tight ${
            light ? 'text-white' : 'text-primary'
          }`}
        >
          Top Trust
        </span>
      )}
    </div>
  );
};

export default Logo;
