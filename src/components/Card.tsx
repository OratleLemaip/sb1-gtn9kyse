import React from 'react';
import { Pencil } from 'lucide-react';

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className="bg-white rounded shadow-sm hover:bg-gray-50 cursor-pointer group">
      <div className="p-2 flex justify-between items-start">
        <p className="text-sm text-gray-700">{content}</p>
        <button className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100">
          <Pencil size={14} />
        </button>
      </div>
    </div>
  );
};

export default Card;