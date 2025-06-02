export interface CounterActions {
  increment: () => void;
  decrement: () => void;
}
export interface CounterState {
  count: number;
  actions: CounterActions;
}
