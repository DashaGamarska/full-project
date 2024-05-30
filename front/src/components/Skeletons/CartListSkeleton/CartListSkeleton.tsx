'use client';
import { useCartContext } from '@context/CartContext';
import { useWindowSize } from 'usehooks-ts';

import CartListDeskLargeSkeleton from './CartListDeskLargeSkeleton';
import CartListDeskSkeleton from './CartListDeskSkeleton';
import CartListMobSkeleton from './CartListMobSkeleton';
import CartListTabLargeSkeleton from './CartListTabLargeSkeleton';
import CartListTabSkeleton from './CartListTabSkeleton';

import styles from './CartListSkeleton.module.scss';

const CartListSkeleton = () => {
  const { width } = useWindowSize();
  const { totalCartProducts } = useCartContext();
  const mob = width < 667;
  const smallTab = width >= 667 && width < 768;
  const largeTab = width >= 768 && width < 1024;
  const desk = width >= 1024 && width < 1230;
  const largeDesk = width >= 1230;

  return (
    <ul className={styles.wrapper}>
      {[...Array(totalCartProducts)].map((_, index) => (
        <li key={index}>
          {mob && <CartListMobSkeleton />}
          {smallTab && <CartListTabSkeleton />}
          {largeTab && <CartListTabLargeSkeleton />}
          {desk && <CartListDeskSkeleton />}
          {largeDesk && <CartListDeskLargeSkeleton />}
        </li>
      ))}
    </ul>
  );
};

export default CartListSkeleton;
