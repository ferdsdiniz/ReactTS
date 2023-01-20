import React from 'react';
import './App.css';

function App() {
  const isBackgroundRed = true;
  
  return (
    <div className={isBackgroundRed ? 'background-red' : 'background-blue'} />
  );
}

export default App;