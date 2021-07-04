import { createStore as createReduxStore } from "redux";
import * as Pages from "./pages";

export interface Store {
  getState: () => Pages.IndexPage.State;
}

export const createStore = () => {
  const initialState: Pages.IndexPage.State = Pages.IndexPage.initialState;
  const reduxStore = createReduxStore(Pages.IndexPage.reducer, initialState);
  return {
    dispatch: reduxStore.dispatch,
    getState: reduxStore.getState,
    replaceReducer: reduxStore.replaceReducer,
    subscribe: reduxStore.subscribe,
  };
};
