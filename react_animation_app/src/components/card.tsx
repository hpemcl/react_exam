import React from 'react';

interface CardProps {
  src: string;
}

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div className="w-16 h-16">
      <img src={src} alt="icon" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

export default Card;
