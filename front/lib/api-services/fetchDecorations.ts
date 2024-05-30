import { BASE_URL } from '@components/constants';

interface DecorationsFetchRequest {
  currentLang: ServerLocale;
  currentPage: number;
  perPage: number;
  sort?: string;
  slug: string;
}

export const fetchDecorations = async ({
  currentLang = 'UA',
  currentPage,
  perPage = 9,
  sort,
  slug
}: DecorationsFetchRequest): Promise<DecorationsApiResponse> => {
  const buildQueryParams = () => {
    let query = '';

    if (sort) {
      query += '&' + sort;
    }
    return query;
  };

  //TODO: Remove revalidate
  const response = await fetch(`${BASE_URL}/decorations/${slug}`, {
    method: 'GET',
  });

  console.log("slug", slug);

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch decorations');
  }

  const data = await response.json();
  console.log('fetchDecorations', data);
  return {
    decorations: data
  };
};
