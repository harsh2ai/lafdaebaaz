import React from 'react';

const Logo = ({ className = '', size = 40 }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-logo"
      >
        {/* Background Circle */}
        <circle cx="20" cy="20" r="20" className="fill-purple-500/10" />
        
        {/* Lattice Pattern */}
        <g className="animate-draw">
          <path
            d="M12 12L28 28"
            className="stroke-purple-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28 12L12 28"
            className="stroke-purple-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 8V32"
            className="stroke-purple-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 20H32"
            className="stroke-purple-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        
        {/* Center Dot */}
        <circle
          cx="20"
          cy="20"
          r="3"
          className="fill-purple-500 animate-pulse"
        />
      </svg>
      <span className="font-bold text-xl tracking-tight">lattice</span>
    </div>
  );
};

export default Logo;