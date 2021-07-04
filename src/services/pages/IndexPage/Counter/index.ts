import { createReducer } from "@reduxjs/toolkit";
import * as Action from "./Action";
import { initialState, State } from "./State";

export { Action, State, initialState };

export const reducer = createReducer(initialState, builder => {
  builder.addCase(Action.increment, (state: State, action) => {
    return {
      ...state,
      total: state.total + action.payload.amount,
    };
  });
  builder.addCase(Action.decrement, (state: State, action: Action.DecrementAction) => {
    return {
      ...state,
      total: state.total - action.payload.amount,
    };
  });
});
