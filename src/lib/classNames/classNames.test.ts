import { classNames } from "./classNames";

describe("classNames", () => {
  it("should return correct className", () => {
    expect(classNames("a", "b", "c")).toBe("a b c");
  });

  it("should return correct className with udnefined", () => {
    expect(classNames("a", undefined, "b", "c")).toBe("a b c");
  });
});
