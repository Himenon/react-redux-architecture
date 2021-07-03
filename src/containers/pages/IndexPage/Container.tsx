import * as React from "react";

import { IndexPage as View } from "@app/components";
import { IndexPage as Store } from "@app/stores";

export { Store };

export interface Props {
  store: Store;
}

const IndexPageContainer: React.VFC<Props> = ({ store }: Props) => {
  const props = store.generateProps();
  return <View.Component {...props} />;
};

export const Component = IndexPageContainer;

