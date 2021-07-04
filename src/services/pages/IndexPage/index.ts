import { combineReducers, compose } from "redux";
import { initialState, State } from "./State";
import * as Counter from "./Counter";
import * as Action from "./Action";
import { createStore as createReduxStore, Store as ReduxStore } from "redux";

export { initialState, State, Action };

const createReducer = () => {
  const reducer = combineReducers<State>({
    counter: Counter.reducer,
  });
  return reducer;
};

export interface Store extends ReduxStore<State> {
  getState: () => State;
}

export const createStore = (): Store => {
  const reducer = createReducer();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const reduxStore = createReduxStore(reducer, initialState, composeEnhancers());
  return {
    dispatch: reduxStore.dispatch,
    getState: reduxStore.getState,
    replaceReducer: reduxStore.replaceReducer,
    subscribe: reduxStore.subscribe,
    [Symbol.observable]: reduxStore[Symbol.observable],
  };
};
