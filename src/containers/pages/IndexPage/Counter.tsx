import type { Store } from "@app/context";
import { IndexPage as View } from "@app/components";

export const generateProps = (store: Store): View.Props["total"] => {
  const state = store.getState();
  return {
    children: state.counter.total,
  };
};
