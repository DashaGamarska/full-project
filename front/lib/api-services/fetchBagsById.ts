import { BASE_URL } from '@components/constants';
import { BagsDetailsI } from '@components/types';

export const fetchBagsById = async ({ id, currentLang }: ApiRequest) => {
  const response = await fetch(`${BASE_URL}/bags/${id}?lang=${currentLang}`);

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch the bags');
  }

  const data: BagsDetailsI = await response.json();
  return data;
};
