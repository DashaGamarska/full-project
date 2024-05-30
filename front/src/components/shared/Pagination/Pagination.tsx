'use client';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { usePagination } from '@components/hooks';

import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const { handlePageClick, page } = usePagination();

  const pageRange = Array.from(
    { length: totalPages ?? 1 },
    (_, index) => index + 1
  );

  return (
    <Section className={styles.section}>
      <Container>
        <ul className={styles.dots}>
          {pageRange.map(pageNumber => (
            <li key={pageNumber}>
              <button
                className={`${styles.button} ${
                  page === pageNumber && styles.active
                }`}
                onClick={() => handlePageClick(pageNumber)}
              ></button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Pagination;
