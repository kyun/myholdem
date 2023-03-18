import { getRanks, parseHands, STRAITGHTS, SHAPES } from "./common";

export const isSuited = (hands: Array<string>): boolean => {
  return hands.map(([s]) => s).every((shape, _, arr) => shape === arr[0]);
};

export const isValid = (hands: Array<string>): boolean => {
  const { shapes, ranks } = parseHands(hands);
  if (
    shapes.every((shape) => SHAPES.includes(shape)) &&
    ranks.every((rank) => rank >= 1 && rank <= 13)
  ) {
    return true;
  }
  return false;
};

export const isRoyalFlush = (hands: Array<string>): boolean => {
  const ranks = getRanks(hands);
  if (isSuited(hands) && ranks.toString() === "1,10,11,12,13") {
    return true;
  }
  return false;
};
export const isRF = (hands: Array<string>): boolean => {
  return isRoyalFlush(hands);
};

export const isStraight = (hands: Array<string>): boolean => {
  const ranks = getRanks(hands);
  return STRAITGHTS.includes(ranks.toString());
};

export const isFlush = (hands: Array<string>): boolean => {
  const { shapes } = parseHands(hands);
  const count = shapes.reduce((acc: any, shape) => {
    if (acc[shape]) {
      acc[shape] += 1;
    } else {
      acc[shape] = 1;
    }
    return acc;
  }, {});
  if (Object.values(count).includes(5)) {
    return true;
  }
  return false;
};
