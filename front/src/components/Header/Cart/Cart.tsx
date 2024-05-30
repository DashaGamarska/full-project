'use client';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { showToast } from '@components/helpers/showToast';
import { useCartContext } from '@context/CartContext';
import type { Locale } from '@i18n';

import styles from './Cart.module.scss';

interface CartProps {
  lang: Locale;
}

const Cart: React.FC<CartProps> = ({ lang }) => {
  const { totalCartProducts } = useCartContext();

  const handleCartClick = () => {
    showToast(
      'Your cart is empty. Please add items before proceeding to checkout.',
      'warning'
    );
  };

  return (
    <>
      {totalCartProducts > 0 ? (
        <Link href={`/${lang}/checkout`}>
          <BiShoppingBag />
          {totalCartProducts > 0 && (
            <span className={styles.quantity}>{totalCartProducts}</span>
          )}
        </Link>
      ) : (
        <button onClick={handleCartClick} className={styles.link}>
          <BiShoppingBag />
          {totalCartProducts > 0 && (
            <span className={styles.quantity}>{totalCartProducts}</span>
          )}
        </button>
      )}
    </>
  );
};

export default Cart;
