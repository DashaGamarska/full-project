'use client';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Typography from '@components/components/Typography/Typography';
import { usePagination } from '@components/hooks';

import styles from './MobilePagination.module.scss';

interface MobilePaginationProps {
  totalPages: number;
  paginBtnDict: string;
}

const MobilePagination = ({ paginBtnDict }: MobilePaginationProps) => {
  const { handlePageClick, page } = usePagination();

  return (
    <>
      <li className={styles.item}>
        <button
          className={styles.button}
          onClick={() => handlePageClick(page + 1)}
        >
          <Typography variant="bodyRegular" color="var(--cl-primary-900)">
            {paginBtnDict}
          </Typography>
          <IoIosArrowRoundForward />
        </button>
      </li>
    </>
  );
};

export default MobilePagination;
