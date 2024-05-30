import { BASE_URL } from '@components/constants';
export const fetchCartDecorations = async ({
  lang,
  ids,
}: CartApiRequest): Promise<DecorationDetailsI[]> => {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ids),
  });

  if (!response.ok) throw new Error('Error by fetching cart candles.');
  const data = await response.json();
  return data;
};
