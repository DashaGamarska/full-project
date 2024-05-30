import { Suspense } from 'react';
import { DecorationsSectionI } from '@components/types';

import Container from '../Container/Container';
import Section from '../Section/Section';

import DecorationList from './DecorationList/DecorationList';

import styles from './DecorationsSection.module.scss';

const DecorationsSection: React.FC<DecorationsSectionI> = ({
  dict,
  decorations,
  paginBtnDict,
}) => {
  return (
    <Section id="decorations-section" className={styles.section}>
      <Container className={styles.container}>
          <DecorationList items={decorations} paginBtnDict={paginBtnDict} />
      </Container>
    </Section>
  );
};

export default DecorationsSection;
