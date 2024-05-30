import { BagsDetailsI, ButtonsDictI, configuratorSectionI } from '../../types';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Description from '../shared/Description/Description';
import ProductImgGallery from '../shared/ProductImgGallery/ProductImgGallery';

import styles from './BagsDetailsPage.module.scss';

interface BagsDetailsPageI {
  product: BagsDetailsI;
  buttonsDict: ButtonsDictI;
  toastMessages: IToastMessages;
  productDescriptionDict: IProductDescriptionDict;
  configuratorDict: configuratorSectionI;
}

const BagsDetailsPage: React.FC<BagsDetailsPageI> = ({
  product,
  buttonsDict,
  toastMessages,
  productDescriptionDict,
  configuratorDict,
}) => {
  return (
    <>
      <Section id={styles.gallery_details_section}>
        <Container>
          <div className={styles.flexContainer}>
            <ProductImgGallery images={product.images} />
            <Description
              product={product}
              id="bags_details"
              buttonsDict={buttonsDict}
              toastMessages={toastMessages}
              productDescriptionDict={productDescriptionDict}
              configuratorDict={configuratorDict}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BagsDetailsPage;
