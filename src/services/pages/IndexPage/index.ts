import { combineReducers } from "redux";
import { initialState, State } from "./State";
import * as Counter from "./Counter";

export { initialState, State };

export const reducer = combineReducers<State>({
  counter: Counter.reducer,
});
