export type Symbol = 'C' | 'L' | 'O' | 'W';

export const SYMBOLS: Symbol[] = ['C', 'L', 'O', 'W'];
export const PAYOUTS = { C: 10, L: 20, O: 30, W: 40 };

export const rollSlots = (): Symbol[] =>
  [0, 1, 2].map(() => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);

export const isWin = (result: Symbol[]) => result[0] === result[1] && result[1] === result[2];

export const getPayout = (symbol: Symbol) => PAYOUTS[symbol] || 0;

export const houseRoll = (credits: number): Symbol[] => {
  let result = rollSlots();
  if (isWin(result)) {
    let rerollChance = 0;

    if (credits >= 40 && credits <= 60) rerollChance = 0.3;
    if (credits > 60) rerollChance = 0.6;
    if (Math.random() < rerollChance) result = rollSlots();
  }
  return result;
};
