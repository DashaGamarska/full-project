'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Button from '@components/components/Button/Button';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

import notFoundImg from '../../../public/images/icons/not-found.svg';

import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section id={styles.section}>
      <Container className={styles.container}>
        <Image
          src={notFoundImg}
          alt="An image of a young boy holding a lit candle close to his chest, creating a warm and intimate atmosphere."
          sizes="(min-width: 1230px) 190px, 
          (min-width: 768px) 198px,
          110px"
        />
        <Typography variant="bodyXL" color="var(--cl-gray-500)">
          Ooops... Something went wrong😭
        </Typography>
        <Button
          variant="secondary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </Container>
    </Section>
  );
}
