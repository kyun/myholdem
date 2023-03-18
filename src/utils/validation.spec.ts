import { isValid, isSuited, isRF } from "./valiation";

describe("Card Validation Check (isSuited, isValid) ", () => {
  it("isSuited:\tshould return 'true' for if the card is suited", () => {
    expect(isSuited(["S1", "S2", "S3", "S4", "S5"])).toEqual(true);
    expect(isSuited(["H1", "H2", "H3", "H4", "H5"])).toEqual(true);
    expect(isSuited(["D1", "D2", "D3", "D4", "D5"])).toEqual(true);
    expect(isSuited(["C1", "C2", "C3", "C4", "C5"])).toEqual(true);
    expect(isSuited(["S1", "S2", "S3", "S4"])).toEqual(true);
    expect(isSuited(["H1", "H2", "H3"])).toEqual(true);
    expect(isSuited(["D1", "D2"])).toEqual(true);
    expect(isSuited(["C1"])).toEqual(true);
  });
  it("isSuited:\tshould return 'false' for if the card is not suited", () => {
    expect(isSuited(["S1", "S2", "S3", "S4", "H5"])).toEqual(false);
    expect(isSuited(["S1", "S2", "S3", "H4", "H5"])).toEqual(false);
    expect(isSuited(["S1", "S2", "H3", "H4", "H5"])).toEqual(false);
    expect(isSuited(["S1", "H2", "H3", "H4", "H5"])).toEqual(false);
    expect(isSuited(["S1", "S2", "S3", "H4"])).toEqual(false);
    expect(isSuited(["S1", "S2", "H3"])).toEqual(false);
    expect(isSuited(["S1", "H2"])).toEqual(false);
  });

  it("isValid:\tshould return 'true' for if the card is valid", () => {
    expect(isValid(["S1"])).toEqual(true);
    expect(isValid(["H13"])).toEqual(true);
    expect(isValid(["C12"])).toEqual(true);
    expect(isValid(["D10"])).toEqual(true);
    expect(isValid(["S1", "S2", "S3", "S4", "S5"])).toEqual(true);
    expect(isValid(["H1", "H2", "H3", "H4", "H5"])).toEqual(true);
    expect(isValid(["D1", "D2", "D3", "D4", "D5"])).toEqual(true);
    expect(isValid(["C1", "C2", "C3", "C4", "C5"])).toEqual(true);
    expect(isValid(["S1", "S2", "S3", "S4"])).toEqual(true);
    expect(isValid(["H1", "H2", "H3"])).toEqual(true);
    expect(isValid(["D1", "D2"])).toEqual(true);
    expect(isValid(["C1"])).toEqual(true);
    expect(
      isValid([
        "S1",
        "S2",
        "S3",
        "S4",
        "S5",
        "S6",
        "S7",
        "S8",
        "S9",
        "S10",
        "S11",
        "S12",
        "S13",
      ])
    ).toEqual(true);
  });
  it("isValid:\tshould return 'false' for if the card is not valid", () => {
    expect(isValid(["S0"])).toEqual(false);
    expect(isValid(["H14"])).toEqual(false);
    expect(isValid(["C15"])).toEqual(false);
    expect(isValid(["D16"])).toEqual(false);
    expect(isValid(["Z1"])).toEqual(false);
    expect(isValid(["B13"])).toEqual(false);
    expect(isValid(["A12"])).toEqual(false);
    expect(isValid(["S1", "S2", "S3", "S4", "S5", "S0"])).toEqual(false);
    expect(isValid(["H1", "H2", "H3", "H4", "H5", "H0"])).toEqual(false);
  });
});

describe("Hand Ranking Check", () => {
  it("isRoyalFlush:\tshould return 'true' for if the card is Royal Straight Flush", () => {
    expect(isRF(["S1", "S10", "S11", "S12", "S13"])).toEqual(true);
    expect(isRF(["H1", "H10", "H11", "H12", "H13"])).toEqual(true);
    expect(isRF(["D1", "D10", "D11", "D12", "D13"])).toEqual(true);
    expect(isRF(["C1", "C10", "C11", "C12", "C13"])).toEqual(true);
  });
});
