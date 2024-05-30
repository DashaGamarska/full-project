import { NextRequest } from "next/server"
import { BASE_URL } from '@components/constants';
import { URL } from "url";


export async function POST(request: NextRequest) {
  const langParam = new URL(request.url).searchParams.get('lang');
  
  const data = await request.json()
  const response = await fetch(`${BASE_URL}/orders?lang=${langParam}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response

};

