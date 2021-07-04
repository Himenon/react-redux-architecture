import * as React from "react";
import { useStore, useSelector, Store, State } from "@app/context";
import { IndexPage as View } from "@app/components";
import * as Counter from "./Counter";

// import { createSelectorHook } from "react-redux";

const generateProps = (store: Store, state: State): View.Props => {
  return {
    total: Counter.generateProps(store, state),
    incrementButton: {
      onClick: () => {
        store.dispatch({
          type: "increment",
          payload: {
            amount: 100,
            hoge: 100,
          },
        });
      },
      children: "Count Up",
    },
  };
};

const IndexPageContainer: React.VFC = () => {
  const store = useStore();
  const state = useSelector(state => state);
  const props = generateProps(store, state);
  return <View.Component {...props} />;
};

export const Component = IndexPageContainer;
