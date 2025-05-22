import { roll } from '@/lib/service/sessionService';

import { NextResponse } from 'next/server';

export const POST = async () => {
  try {
    const result = roll();
    return NextResponse.json(result);
  } catch (e: unknown) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 });
  }
};
