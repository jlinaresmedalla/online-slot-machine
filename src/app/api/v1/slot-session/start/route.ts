import { NextResponse } from 'next/server';
import { inMemorySessionStore } from '@/lib/infrastructure/sessionStore';
import { startSession } from '@/lib/service/sessionService';

export const POST = async () => {
  const session = startSession(inMemorySessionStore);

  return NextResponse.json({ sessionId: session.id, credits: session.credits });
};
