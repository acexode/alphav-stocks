import React from 'react';
import StockData from './components/StockData';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <StockData symbol="IBM" />
    </div>
  );
};

export default App;

