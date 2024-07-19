// src/components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className="border border-gray-300 rounded p-4">
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="font-bold">{price}</p>
    </div>
  );
};

export default Card;
