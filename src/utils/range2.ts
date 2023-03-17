export const UTG_MAX_6_RANGE = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// get x,y from 2d array when value is 1
export const getXY = (arr: number[][]) => {
  const result: number[][] = [];
  arr.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value === 1) {
        result.push([x + 1, y + 1]);
      }
    });
  });
  return result;
};

const isSuited = (hand1: string, hand2: string) => {
  const shape1 = hand1[0];
  const shape2 = hand2[0];
  return shape1 === shape2;
};
const getHandValue = (hand: string) => {
  const value = hand.slice(1);
  return Number(value);
};

// input 2 hands and return its x,y
export const getXYFromHands = (hand1: string, hand2: string) => {
  const x = getHandValue(hand1);
  const y = getHandValue(hand2);
  if (isSuited(hand1, hand2)) {
    return [x, y];
  }
  return [y, x];
};
