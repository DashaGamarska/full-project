import { BASE_URL } from '@components/constants';
import { DecorationDetailsI } from '@components/types';

export const fetchDecorationById = async ({
  id,
  slug,
  currentLang,
}: ApiRequest): Promise<DecorationDetailsI> => {
  const response = await fetch(`${BASE_URL}/decorations/${slug}/${id}`);

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch decoration');
  }

  const data: DecorationDetailsI = await response.json();
  return data;
};
