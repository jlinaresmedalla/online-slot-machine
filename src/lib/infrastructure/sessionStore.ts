import { Session } from '@/lib/domain/session.domain';

export type SessionStore = {
  save: (session: Session) => void;
  get: (id: string) => Session | undefined;
  update: (id: string, data: Partial<Session>) => void;
  delete: (id: string) => void;
};

const sessions = new Map<string, Session>();

export const inMemorySessionStore: SessionStore = {
  save: (session) => sessions.set(session.id, session),
  get: (id) => sessions.get(id),
  update: (id, data) => {
    const session = sessions.get(id);
    if (session) sessions.set(id, { ...session, ...data });
  },
  delete: (id) => sessions.delete(id),
};
