'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoOptionsOutline } from 'react-icons/io5';
import { useFilterSearchParams } from '@components/hooks';
import { TabsI } from '@components/types';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
//import Filter from '../Filter/Filter';
//import FilterTags from '../Filter/FilterTags/FilterTags';
import Modal from '../Modal/Modal';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import { tabsData, tabsI } from './data';

import styles from './Tabs.module.scss';

const Tabs: React.FC<TabsI> = ({ dict, lang }) => {
  const [isTabsMenuOpen, setIsTabsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isCurrent = (link: string) =>
    link === `/candles/${pathname.split('/')[3]}`;
  const isSmallScreen = width < 1230;
  const isMobScreen = width < 667;
  const [isModal, toggleModal] = useState(false);

  const { filterValues } = useFilterSearchParams();

  const numberSelectedFilters = filterValues?.length ?? 0;

  const toggleTabsMenu = () => {
    setIsTabsMenuOpen(!isTabsMenuOpen);
  };

  return (
    <Section id={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {isMobScreen
              ? tabsData(dict.tabs).reduce((acc: any, item: tabsI) => {
                  if (isCurrent(item.link)) {
                    acc.unshift(
                      <li
                        key={item.link}
                        className={`${styles.item} ${
                          isCurrent(item.link) ? styles.currentItem : ''
                        }`}
                      >
                        <Link
                          href={`/${lang}${item.link}`}
                          className={`${styles.link} 
                          ${isCurrent(item.link) ? styles.currentLink : ''}
                            ${isTabsMenuOpen ? styles.activeLink : ''}
                          `}
                          onClick={toggleTabsMenu}
                        >
                          <Typography
                            variant="bodyRegular"
                            color={
                              isCurrent(item.link)
                                ? 'var(--cl-gray-900)'
                                : 'var(--cl-gray-400)'
                            }
                          >
                            {item.abbreviatedTitle}
                          </Typography>
                          {!isTabsMenuOpen && (
                            <IoIosArrowDown style={{ width: 24, height: 24 }} />
                          )}
                        </Link>
                      </li>
                    );
                  } else if (isTabsMenuOpen) {
                    acc.push(
                      <li
                        key={item.link}
                        className={`${styles.item} ${
                          isCurrent(item.link) ? styles.currentItem : ''
                        }`}
                      >
                        <Link
                          href={`/${lang}${item.link}`}
                          className={styles.link}
                          onClick={toggleTabsMenu}
                        >
                          <Typography
                            variant="bodyRegular"
                            color={
                              isCurrent(item.link)
                                ? 'var(--cl-gray-900)'
                                : 'var(--cl-gray-400)'
                            }
                          >
                            {item.abbreviatedTitle}
                          </Typography>
                        </Link>
                      </li>
                    );
                  }
                  return acc;
                }, [])
              : tabsData(dict.tabs).map((item: tabsI, index: number) => (
                  <li
                    key={index}
                    className={`${styles.item} ${
                      isCurrent(item.link) ? styles.currentItem : ''
                    }`}
                  >
                    <Link href={`/${lang}${item.link}`} className={styles.link}>
                      <Typography
                        variant="bodyRegular"
                        className={styles.title}
                        color={
                          isCurrent(item.link)
                            ? 'var(--cl-gray-900)'
                            : 'var(--cl-gray-400)'
                        }
                      >
                        {isSmallScreen ? item.abbreviatedTitle : item.fullTitle}
                      </Typography>
                    </Link>
                  </li>
                ))}
          </ul>
          {isSmallScreen && (
            <button className={styles.btn} onClick={() => toggleModal(true)}>
              <Typography variant="bodyRegular" color={'var(--cl-primary-200)'}>
                {!!numberSelectedFilters && `+ ${numberSelectedFilters}`}
              </Typography>
              <IoOptionsOutline />
              <Typography variant="bodyRegular" color={'var(--cl-gray-500)'}>
                {dict.filter.title}
              </Typography>
            </button>
          )}
        </div>
        <Modal
          className={styles.backdrop}
          active={isModal}
          setActive={toggleModal}
        >
         
        </Modal>
        {/* )} */}
       
      </Container>
    </Section>
  );
};

export default Tabs;
