import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import type {
  CheckoutPageDictionary
} from '@components/types';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductList from './ProductList/ProductList';

import styles from './CheckoutPage.module.scss';

interface CheckoutPageProps {
  dict: CheckoutPageDictionary;
  toastDict: { [key: string]: string };
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList, form },
  toastDict,
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList
          dict={productList}
          itemDeletedToast={toastDict.itemDeleted}
        />
        <CheckoutForm dict={form} toastDict={toastDict} />
      </Container>
    </Section>
  );
};

export default CheckoutPage;
