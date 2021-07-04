import * as React from "react";
import { useDispatch } from "@app/hooks/pages/IndexPage";
import { IndexPage as View } from "@app/components";
import * as Counter from "./Counter";

const generateProps = (): View.Props => {
  const dispatch = useDispatch();
  return {
    total: Counter.generateProps(),
    incrementButton: {
      onClick: () => {
        dispatch({
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
  const props = generateProps();
  return <View.Component {...props} />;
};

export const Component = IndexPageContainer;
