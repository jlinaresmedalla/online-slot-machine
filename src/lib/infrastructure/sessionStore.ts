import { Session } from '@/lib/domain/session.domain';

export type SessionStore = {
  save: (session: Session) => void;
  get: (id: string) => Session | undefined;
  update: (id: string, data: Partial<Session>) => void;
  delete: (id: string) => void;
};

export const createSessionStore = (): SessionStore => {
  const store = new Map<string, Session>();

  return {
    save: (session) => store.set(session.id, session),
    get: (id) => store.get(id),
    update: (id, data) => {
      const session = store.get(id);
      if (session) store.set(id, { ...session, ...data });
    },
    delete: (id) => store.delete(id),
  };
};

export const inMemorySessionStore = createSessionStore();
