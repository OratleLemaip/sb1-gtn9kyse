import React from 'react';
import Header from './components/Header';
import BoardHeader from './components/BoardHeader';
import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1D2125]">
      <Header />
      <BoardHeader />
      <Board />
    </div>
  );
}

export default App;