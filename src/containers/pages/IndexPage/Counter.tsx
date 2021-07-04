import { useSelector } from "@app/context";
import { IndexPage as View } from "@app/components";

export const generateProps = (): View.Props["total"] => {
  const state = useSelector(state => state);
  console.log(`total = ${state.counter.total}`);
  return {
    children: state.counter.total,
  };
};
