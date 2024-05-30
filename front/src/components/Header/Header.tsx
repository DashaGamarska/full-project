'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import type { NavDictI } from '@components/types';
import { useModalContext } from '@context/ModalContext';
import type { Locale } from '@i18n';
import logo from '@images/icons/logo.svg';
import sm_logo from '@images/icons/sm-logo.svg';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import Navigation from '../Navigation/Navigation';
import Search from '../SearchComponent/Search/Search';

import Cart from './Cart/Cart';
import LanguageMenu from './LanguageMenu/LanguageMenu';

import styles from './Header.module.scss';

interface HeaderProps {
  lang: Locale;
  dict: DictSearchI;
  navDict: NavDictI;
  toastMessage: string;
}

const Header = ({ lang, dict, navDict, toastMessage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModal, toggleModal } = useModalContext();

  const { width } = useWindowSize();
  const isSmallScreen = width < 1230;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const html = document.querySelector('html');

    isMobileMenuOpen
      ? html?.classList.add(styles.overflowHidden)
      : html?.classList.remove(styles.overflowHidden);

    if (!isSmallScreen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, isSmallScreen]);

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* Logo */}
        <Link href={`/${lang}`} className={styles.logo}>
          {isSmallScreen ? (
            <Image
              src={sm_logo}
              alt="logo"
              width={77}
              height={20}
              priority
              className={styles.smallLogo}
            />
          ) : (
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={40}
              priority
              className={styles.bigLogo}
            />
          )}
        </Link>
        {/* Desktop navigation */}
        <Navigation className={styles.navbar} lang={lang} navDict={navDict} />

        {/* Icons: Language menu, cart icon and search icon */}
        <div className={styles.icons}>
          <LanguageMenu className={styles.langMenu} />
          <ul className={styles.iconsList}>
            <li className={`${styles.iconsItem} ${styles.cartIcon}`}>
              <Cart lang={lang} />
            </li>
            <li className={styles.iconsItem} onClick={toggleModal}>
              <AiOutlineSearch style={{ strokeWidth: '2px' }} />
            </li>
            {isSmallScreen && (
              <li
                className={`${styles.iconsItem} ${
                  isMobileMenuOpen && styles.menuOpen
                } ${styles.burgerItem}`}
              >
                <button
                  type="button"
                  className={styles.menuIcon}
                  onClick={toggleMenuOpen}
                  aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                  <span></span>
                </button>
              </li>
            )}
          </ul>
        </div>
        {/* Mobile menu */}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Container>
            <Navigation
              className={styles.mobileMenu}
              onClick={toggleMenuOpen}
              lang={lang}
              navDict={navDict}
            />
            <LanguageMenu className={styles.mobileLangMenu} />
          </Container>
        </div>
          <Modal active={isModal} setActive={toggleModal}>
            <Search 
              dict={dict}
              toastMessage={toastMessage}
            />
          </Modal>
      </Container>
    </header>
  );
};

export default Header;
