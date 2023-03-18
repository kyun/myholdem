export function isValid(value: string): boolean {
  const SHAPE = ["S", "H", "C", "D"];
  if (value.length < 2 || value.length > 3) {
    return false;
  }
  const shape = value[0];
  const number = Number(value.slice(1));
  if (!SHAPE.includes(shape) || isNaN(number) || number < 1 || number > 13) {
    return false;
  }
  return true;
}

export function calculateHandRank(hand: Array<string>): string {
  // 카드 문양과 숫자를 따로 분리하여 저장하는 배열
  const suits: Array<string> = hand.map((card) => card.charAt(0));
  const ranks: Array<number> = hand.map((card) => parseInt(card.slice(1)));

  // 입력한 핸드의 모든 카드가 동일한 문양인 경우
  if (suits.every((val, i, arr) => val === arr[0])) {
    // 입력한 핸드가 로얄 스트레이트 플러시인 경우
    if (ranks.sort().toString() === "1,10,11,12,13") {
      return "로얄 스트레이트 플러시";
    }
    // 입력한 핸드가 스트레이트 플러시인 경우
    if (
      ranks.sort().toString() === "1,2,3,4,5" ||
      ranks.sort().toString() === "2,3,4,5,6" ||
      ranks.sort().toString() === "3,4,5,6,7" ||
      ranks.sort().toString() === "4,5,6,7,8" ||
      ranks.sort().toString() === "5,6,7,8,9" ||
      ranks.sort().toString() === "6,7,8,9,10" ||
      ranks.sort().toString() === "7,8,9,10,11" ||
      ranks.sort().toString() === "8,9,10,11,12" ||
      ranks.sort().toString() === "9,10,11,12,13" ||
      ranks.sort().toString() === "1,10,11,12,13"
    ) {
      return "스트레이트 플러시";
    }
    // 입력한 핸드가 플러시인 경우
    return "플러시";
  }

  // 입력한 핸드에서 중복된 숫자의 개수를 구하는 함수
  const countDuplicates = (arr: Array<number>): number => {
    let counts: { [key: number]: number } = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    return Object.values(counts).reduce((sum, x) => sum + (x > 1 ? x : 0), 0);
  };

  // 입력한 핸드에서 가장 많이 중복된 숫자와 개수를 {number, count} 형태로 리턴하는 함수, 중복된 숫자가 없는 경우 가장 큰 숫자와 개수를 {number, count} 형태로 리턴합니다.
  const getMostDuplicate = (
    arr: Array<number>
  ): { number: number; count: number } => {
    let counts: { [key: string]: number } = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    let maxCount: number = 0;
    let maxNumber: number = 0;
    Object.keys(counts).forEach((key) => {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        maxNumber = Number(key);
      }
    });
    if (maxCount === 1) {
      maxNumber = Math.max(...arr);
    }
    return { number: maxNumber, count: maxCount };
  };

  // 입력한 핸드에서 중복된 숫자를 제외한 가장 높은 숫자를 구하는 함수
  const getHighCard = (arr: Array<number>): number => {
    let highCard: number = 0;
    arr.forEach((x) => {
      if (x > highCard && ranks.indexOf(x) === ranks.lastIndexOf(x)) {
        highCard = x;
      }
    });
    return highCard;
  };
  // 입력한 핸드에서 가장 높은 숫자와 중복된 숫자의 개수를 계산하는 변수
  const maxRank: number = Math.max(...ranks);
  const duplicateCount: number = countDuplicates(ranks);
  const highest = getHighCard(ranks);

  // 입력한 핸드가 포카드인 경우
  if (duplicateCount === 4) {
    return `포카드`;
  }
  // 입력한 핸드가 풀 하우스인 경우
  if (
    duplicateCount === 3 &&
    ranks
      .filter((x) => x !== ranks[ranks.indexOf(maxRank)])
      .every((val, i, arr) => val === arr[0])
  ) {
    return "풀 하우스";
  }
  // 입력한 핸드가 스트레이트인 경우
  if (
    ranks.sort().toString() === "1,2,3,4,5" ||
    ranks.sort().toString() === "2,3,4,5,6" ||
    ranks.sort().toString() === "3,4,5,6,7" ||
    ranks.sort().toString() === "4,5,6,7,8" ||
    ranks.sort().toString() === "5,6,7,8,9" ||
    ranks.sort().toString() === "6,7,8,9,10" ||
    ranks.sort().toString() === "7,8,9,10,11" ||
    ranks.sort().toString() === "8,9,10,11,12" ||
    ranks.sort().toString() === "9,10,11,12,13" ||
    ranks.sort().toString() === "1,10,11,12,13"
  ) {
    return "스트레이트";
  }

  // 입력한 핸드가 쓰리카드인 경우
  if (duplicateCount === 3) {
    return "쓰리카드";
  }
  // 입력한 핸드가 투페어인 경우
  if (
    duplicateCount === 2 &&
    ranks
      .filter(
        (x) =>
          x !== ranks[ranks.indexOf(maxRank)] &&
          x !== ranks[ranks.lastIndexOf(maxRank)]
      )
      .every((val, i, arr) => val === arr[0])
  ) {
    return "투페어";
  }
  // 입력한 핸드가 원페어인 경우
  if (duplicateCount === 2) {
    return "원페어";
  }
  // 입력한 핸드에서 가장 높은 숫자를 구하여 리턴하는 경우
  return `${maxRank} 하이카드`;
}

