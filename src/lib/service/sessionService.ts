import { createSession, canCashOut, Session } from '@/lib/domain/session.domain';
import { houseRoll, isWin, getPayout } from '@/lib/domain/slot.domain';
import { inMemorySessionStore } from '@/lib/infrastructure/sessionStore';
import { addCreditsToUser, setUser } from '../domain/user.domain';

export const startSession = (): Session => {
  const id = crypto.randomUUID();
  const session = createSession(id);

  inMemorySessionStore.save(session);
  const newSession = inMemorySessionStore.get()!;
  setUser({ credits: 0 });

  return newSession;
};

export const roll = () => {
  const session = inMemorySessionStore.get()!;

  const result = houseRoll(session.credits);
  let credits = session.credits - 1;
  let payout = 0;

  if (isWin(result)) {
    payout = getPayout(result[0]);
    credits += payout;
  }

  inMemorySessionStore.update({ credits, rolls: session.rolls + 1 });

  return { result, credits, payout, rolls: session.rolls + 1 };
};

export const cashOut = () => {
  const session = inMemorySessionStore.get();

  if (!session || !canCashOut(session)) throw new Error('Cannot cash out');

  addCreditsToUser(session.credits);
  inMemorySessionStore.update({ credits: 0, finished: true });
  return { credits: session.credits };
};
