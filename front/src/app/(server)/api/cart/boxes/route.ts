import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@components/constants';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang');
  const body = await request.json();
  const response = await fetch(`${BASE_URL}/boxes/by-id-in?lang=${lang}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
