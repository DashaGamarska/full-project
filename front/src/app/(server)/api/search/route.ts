import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@components/constants';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const response = await fetch(`${BASE_URL}/search?q=${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return NextResponse.json(data);
}
