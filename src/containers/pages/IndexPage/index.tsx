import * as React from "react";
import { useStore, Store } from "@app/context";
import { IndexPage as View } from "@app/components";
import * as Counter from "./Counter";

// import { createSelectorHook } from "react-redux";

const generateProps = (store: Store): View.Props => {
  return {
    total: Counter.generateProps(store),
    incrementButton: {
      onClick: () => {

        store.dispatch({
          type: "increment",
          amount: 100,
        })
      },
      children: "Cont Up",
    },
  };
};

const IndexPageContainer: React.VFC = () => {
  const store = useStore();
  const props = generateProps(store);
  return <View.Component {...props} />;
};

export const Component = IndexPageContainer;
