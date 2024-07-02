import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 mx-auto max-w-4xl">
      {children}
    </div>
  );
};

export default Card;
