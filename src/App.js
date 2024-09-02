import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 m-2 border-2 border-offwhite rounded">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
