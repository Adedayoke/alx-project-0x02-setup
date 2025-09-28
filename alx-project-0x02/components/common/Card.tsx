import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;