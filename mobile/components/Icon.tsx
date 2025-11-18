import React from 'react';

interface IconProps {
  path: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ path, size = 24, className = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

export default Icon;
