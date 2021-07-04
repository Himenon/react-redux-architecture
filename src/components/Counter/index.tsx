import * as React from "react";

export interface Props {
  total: React.HTMLAttributes<HTMLDivElement>;
  incrementButton: React.HTMLAttributes<HTMLButtonElement>;
}

const Counter: React.VFC<Props> = (props: Props) => {
  return (
    <div>
      <div {...props.total} />
      <button {...props.incrementButton} />
    </div>
  );
};

export { Counter as Component };
