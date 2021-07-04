import type { SimplePrepareAction } from "@app/types/for-human-redux";
import { createAction } from "@reduxjs/toolkit";

export type IncrementActionPayload = {
  amount: number;
};

export type IncrementAction = SimplePrepareAction<IncrementActionPayload>;

export const increment = createAction("counter/increment", (amount: number): SimplePrepareAction<IncrementActionPayload> => {
  return {
    payload: {
      amount,
    },
  };
});

export type DecrementActionPayload = {
  amount: number;
};

export type DecrementAction = SimplePrepareAction<DecrementActionPayload>;

export const decrement = createAction("counter/decrement", (amount: number): SimplePrepareAction<DecrementActionPayload> => {
  return {
    payload: {
      amount,
    },
  };
});
