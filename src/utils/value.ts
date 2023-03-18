import { parseHands } from "./common";

export const getRanking = (hands: Array<string>): string => {
  // it return 'RF', 'SF{highRank}', 'FK{highRank}', 'FH{highRank}', 'F{highRank}', 'S{highRank}', 'TK{highRank}', 'TP{highRank}', 'OP{highRank}', 'HC{highRank}'
  const { shapes, ranks } = parseHands(hands);
  const count = ranks.reduce((acc: any, rank) => {
    if (acc[rank]) {
      acc[rank] += 1;
    } else {
      acc[rank] = 1;
    }
    return acc;
  }, {});
  const rankCount: number[] = Object.values(count);
  const rankCountMax = Math.max(...rankCount);
  const rankCountMin = Math.min(...rankCount);
  const rankCountMaxCount = rankCount.filter((c) => c === rankCountMax).length;
  const rankCountMinCount = rankCount.filter((c) => c === rankCountMin).length;
  const rankCountMaxRank = Object.keys(count).find(
    (k) => count[k] === rankCountMax
  );
  const rankCountMinRank = Object.keys(count).find(
    (k) => count[k] === rankCountMin
  );
  const rankCountMaxRanks = Object.keys(count).filter(
    (k) => count[k] === rankCountMax
  );
  const rankCountMinRanks = Object.keys(count).filter(
    (k) => count[k] === rankCountMin
  );
  const rankCountMaxRanksLength = rankCountMaxRanks.length;
  const rankCountMinRanksLength = rankCountMinRanks.length;
  const rankCountMaxRanksMax = Math.max(
    ...rankCountMaxRanks.map((r) => Number(r))
  );
  const rankCountMaxRanksMin = Math.min(
    ...rankCountMaxRanks.map((r) => Number(r))
  );

  const isSuited = shapes.every((shape) => shape === shapes[0]);
  const isStraight = ranks.every(
    (rank, i, arr) => i === 0 || rank === arr[i - 1] + 1
  );
  const isStraightFlush = isSuited && isStraight;
  const isRoyalFlush = isStraightFlush && ranks.toString() === "1,10,11,12,13";
  const isFourOfAKind = rankCountMax === 4;
  const isFullHouse = rankCountMax === 3 && rankCountMin === 2;
  const isThreeOfAKind = rankCountMax === 3 && rankCountMin === 1;
  const isTwoPair = rankCountMax === 2 && rankCountMin === 2;
  const isOnePair = rankCountMax === 2 && rankCountMin === 1;
  const isHighCard = rankCountMax === 1 && rankCountMin === 1;
  const isFlush = isSuited && !isStraight;

  if (isRoyalFlush) {
    return "RF";
  }
  if (isStraightFlush) {
    return `SF${rankCountMaxRanksMax}`;
  }
  if (isFourOfAKind) {
    return `FK${rankCountMaxRank}`;
  }
  if (isFullHouse) {
    return `FH${rankCountMaxRank}`;
  }
  if (isFlush) {
    return `F${rankCountMaxRanksMax}`;
  }
  if (isStraight) {
    return `S${rankCountMaxRanksMax}`;
  }
  if (isThreeOfAKind) {
    return `TK${rankCountMaxRank}`;
  }
  if (isTwoPair) {
    return `TP${rankCountMaxRanksMax}`;
  }
  if (isOnePair) {
    return `OP${rankCountMaxRank}`;
  }
  if (isHighCard) {
    return `HC${rankCountMaxRanksMax}`;
  }
  return "";
};
