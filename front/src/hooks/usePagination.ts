'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFilterSearchParams } from '@components/hooks';

export const usePagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { queryParams } = useFilterSearchParams();

  const page =
    typeof searchParams.get('page') === 'string'
      ? Number(searchParams.get('page'))
      : 1;

  const handlePageClick = (pageNumber: number) => {
    router.push(`?page=${pageNumber}&perPage=9&${queryParams}#candles-section`);
  };

  return { handlePageClick, page };
};
