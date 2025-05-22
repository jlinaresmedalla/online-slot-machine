import { NextResponse } from 'next/server';
import { startSession } from '@/lib/service/sessionService';

export const POST = async () => {
  const session = startSession();

  return NextResponse.json({ sessionId: session.id, credits: session.credits });
};
