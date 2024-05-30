import { BASE_URL } from '@components/constants';
import { BagsDetailsI } from '@components/types';

export const fetchBags = async (lang: ServerLocale): Promise<BagsDetailsI[]> => {
  //TODO: Remove revalidate
  const response = await fetch(`${BASE_URL}/bags?lang=${lang}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch bags');
  }

  const data = await response.json();
  return data?._embedded?.bags;
};
