import * as React from "react";

import * as Service from "@app/services/pages/IndexPage";
import { createSelectorHook, createStoreHook, Provider, ReactReduxContextValue } from "react-redux";

export type State = Service.State;
export type Store = Service.Store;

const contextValue: ReactReduxContextValue = {
  store: Service.createStore(),
  storeState: Service.initialState,
};

export const IndexPageContext = React.createContext(contextValue);

export const useStore = createStoreHook<Service.State>(IndexPageContext);
export const useSelector = createSelectorHook<Service.State>(IndexPageContext);

export const IndexPageProvider: React.FC = props => {
  const store = Service.createStore();
  return (
    <Provider store={store} context={IndexPageContext}>
      {props.children}
    </Provider>
  );
};
