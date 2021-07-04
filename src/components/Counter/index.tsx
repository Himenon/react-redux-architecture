import * as React from "react";

export interface Props {
  count: React.HTMLAttributes<HTMLDivElement>;
  incrementButton: React.HTMLAttributes<HTMLButtonElement>;
}

const Counter: React.VFC<Props> = (props: Props) => {
  return (
    <div>
      <div {...props.count} />
      <button {...props.incrementButton} />
    </div>
  );
};

export { Counter as Component };
