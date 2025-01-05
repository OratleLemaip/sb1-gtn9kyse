import React from 'react';
import { Star, Users, Rocket, ChevronDown, Filter } from 'lucide-react';

const BoardHeader = () => {
  return (
    <div className="h-12 px-4 flex items-center justify-between bg-black/[0.15]">
      <div className="flex items-center gap-4">
        <h1 className="font-bold">Project Board</h1>
        <button className="p-1.5 hover:bg-black/5 rounded">
          <Star size={16} className="text-white" />
        </button>
        <div className="h-4 w-[1px] bg-white/30" />
        <button className="flex items-center gap-1 text-sm hover:bg-black/5 px-2 py-1 rounded text-white">
          <Users size={16} /> Workspace Visible
        </button>
        <div className="h-4 w-[1px] bg-white/30" />
        <button className="flex items-center gap-1 text-sm hover:bg-black/5 px-2 py-1 rounded text-white">
          <Rocket size={16} /> Power-Ups
        </button>
        <button className="flex items-center gap-1 text-sm hover:bg-black/5 px-2 py-1 rounded text-white">
          <Filter size={16} /> Filters
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 text-sm bg-[#ffffff3d] hover:bg-[#ffffff52] px-3 py-1.5 rounded text-white">
          <Users size={16} />
          Share
        </button>
        <button className="p-1.5 hover:bg-black/5 rounded">
          <ChevronDown size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default BoardHeader;