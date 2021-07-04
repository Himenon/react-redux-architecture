import { useSelector } from "@app/hooks/pages/IndexPage";
import { IndexPage as View } from "@app/components";

export const generateProps = (): View.Props["total"] => {
  const state = useSelector(state => state);
  return {
    children: state.counter.total,
  };
};
