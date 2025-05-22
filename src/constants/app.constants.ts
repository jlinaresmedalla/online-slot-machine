import { Symbol } from '../lib/domain/slot.domain';

export const SLOT_SYMBOLS: Symbol[] = ['C', 'L', 'O', 'W'];

export const SLOT_SYMBOL_LABELS = {
  C: '/icons/cherry-svgrepo-com.svg',
  L: '/icons/lemon-svgrepo-com.svg',
  O: '/icons/orange-svgrepo-com.svg',
  W: '/icons/watermelon-svgrepo-com.svg',
};

export const SLOT_SYMBOL_PAYOUTS = {
  C: 10,
  L: 20,
  O: 30,
  W: 40,
};

export const CASHOUT_BTN_MOVE_DISTANCE = 300;

export const SLOT_POSITIONS = [0, 1, 2];
