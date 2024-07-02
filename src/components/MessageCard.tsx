import React from 'react';
import Card from './Card';

interface MessageCardProps {
  message: string;
  isError?: boolean;
  isLoading?: boolean;
}

const MessageCard: React.FC<MessageCardProps> = ({ message, isError = false, isLoading = false }) => {
  const baseStyle = "flex justify-center items-center text-lg h-64"; // Base style for the message
  let style = baseStyle;

  if (isError) {
    style += " text-red-500"; // Add red color for error messages
  }

  return (
    <Card>
      <div className={style}>
        {isLoading ? 'Loading...' : message}
      </div>
    </Card>
  );
};



export default MessageCard
