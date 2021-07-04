import * as Counter from "./Counter";

export const actions = {
  counter: Counter.Action,
};

actions.counter.decrement(100);

export type Types = Counter.Action.Types;
