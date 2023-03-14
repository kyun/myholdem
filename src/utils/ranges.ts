import { generateHands, NUMBER } from "./cards";

export const ONE_PAIR_RANGE = NUMBER.map((num) => {
  return generateHands([num, num], false);
}).flat(1);

export const PAIR_A_RANGE = generateHands([1, 1], false);
export const PAIR_K_RANGE = generateHands([13, 13], false);
export const PAIR_Q_RANGE = generateHands([12, 12], false);
export const PAIR_J_RANGE = generateHands([11, 11], false);
export const PAIR_T_RANGE = generateHands([10, 10], false);
export const PAIR_9_RANGE = generateHands([9, 9], false);
export const PAIR_8_RANGE = generateHands([8, 8], false);
export const PAIR_7_RANGE = generateHands([7, 7], false);
export const PAIR_6_RANGE = generateHands([6, 6], false);
export const PAIR_5_RANGE = generateHands([5, 5], false);
export const PAIR_4_RANGE = generateHands([4, 4], false);
export const PAIR_3_RANGE = generateHands([3, 3], false);
export const PAIR_2_RANGE = generateHands([2, 2], false);

export const PAIR_RANGE = [
  ...PAIR_A_RANGE,
  ...PAIR_K_RANGE,
  ...PAIR_Q_RANGE,
  ...PAIR_J_RANGE,
  ...PAIR_T_RANGE,
  ...PAIR_9_RANGE,
  ...PAIR_8_RANGE,
  ...PAIR_7_RANGE,
  ...PAIR_6_RANGE,
  ...PAIR_5_RANGE,
  ...PAIR_4_RANGE,
  ...PAIR_3_RANGE,
  ...PAIR_2_RANGE,
];

export const AKs_RANGE = generateHands([1, 13], true);
export const AQs_RANGE = generateHands([1, 12], true);
export const AJs_RANGE = generateHands([1, 11], true);
export const ATs_RANGE = generateHands([1, 10], true);
export const A9s_RANGE = generateHands([1, 9], true);
export const A8s_RANGE = generateHands([1, 8], true);
export const A7s_RANGE = generateHands([1, 7], true);
export const A6s_RANGE = generateHands([1, 6], true);
export const A5s_RANGE = generateHands([1, 5], true);
export const A4s_RANGE = generateHands([1, 4], true);
export const A3s_RANGE = generateHands([1, 3], true);
export const A2s_RANGE = generateHands([1, 2], true);

export const AKo_RANGE = generateHands([1, 13], false);
export const AQo_RANGE = generateHands([1, 12], false);
export const AJo_RANGE = generateHands([1, 11], false);
export const ATo_RANGE = generateHands([1, 10], false);
export const A9o_RANGE = generateHands([1, 9], false);
export const A8o_RANGE = generateHands([1, 8], false);
export const A7o_RANGE = generateHands([1, 7], false);
export const A6o_RANGE = generateHands([1, 6], false);
export const A5o_RANGE = generateHands([1, 5], false);
export const A4o_RANGE = generateHands([1, 4], false);
export const A3o_RANGE = generateHands([1, 3], false);
export const A2o_RANGE = generateHands([1, 2], false);

export const KQs_RANGE = generateHands([13, 12], true);
export const KJs_RANGE = generateHands([13, 11], true);
export const KTs_RANGE = generateHands([13, 10], true);
export const K9s_RANGE = generateHands([13, 9], true);
export const K8s_RANGE = generateHands([13, 8], true);
export const K7s_RANGE = generateHands([13, 7], true);
export const K6s_RANGE = generateHands([13, 6], true);
export const K5s_RANGE = generateHands([13, 5], true);
export const K4s_RANGE = generateHands([13, 4], true);
export const K3s_RANGE = generateHands([13, 3], true);
export const K2s_RANGE = generateHands([13, 2], true);

export const MAX6_UTG_RANGE = [
  ...PAIR_RANGE,
  ...AKs_RANGE,
  ...AQs_RANGE,
  ...AJs_RANGE,
  ...ATs_RANGE,
  ...A9s_RANGE,
  ...A8s_RANGE,
  ...A7s_RANGE,
  ...A6s_RANGE,
  ...A5s_RANGE,
  ...A4s_RANGE,
  ...A3s_RANGE,
  ...A2s_RANGE,
  ...AKo_RANGE,
  ...AQo_RANGE,
  ...AJo_RANGE,
  ...ATo_RANGE,
];
export const MAX8_UTG_RANGE = [
  ...PAIR_A_RANGE,
  ...PAIR_K_RANGE,
  ...PAIR_Q_RANGE,
  ...PAIR_J_RANGE,
  ...PAIR_T_RANGE,
  ...PAIR_9_RANGE,
  ...PAIR_8_RANGE,
  ...PAIR_7_RANGE,
  ...PAIR_6_RANGE,
  ...PAIR_5_RANGE,
  ...AKs_RANGE,
  ...AQs_RANGE,
  ...AJs_RANGE,
  ...ATs_RANGE,
  ...AKo_RANGE,
  ...AQo_RANGE,
  ...AJo_RANGE,
  ...ATo_RANGE,
];

const UTG_MAX_6_RANGE = [
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
