export interface CounterState {
  count: number;
  lastUpdated: number;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface CounterHookReturn extends CounterActions {
  count: number;
  isLoading: boolean;
  error: string | null;
}

export interface StorageAdapter {
  save: (key: string, data: CounterState) => Promise<void> | void;
  load: (key: string) => Promise<CounterState | null> | CounterState | null;
  clear: (key: string) => Promise<void> | void;
}

export const COUNTER_STORAGE_KEY = 'counterVit_state';

export const DEFAULT_COUNTER_STATE: CounterState = {
  count: 0,
  lastUpdated: Date.now(),
};