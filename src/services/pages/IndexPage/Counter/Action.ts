import type { SimplePrepareAction } from "@app/types/for-human-redux";
import { createAction, PrepareAction } from "@reduxjs/toolkit";

export type IncrementActionPayload = {
  amount: number;
};

type _IncrementAction = PrepareAction<IncrementActionPayload>;
export type IncrementAction = SimplePrepareAction<IncrementActionPayload>;

export const increment = createAction<_IncrementAction>("increment", (amount: number): SimplePrepareAction<IncrementActionPayload> => {
  return {
    payload: {
      amount,
    },
  };
});

export type DecrementActionPayload = {
  amount: number;
};

type _DecrementAction = PrepareAction<DecrementActionPayload>;
export type DecrementAction = SimplePrepareAction<DecrementActionPayload>;

export const decrement = createAction<_DecrementAction>("recrement", (amount: number): SimplePrepareAction<DecrementActionPayload> => {
  return {
    payload: {
      amount,
    },
  };
});

export type Types = IncrementAction | DecrementAction;
