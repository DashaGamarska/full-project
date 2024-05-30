'use client';

import { BsArrowUp } from 'react-icons/bs';
import ScrollToTop from 'react-scroll-up';

import styles from './ScrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop showUnder={120} style={{ right: 40 }}>
        <p>
          <BsArrowUp className={styles.icon} />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
