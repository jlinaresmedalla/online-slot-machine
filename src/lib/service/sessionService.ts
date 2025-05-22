import { createSession, canRoll, canCashOut, Session } from '@/lib/domain/session.domain';
import { houseRoll, isWin, getPayout } from '@/lib/domain/slot.domain';
import type { SessionStore } from '@/lib/infrastructure/sessionStore';
import { addCreditsToUser, setUser } from '../domain/user.domain';

export const startSession = (store: SessionStore): Session => {
  const id = crypto.randomUUID();
  const session = createSession(id);

  store.save(session);
  const newSession = store.get(id)!;
  setUser({ credits: 0 });

  return newSession;
};

export const roll = (store: SessionStore, sessionId: string) => {
  const session = store.get(sessionId);
  console.log(session);
  if (!session || !canRoll(session)) throw new Error('Cannot roll');

  const result = houseRoll(session.credits);
  let credits = session.credits - 1;
  let payout = 0;

  if (isWin(result)) {
    payout = getPayout(result[0]);
    credits += payout;
  }

  store.update(sessionId, { credits, rolls: session.rolls + 1 });

  return { result, credits, payout, rolls: session.rolls + 1 };
};

export const cashOut = (store: SessionStore, sessionId: string) => {
  const session = store.get(sessionId);

  if (!session || !canCashOut(session)) throw new Error('Cannot cash out');

  addCreditsToUser(session.credits);
  store.update(sessionId, { credits: 0, finished: true });
  return { credits: session.credits };
};
