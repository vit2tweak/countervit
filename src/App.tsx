import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">CounterVit</h1>
        <p className="app-subtitle">A modern counter application</p>
      </header>
      
      <main className="app-main">
        <Counter />
      </main>
      
      <footer className="app-footer">
        <p>Built with React, TypeScript & Vite</p>
      </footer>
    </div>
  );
};

export default App;