import { NextRequest, NextResponse } from 'next/server';
import { inMemorySessionStore } from '@/infrastructure/sessionStore';
import { roll } from '@/service/SessionService';

export const POST = async (req: NextRequest) => {
  const { sessionId } = await req.json();
  try {
    const result = roll(inMemorySessionStore, sessionId);

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
};
