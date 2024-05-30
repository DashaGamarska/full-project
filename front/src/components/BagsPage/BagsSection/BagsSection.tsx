import { Suspense } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import BoxesSkeleton from '@components/components/Skeletons/BoxesSkeleton/BoxesSkeleton';
import type { BagsSectionProps } from '@components/types';

import BagsList from './BagsList/BagsList';

import styles from './BagsSection.module.scss';

const BagsSection = ({ dict, bags, toastMessage, lang }: BagsSectionProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        <Suspense fallback={<BoxesSkeleton />}>
          <BagsList
            dict={dict}
            bags={bags}
            toastMessage={toastMessage}
            lang={lang}
          />
        </Suspense>
      </Container>
    </Section>
  );
};

export default BagsSection;
