'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  generateFilteredQueryString,
  getFilterQuery,
  getParamsArray,
} from '@components/helpers';

export const useFilterSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const page = searchParams.get('page');
  const sortSetting = searchParams.get('sort');
  const params: [string, string][] = getParamsArray(searchParams.entries());
  const hasFetchQuery = searchParams.get('fetch');

  const allFilterParams = params.filter(
    ([key]) => key !== 'page' && key !== 'perPage'
  );
  const filterParamsWithoutSort = params.filter(([key]) => key !== 'sort');

  const filterValues = allFilterParams
    .filter(([key]) => key !== 'sort' && key !== 'fetch')
    .map(([_, value]) => value);

  const filterQuery = getFilterQuery(params);
  const filterQueryWithoutSort = getFilterQuery(filterParamsWithoutSort);
  const queryParams = getFilterQuery(allFilterParams);

  const redirectTo = (query: string, options?: { scroll: boolean }) => {
    router.push(`${pathname}${query}`, options);
  };

  const cleanFilter = () => {
    const baseQuery = page ? `?page=${page}&perPage=9` : '';
    redirectTo(`${baseQuery}`, { scroll: false });
  };

  const toggleFilter = (value: string, category?: string) => {
    const newQuery = generateFilteredQueryString(params, value);

    if (filterQuery && !filterValues.includes(value) && category) {
      redirectTo(`?${filterQuery}&${category}=${value}`, { scroll: false });
      return;
    }

    if (!filterQuery && category && !filterValues.includes(value)) {
      redirectTo(`?${category}=${value}`, {
        scroll: false,
      });
      return;
    }

    if (filterQuery) {
      redirectTo(`?${newQuery}`, { scroll: false });
    }
  };

  const updateSortSetting = (value: 'price' | 'price,desc') => {
    const baseQuery = filterQueryWithoutSort
      ? `${filterQueryWithoutSort}&`
      : '';

    const newQuery =
      value === sortSetting
        ? filterQuery && filterQuery.includes('sort')
          ? filterQuery.replace(/&?sort=[^&]*/, '')
          : ''
        : `${baseQuery}sort=${value}`;

    redirectTo(`?${newQuery}`, { scroll: false });
  };

  return {
    page,
    allFilterParams,
    cleanFilter,
    filterValues,
    filterQuery,
    toggleFilter,
    hasFetchQuery,
    updateSortSetting,
    sortSetting,
    queryParams,
  };
};
