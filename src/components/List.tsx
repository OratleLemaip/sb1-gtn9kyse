import React from 'react';
import Card from './Card';
import { Plus, MoreHorizontal } from 'lucide-react';

interface ListProps {
  title: string;
  cards: string[];
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newCard, setNewCard] = React.useState('');

  return (
    <div className="w-72 shrink-0 bg-[#f1f2f4] rounded-lg">
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium px-2 py-1">{title}</h3>
          <button className="p-1.5 hover:bg-black/5 rounded">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        <div className="flex flex-col gap-2">
          {cards.map((card, index) => (
            <Card key={index} content={card} />
          ))}
        </div>

        {isEditing ? (
          <div className="mt-2">
            <textarea
              className="w-full p-2 rounded border-2 border-blue-600 shadow-sm min-h-[80px] text-sm"
              placeholder="Enter a title for this card..."
              value={newCard}
              onChange={(e) => setNewCard(e.target.value)}
              autoFocus
            />
            <div className="flex items-center gap-2 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                Add card
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1.5 hover:bg-black/5 rounded"
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full p-2 text-left text-gray-600 hover:bg-black/5 rounded flex items-center gap-2 text-sm mt-2"
          >
            <Plus size={16} />
            Add a card
          </button>
        )}
      </div>
    </div>
  );
};

export default List;