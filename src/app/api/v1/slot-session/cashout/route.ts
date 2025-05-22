import { NextRequest, NextResponse } from 'next/server';
import { inMemorySessionStore } from '@/lib/infrastructure/sessionStore';
import { cashOut } from '@/lib/service/sessionService';

export const POST = async (req: NextRequest) => {
  let sessionId: string | undefined;
  try {
    const body = await req.json().catch(() => null);
    sessionId = body?.sessionId;
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }
    const result = cashOut(inMemorySessionStore, sessionId);

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json('Invalid request', { status: 400 });
  }
};
