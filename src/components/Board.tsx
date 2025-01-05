import React from 'react';
import List from './List';
import { Plus } from 'lucide-react';

const Board = () => {
  const [lists, setLists] = React.useState([
    { id: 1, title: 'To Do', cards: ['Task 1', 'Task 2'] },
    { id: 2, title: 'In Progress', cards: ['Task 3'] },
    { id: 3, title: 'Done', cards: ['Task 4', 'Task 5'] },
  ]);

  const addList = () => {
    const newList = {
      id: lists.length + 1,
      title: 'New List',
      cards: [],
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="flex-1 overflow-x-auto">
      <div className="flex gap-4 p-4 min-h-[calc(100vh-theme(spacing.16))]">
        {lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}
        <button
          onClick={addList}
          className="h-fit shrink-0 w-72 p-2 bg-black/5 hover:bg-black/10 rounded-lg flex items-center gap-2 text-sm font-medium"
        >
          <Plus size={20} />
          Add another list
        </button>
      </div>
    </div>
  );
};

export default Board;