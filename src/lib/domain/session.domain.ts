export type Session = {
  id: string;
  credits: number;
  rolls: number;
  finished: boolean;
};

export const createSession = (id: string): Session => ({
  id,
  credits: 10,
  rolls: 0,
  finished: false,
});

export const canRoll = (session: Session) => session.credits > 0;

export const canCashOut = (session: Session) => session.rolls >= 2;
