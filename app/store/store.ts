import { create } from 'zustand';
import { createCounterModel } from './counter/counter.model';
import { CounterState } from './counter/counter.types';

type AppState = CounterState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createCounterModel(...a),
}));
