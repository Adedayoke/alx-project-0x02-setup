import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '16px' },
    large: { padding: '12px 24px', fontSize: '20px' },
  };

  const shapeStyles = {
    'rounded-sm': { borderRadius: '4px' },
    'rounded-md': { borderRadius: '8px' },
    'rounded-full': { borderRadius: '50%' },
  };

  return (
    <button style={{ ...sizeStyles[size], ...shapeStyles[shape], border: '1px solid #ccc' }}>
      {children}
    </button>
  );
};

export default Button;