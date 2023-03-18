export const getRanks = (hands: Array<string>): Array<number> => {
  return hands
    .map((hand) => hand.slice(1))
    .map((rank) => Number(rank))
    .sort();
};

export const parseHands = (
  hands: Array<string>
): { shapes: Array<string>; ranks: Array<number> } => {
  const [shapes, ranks] = hands.reduce(
    (acc: [Array<string>, Array<number>], hand) => {
      acc[0].push(hand[0]);
      acc[1].push(Number(hand.slice(1)));
      return acc;
    },
    [[], []]
  );
  return { shapes, ranks };
};

export const STRAITGHTS = [
  "1,2,3,4,5",
  "2,3,4,5,6",
  "3,4,5,6,7",
  "4,5,6,7,8",
  "5,6,7,8,9",
  "6,7,8,9,10",
  "7,8,9,10,11",
  "8,9,10,11,12",
  "9,10,11,12,13",
  "1,10,11,12,13",
];
export const SHAPES = ["S", "H", "C", "D"];
