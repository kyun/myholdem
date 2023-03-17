type Shape = "S" | "H" | "C" | "D";

type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export const preflop = ([card1, card2]: Array<{
  shape: Shape;
  number: Number;
}>) => {
  console.log(card1, card2);
};

const SHAPE: Shape[] = ["S", "H", "C", "D"];
export const NUMBER: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const generateHands2 = ([num1, num2]: Number[], isSuited: boolean) => {
  const hands: Array<
    Array<{
      shape: Shape;
      number: Number;
    }>
  > = [];
  if (isSuited) {
    SHAPE.forEach((shape) => {
      hands.push([
        { shape, number: num1 },
        { shape, number: num2 },
      ]);
    });
  } else {
    SHAPE.forEach((shape1, index) => {
      SHAPE.slice(index + 1).forEach((shape2) => {
        hands.push([
          { shape: shape1, number: num1 },
          { shape: shape2, number: num2 },
        ]);
      });
    });
  }

  return hands;
};

export const generateHands = ([num1, num2]: Number[], isSuited: boolean) => {
  const hands: Array<string> = [];
  if (isSuited) {
    SHAPE.forEach((shape) => {
      hands.push(`${shape}${num1},${shape}${num2}`);
    });
  } else {
    SHAPE.forEach((shape1, index) => {
      SHAPE.slice(index + 1).forEach((shape2) => {
        hands.push(`${shape1}${num1},${shape2}${num2}`);
      });
    });
  }

  return hands;
};
