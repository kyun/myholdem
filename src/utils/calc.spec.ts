// calc.spec.ts
import {
  isValid,
  calculateHandRank,
  getMostDuplicate,
  isRoyalStraightFlush,
  isSuited,
  isStraightFlush,
  isFourCard,
  isFlush,
  isTwoPair,
  isFullHouse,
} from "./calc";

describe("Value Validation", () => {
  it("should return true for valid value", () => {
    expect(isValid("S1")).toEqual(true);
    expect(isValid("H13")).toEqual(true);
    expect(isValid("C12")).toEqual(true);
    expect(isValid("D10")).toEqual(true);
  });

  it("should return false for invalid value", () => {
    expect(isValid("S0")).toEqual(false);
    expect(isValid("H14")).toEqual(false);
    expect(isValid("C15")).toEqual(false);
    expect(isValid("D16")).toEqual(false);
    expect(isValid("E1")).toEqual(false);
    expect(isValid("")).toEqual(false);
  });
});

describe("Calculate Hand Rank", () => {
  // it("should return '로얄 스트레이트 플러시' for 'S1 S10 S11 S12 S13'", () => {
  //   expect(calculateHandRank(["S1", "S10", "S11", "S12", "S13"])).toEqual(
  //     "로얄 스트레이트 플러시"
  //   );
  // });

  // it("should return '스트레이트 플러시' for 'S1 S2 S3 S4 S5'", () => {
  //   expect(calculateHandRank(["S1", "S2", "S3", "S4", "S5"])).toEqual(
  //     "스트레이트 플러시"
  //   );
  // });

  // it("should return '포카드'", () => {
  //   expect(calculateHandRank(["S1", "S11", "H1", "D1", "C1"])).toEqual(
  //     "포카드"
  //   );
  //   expect(calculateHandRank(["S1", "S11", "H11", "D11", "C11"])).toEqual(
  //     "포카드"
  //   );
  // });

  // it("should return '풀하우스'", () => {
  //   expect(calculateHandRank(["S1", "S11", "H1", "D11", "C1"])).toEqual(
  //     "풀하우스"
  //   );
  // });

  it("isSuited", () => {
    expect(isSuited(["S1", "S2", "S3", "S4", "S5"])).toEqual(true);
    expect(isSuited(["S1", "H2", "S3", "S4", "S5"])).toEqual(false);
    expect(isSuited(["S1", "S2", "S3"])).toEqual(true);
  });

  it("isRoyalStraightFlush", () => {
    expect(isRoyalStraightFlush(["S1", "S10", "S11", "S12", "S13"])).toEqual(
      true
    );
  });

  it("isStraightFlush", () => {
    expect(isStraightFlush(["S1", "S2", "S3", "S4", "S5"])).toEqual(true);
    expect(isStraightFlush(["S1", "S2", "S3", "S4", "S6"])).toEqual(false);
    expect(isStraightFlush(["S1", "S10", "S11", "S12", "S13"])).toEqual(false);
    expect(isStraightFlush(["S9", "S10", "S11", "S12", "S13"])).toEqual(true);
  });

  it("isFourCard", () => {
    expect(isFourCard(["S1", "S11", "H1", "D1", "C1"])).toEqual(true);
    expect(isFourCard(["S1", "S11", "H11", "D11", "C11"])).toEqual(true);
    expect(isFourCard(["S1", "S11", "H11", "D11", "C1"])).toEqual(false);
  });

  it("isFlush", () => {
    expect(isFlush(["S1", "S2", "S3", "S4", "S5"])).toEqual(false);
    expect(isFlush(["S1", "S2", "S3", "S4", "H5"])).toEqual(false);
    expect(isFlush(["S1", "S3", "S4", "S5", "S6"])).toEqual(true);
    expect(isFlush(["S1", "S10", "S11", "S12", "S13"])).toEqual(false);
    expect(isFlush(["S9", "S10", "S11", "S12", "S13"])).toEqual(false);
  });
  it("isTwoPair", () => {
    expect(isTwoPair(["S1", "S11", "H1", "D11", "C1"])).toEqual(false);
    expect(isTwoPair(["S1", "S11", "H1", "D11", "C2"])).toEqual(true);
  });

  it("isFullHouse", () => {
    expect(isFullHouse(["S1", "S11", "H1", "D11", "C1"])).toEqual(true);
    expect(isFullHouse(["S1", "S11", "H1", "D11", "C2"])).toEqual(false);
  });
});
