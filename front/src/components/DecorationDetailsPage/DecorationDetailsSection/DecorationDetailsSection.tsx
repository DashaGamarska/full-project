import React from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import ProductImgGallery from '@components/components/shared/ProductImgGallery/ProductImgGallery';
import { ButtonsDictI, DecorationDetailsI } from '@components/types';

import Description from '../../shared/Description/Description';

import styles from './DecorationDetailsSection.module.scss';

interface DecorationsDetailsSectionI {
  product: DecorationDetailsI;
  buttonsDict: ButtonsDictI;
  toastMessages: IToastMessages;
  productDescriptionDict: IProductDescriptionDict;
}

const DecorationDetailsSection: React.FC<DecorationsDetailsSectionI> = ({
  product,
  buttonsDict,
  toastMessages,
  productDescriptionDict,
}) => {
  return (
    <Section id={styles.decoration_details_section}>
      <Container>
        <div className={styles.flexContainer}>
          <ProductImgGallery images={product.images} />
          <Description
            product={product}
            id="decorations_details"
            buttonsDict={buttonsDict}
            toastMessages={toastMessages}
            productDescriptionDict={productDescriptionDict}
          />
        </div>
      </Container>
    </Section>
  );
};

export default DecorationDetailsSection;
