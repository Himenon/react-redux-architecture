import * as React from "react";

import * as Service from "@app/services/pages/IndexPage";
import { Provider as ReduxProvider, ReactReduxContextValue } from "react-redux";

export type State = Service.State;
export type Store = Service.Store;

const contextValue: ReactReduxContextValue = {
  store: Service.createStore(),
  storeState: Service.initialState,
};

export const Context = React.createContext(contextValue);

export const Provider: React.FC = props => {
  const store = Service.createStore();
  return (
    <ReduxProvider store={store} context={Context}>
      {props.children}
    </ReduxProvider>
  );
};
