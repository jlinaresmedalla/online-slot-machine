import { NextResponse } from 'next/server';
import { inMemorySessionStore } from '@/infrastructure/sessionStore';
import { startSession } from '@/service/SessionService';

export const POST = async () => {
  const session = startSession(inMemorySessionStore);

  return NextResponse.json({ sessionId: session.id, credits: session.credits });
};
