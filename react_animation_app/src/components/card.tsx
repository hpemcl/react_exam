import React from 'react';
import './styles.module.css';

interface CardProps {
  src: string;
}

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div className="card">
      <img src={src} alt="Gradient" />
    </div>
  );
};

export default Card;
