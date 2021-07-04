import * as React from "react";
import * as BasePage from "./Common/BasePage";
import * as Counter from "./Counter";

export interface Props extends BasePage.Props {
  heading: React.HTMLAttributes<HTMLHeadingElement>;
  counter: Counter.Props;
}

const IndexPage: React.VFC<Props> = (props: Props) => {
  return (
    <BasePage.Component {...props}>
      <div className={["container"].join(" ")}>
        <h1 {...props.heading} />
      </div>
      <Counter.Component {...props.counter} />
    </BasePage.Component>
  );
};


export { IndexPage as Component };
