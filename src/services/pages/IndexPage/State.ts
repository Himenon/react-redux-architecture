import * as Counter from "./Counter";

export interface State {
  counter: Counter.State;
}

export const initialState: State = {
  counter: Counter.initialState,
};
