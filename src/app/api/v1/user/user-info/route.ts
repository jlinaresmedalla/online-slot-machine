import { getUser } from '@/lib/domain/user.domain';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const user = getUser();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
