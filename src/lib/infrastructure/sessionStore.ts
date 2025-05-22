import { Session } from '@/lib/domain/session.domain';

export type SessionStore = {
  save: (session: Session) => void;
  get: (id: string) => Session | undefined;
  update: (id: string, data: Partial<Session>) => void;
  delete: (id: string) => void;
};

export const createSessionStore = (): SessionStore => {
  const store: Record<string, Session> = {};

  return {
    save: (session) => {
      store[session.id] = session;
    },
    get: (id) => store[id],
    update: (id, data) => {
      const session = store[id];
      if (session) store[id] = { ...session, ...data };
    },
    delete: (id) => {
      delete store[id];
    },
  };
};

export const inMemorySessionStore = createSessionStore();
