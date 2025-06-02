import { create } from 'zustand';
import { createCounterModel } from './counter.model';
import { CounterState } from './counter.types';

type AppState = CounterState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createCounterModel(...a),
}));
