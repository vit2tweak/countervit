import { useState, useEffect, useCallback } from 'react';
import { CounterState } from '../types/counter';
import { saveCounterState, loadCounterState } from '../utils/storage';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [state, setState] = useState<CounterState>({
    count: initialValue,
    isLoading: true,
    error: null,
  });

  // Load initial state from storage
  useEffect(() => {
    const loadInitialState = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        
        const savedState = await loadCounterState();
        
        setState({
          count: savedState?.count ?? initialValue,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Failed to load counter state:', error);
        setState({
          count: initialValue,
          isLoading: false,
          error: 'Failed to load saved state',
        });
      }
    };

    loadInitialState();
  }, [initialValue]);

  // Save state to storage whenever count changes
  useEffect(() => {
    if (!state.isLoading && state.error === null) {
      const saveState = async () => {
        try {
          await saveCounterState({ count: state.count });
        } catch (error) {
          console.error('Failed to save counter state:', error);
          // Don't set error state for save failures to avoid disrupting UX
        }
      };

      saveState();
    }
  }, [state.count, state.isLoading, state.error]);

  const increment = useCallback(() => {
    setState(prev => {
      if (prev.isLoading) return prev;
      
      const newCount = prev.count + 1;
      
      // Prevent overflow
      if (newCount > Number.MAX_SAFE_INTEGER) {
        return {
          ...prev,
          error: 'Maximum value reached',
        };
      }
      
      return {
        ...prev,
        count: newCount,
        error: null,
      };
    });
  }, []);

  const decrement = useCallback(() => {
    setState(prev => {
      if (prev.isLoading) return prev;
      
      const newCount = prev.count - 1;
      
      // Prevent underflow
      if (newCount < Number.MIN_SAFE_INTEGER) {
        return {
          ...prev,
          error: 'Minimum value reached',
        };
      }
      
      return {
        ...prev,
        count: newCount,
        error: null,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState(prev => {
      if (prev.isLoading) return prev;
      
      return {
        ...prev,
        count: initialValue,
        error: null,
      };
    });
  }, [initialValue]);

  return {
    count: state.count,
    increment,
    decrement,
    reset,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default useCounter;