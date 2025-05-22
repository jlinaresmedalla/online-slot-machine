import { SLOT_SYMBOL_PAYOUTS, SLOT_SYMBOLS } from '../../constants/app.constants';

export type Symbol = 'C' | 'L' | 'O' | 'W';

export const rollSlots = (): Symbol[] =>
  [0, 1, 2].map(() => SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)]);

export const isWin = (result: Symbol[]) => result[0] === result[1] && result[1] === result[2];

export const getPayout = (symbol: Symbol) => SLOT_SYMBOL_PAYOUTS[symbol] || 0;

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
