import React from 'react';
import { Layout, ChevronDown, Bell, HelpCircle, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#1D2125] text-white h-12 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Layout className="h-5 w-5" />
        <button className="flex items-center gap-1 text-sm hover:bg-white/10 px-3 py-1 rounded">
          Workspaces <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-1 text-sm hover:bg-white/10 px-3 py-1 rounded">
          Recent <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-1 text-sm hover:bg-white/10 px-3 py-1 rounded">
          Starred <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-1 text-sm hover:bg-white/10 px-3 py-1 rounded">
          Templates <ChevronDown size={14} />
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
          Create
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#A6C5E229] hover:bg-[#A6C5E252] pl-8 pr-4 py-1 rounded text-sm w-64 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
        <HelpCircle className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;