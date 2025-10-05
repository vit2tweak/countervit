import { CounterState, COUNTER_STORAGE_KEY, DEFAULT_COUNTER_STATE } from '../types/counter';

/**
 * Save counter state to localStorage
 */
export const saveCounterState = async (state: CounterState): Promise<void> => {
  try {
    const serializedState = JSON.stringify({
      ...state,
      lastUpdated: Date.now(),
    });
    localStorage.setItem(COUNTER_STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Failed to save counter state:', error);
    throw new Error('Unable to save counter state to storage');
  }
};

/**
 * Load counter state from localStorage
 */
export const loadCounterState = async (): Promise<CounterState> => {
  try {
    const serializedState = localStorage.getItem(COUNTER_STORAGE_KEY);
    
    if (!serializedState) {
      return DEFAULT_COUNTER_STATE;
    }

    const parsedState = JSON.parse(serializedState);
    
    // Validate the loaded state structure
    if (typeof parsedState.count !== 'number' || typeof parsedState.lastUpdated !== 'number') {
      console.warn('Invalid counter state structure, using default');
      return DEFAULT_COUNTER_STATE;
    }

    return {
      count: parsedState.count,
      lastUpdated: parsedState.lastUpdated,
    };
  } catch (error) {
    console.error('Failed to load counter state:', error);
    return DEFAULT_COUNTER_STATE;
  }
};

/**
 * Clear counter state from localStorage
 */
export const clearCounterState = async (): Promise<void> => {
  try {
    localStorage.removeItem(COUNTER_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear counter state:', error);
    throw new Error('Unable to clear counter state from storage');
  }
};

/**
 * Check if localStorage is available
 */
export const isStorageAvailable = (): boolean => {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get storage info for debugging
 */
export const getStorageInfo = (): { available: boolean; hasCounterData: boolean } => {
  return {
    available: isStorageAvailable(),
    hasCounterData: localStorage.getItem(COUNTER_STORAGE_KEY) !== null,
  };
};