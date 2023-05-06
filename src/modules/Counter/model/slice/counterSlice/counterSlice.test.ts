import { counterReducer, counterActions } from "./counterSlice";

import { ICounterSchema } from "modules/Counter";

describe("counterSlice", () => {
  it("should increment", () => {
    const state: ICounterSchema = { value: 1 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 2,
    });
  });

  it("should decrement", () => {
    const state: ICounterSchema = { value: 1 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 0,
    });
  });

  it("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
