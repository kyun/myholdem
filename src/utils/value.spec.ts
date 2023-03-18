import { getRanking } from "./value";

describe("test", () => {
  it("test1", () => {
    expect(getRanking(["S1", "S2", "S3", "S4", "S5"])).toEqual("SF5");
    expect(getRanking(["S1", "H1", "D1", "C1", "S5"])).toEqual("FK1");
  });
});
