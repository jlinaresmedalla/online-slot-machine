import { NextResponse } from 'next/server';
import { cashOut } from '@/lib/service/sessionService';

export const POST = async () => {
  try {
    const result = cashOut();

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json('Invalid request', { status: 400 });
  }
};
