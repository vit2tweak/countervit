import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './Counter.css';

const Counter: React.FC = () => {
  const { count, increment, decrement, reset, isLoading, error } = useCounter();

  if (error) {
    return (
      <div className="counter-error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="counter-button counter-button-reset">
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="counter-display">
          <span className="counter-label">Current Count</span>
          <div className="counter-value" data-testid="counter-value">
            {isLoading ? '...' : count}
          </div>
        </div>
        
        <div className="counter-controls">
          <button
            onClick={decrement}
            disabled={isLoading}
            className="counter-button counter-button-decrement"
            aria-label="Decrease counter"
            data-testid="decrement-button"
          >
            <span className="counter-button-icon">−</span>
            <span className="counter-button-text">Decrease</span>
          </button>
          
          <button
            onClick={reset}
            disabled={isLoading}
            className="counter-button counter-button-reset"
            aria-label="Reset counter"
            data-testid="reset-button"
          >
            <span className="counter-button-icon">↻</span>
            <span className="counter-button-text">Reset</span>
          </button>
          
          <button
            onClick={increment}
            disabled={isLoading}
            className="counter-button counter-button-increment"
            aria-label="Increase counter"
            data-testid="increment-button"
          >
            <span className="counter-button-icon">+</span>
            <span className="counter-button-text">Increase</span>
          </button>
        </div>
        
        <div className="counter-info">
          <p className="counter-persistence-note">
            Your count is automatically saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;