// export const getMostDuplicate = (
//   arr: Array<number>
// ): { number: number; count: number } => {
//   let counts: { [key: string]: number } = {};
//   arr.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
//   });
//   let maxCount: number = 0;
//   let maxNumber: number = 0;
//   Object.keys(counts).forEach((key) => {
//     if (counts[key] > maxCount) {
//       maxCount = counts[key];
//       maxNumber = Number(key);
//     }
//   });
//   if (maxCount === 1) {
//     maxNumber = Math.max(...arr);
//   }
//   return { number: maxNumber, count: maxCount };
// };

export const isSuited = (hands: Array<string>): boolean => {
  return hands.map(([s]) => s).every((shape, _, arr) => shape === arr[0]);
};

export const isRoyalStraightFlush = (hands: Array<string>): boolean => {
  const ranks = hands.map((hand) => hand.slice(1));
  if (isSuited(hands) && ranks.sort().toString() === "1,10,11,12,13") {
    return true;
  }
  return false;
};

export const isStraight = (hands: Array<string>): boolean => {
  const rankstr = hands
    .map((hand) => hand.slice(1))
    .sort((a, b) => Number(a) - Number(b))
    .toString();
  const STRAITGHTS = [
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
  return STRAITGHTS.includes(rankstr);
};

export const isStraightFlush = (hands: Array<string>): boolean => {
  if (isSuited(hands) && isStraight(hands) && !isRoyalStraightFlush(hands)) {
    return true;
  }
  return false;
};

export const getMostDuplicate = (ranks: Array<number>): number => {
  let counts: { [key: string]: number } = {};
  ranks.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  let maxCount: number = 0;
  Object.keys(counts).forEach((key) => {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
    }
  });
  return maxCount;
};

export const isFourCard = (hands: Array<string>): boolean => {
  const ranks = hands.map((hand) => hand.slice(1)).map((rank) => Number(rank));
  const duplicateCount = getMostDuplicate(ranks);
  if (duplicateCount === 4) {
    return true;
  }
  return false;
};

export const isFlush = (hands: Array<string>): boolean => {
  if (
    isSuited(hands) &&
    hands.length === 5 &&
    !isStraightFlush(hands) &&
    !isRoyalStraightFlush(hands)
  ) {
    return true;
  }
  return false;
};

export const isTrips = (hands: Array<string>): boolean => {
  const ranks = hands.map((hand) => hand.slice(1)).map((rank) => Number(rank));
  const duplicateCount = getMostDuplicate(ranks);
  if (duplicateCount === 3) {
    return true;
  }
  return false;
};

export const getPairCount = (ranks: Array<number>): number => {
  let count = 0;
  const numMap = new Map();
  for (const rank of ranks) {
    if (numMap.has(rank)) {
      numMap.set(rank, numMap.get(rank) + 1);
    } else {
      numMap.set(rank, 1);
    }
  }
  for (const [key, value] of numMap) {
    if (value === 2) {
      count++;
    }
  }

  return count;
};

export const isTwoPair = (hands: Array<string>): boolean => {
  const ranks = hands.map((hand) => hand.slice(1)).map((rank) => Number(rank));
  const pairCount = getPairCount(ranks);
  if (pairCount === 2) {
    return true;
  }
  return false;
};

export const isOnePair = (hands: Array<string>): boolean => {
  const ranks = hands.map((hand) => hand.slice(1)).map((rank) => Number(rank));
  const pairCount = getPairCount(ranks);
  if (pairCount === 1) {
    return true;
  }
  return false;
};

export const isFullHouse = (hands: Array<string>): boolean => {
  if (isTrips(hands) && isOnePair(hands)) {
    return true;
  }
  return false;
};

/*
  const hands = ['S1', 'D13'];

*/
// priority
const RANK2PRIORITY = {
  Royal_Straight_Flush: 0,
  Straight_Flush: 1,
  Four_Card: 2,
  Full_House: 3,
  Flush: 4,
  Straight: 5,
  Trips: 6,
  Two_Pair: 7,
  One_Pair: 8,
  High_Card: 9,
};
