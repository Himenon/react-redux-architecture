import type { Store, State } from "@app/context";
import { IndexPage as View } from "@app/components";

export const generateProps = (store: Store, state: State): View.Props["total"] => {
  console.log(`total = ${state.counter.total}`);
  return {
    children: state.counter.total,
  };
};
