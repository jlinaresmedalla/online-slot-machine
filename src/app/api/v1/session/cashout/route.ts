import { NextRequest, NextResponse } from 'next/server';
import { inMemorySessionStore } from '@/infrastructure/sessionStore';
import { cashOut } from '@/service/SessionService';

export const POST = async (req: NextRequest) => {
  const { sessionId } = await req.json();
  try {
    const result = cashOut(inMemorySessionStore, sessionId);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
};
