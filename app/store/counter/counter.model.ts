import { StateCreator } from 'zustand';
import { CounterState } from './counter.types';

export const createCounterModel: StateCreator<
  CounterState,
  [],
  [],
  CounterState
> = set => ({
  count: 0,
  actions: {
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
  },
});
