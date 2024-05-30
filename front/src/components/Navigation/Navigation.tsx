'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import useCloseDropdownOnNavigation from '@components/hooks/useCloseDropdownOnNavigation';
import type { NavDictI } from '@components/types';
import type { Locale } from '@i18n';
import { useToggle } from 'usehooks-ts';

import { generateNavLinks } from './navData';

import styles from './Navigation.module.scss';

interface NavigationPropsI {
  className?: string;
  onClick?: () => void;
  variant?: string;
  lang?: Locale;
  navDict: NavDictI;
}

const Navigation: React.FC<NavigationPropsI> = ({
  className,
  onClick,
  variant,
  lang = 'uk',
  navDict,
}) => {
  const pathname = usePathname();
  const [isCandlesMenuOpen, toggleDropdown, setIsCandlesMenuOpen] =
    useToggle(false);
  const langPrefix = lang === 'en' ? '/en' : '/uk';
  const isActive = (link: string) => pathname === `${langPrefix}${link}`;
  const navLinks = generateNavLinks(navDict);
  const navItems = [
    navDict.home,
    navDict.decorations,
    navDict.embroidery,
    navDict.bags,
    navDict.paymentAndDelivery,
  ];
  const candlesMenuItems = [
    navDict.bracelet,
    navDict.earrings,
    navDict.necklace,
  ];

  useCloseDropdownOnNavigation(setIsCandlesMenuOpen);

  const isCandlesActive = () => {
    for (const candlesItem of candlesMenuItems) {
      if (isActive(navLinks[candlesItem] ?? '')) {
        return true;
      }
    }
    return false;
  };

  const navigationItemClass = variant === 'footer' ? '' : styles.navigationItem;

  const centerContentClass =
    variant === 'footer' ? styles.centerContentFooter : styles.centerContent;

  const candlesListClass =
    variant === 'footer'
      ? `${styles.candlesList} ${styles.footerCandlesList}`
      : styles.candlesList;

  return (
    <nav>
      <ul className={`${styles.navigationList} ${className || ''}`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item === navDict.decorations ? navigationItemClass : ''
            }`}
          >
            {item === navDict.decorations ? (
              <div className={styles.dropdown} onClick={toggleDropdown}>
                <div className={centerContentClass}>
                  <span
                    className={`${styles.linkText} ${
                      isCandlesActive() ? styles.activeLink : ''
                    }`}
                  >
                    {navDict.decorations}
                  </span>
                  {isCandlesMenuOpen ? (
                    <MdKeyboardArrowUp
                      className={styles.arrowIcon}
                      style={{ width: 24, height: 24 }}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className={styles.arrowIcon}
                      style={{ width: 24, height: 24 }}
                    />
                  )}
                </div>
                {isCandlesMenuOpen && (
                  <ul className={candlesListClass}>
                    {candlesMenuItems.map((candlesItem, index) => (
                      <li key={index} className={styles.candlesItem}>
                        <Link
                          href={`/${lang}${navLinks[candlesItem]}` ?? ''}
                          className={styles.candlesLink}
                          onClick={onClick}
                        >
                          {candlesItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={`/${lang}${navLinks[item]}` ?? ''}
                className={`${styles.candlesItemPadding} ${
                  isActive(navLinks[item] ?? '') ? styles.activeLink : ''
                }`}
                onClick={onClick}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
