import { Suspense } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import BoxesSkeleton from '@components/components/Skeletons/BoxesSkeleton/BoxesSkeleton';
import type { EmbroiderySectionProps } from '@components/types';

import EmbroideryList from './EmbroideryList/EmbroideryList';

import styles from './EmbroiderySection.module.scss';

const EmbroiderySection = ({
  dict,
  embroidery,
  toastMessage,
  lang,
}: EmbroiderySectionProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        <Suspense fallback={<BoxesSkeleton />}>
          
          <EmbroideryList
            dict={dict}
            embroidery={embroidery}
            toastMessage={toastMessage}
            lang={lang}
          />
        </Suspense>
      </Container>
    </Section>
  );
};

export default EmbroiderySection;
