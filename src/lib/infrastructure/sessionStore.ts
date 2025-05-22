import { Session } from '@/lib/domain/session.domain';

export type SessionStore = {
  save: (session: Session) => void;
  get: () => Session | undefined;
  update: (data: Partial<Session>) => void;
  delete: () => void;
};

export const createSessionStore = (): SessionStore => {
  let session: Session | undefined = undefined;

  return {
    save: (newSession) => {
      session = newSession;
    },
    get: () => session,
    update: (data) => {
      if (session) session = { ...session, ...data };
    },
    delete: () => {
      session = undefined;
    },
  };
};

export const inMemorySessionStore = createSessionStore();
