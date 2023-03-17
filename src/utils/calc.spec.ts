// calc.spec.ts
import { hello } from "./calc";

describe("hello", () => {
  it("should return hello world", () => {
    expect(hello()).toEqual("Hello World");
  });
});
