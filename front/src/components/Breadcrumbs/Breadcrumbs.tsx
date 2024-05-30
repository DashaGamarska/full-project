import Image from 'next/image';
import Link from 'next/link';
import { BiSolidChevronRight } from 'react-icons/bi';
import type { Locale } from '@i18n';

import home from '../../../public/images/icons/home-breadcrumbs-heart.svg';
import Container from '../Container/Container';

import { CrumbItem } from './data';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsI {
  items: CrumbItem[];
  lang: Locale;
}

const Breadcrumbs: React.FC<BreadcrumbsI> = ({ items, lang }) => {
  return (
    <section className={styles.section}>
      <Container>
        <nav aria-label="breadcrumbs">
          <ol className={styles.container}>
            <li className={styles.crumb}>
              <Link
                href={`/${lang}`}
                className={`${styles.link} ${styles.noHover}`}
              >
                <Image src={home} alt="Home" width={24} height={24} />
              </Link>
              <BiSolidChevronRight className={styles.separator} />
            </li>
            {items.map((crumb, i) => (
              <li key={i} className={styles.crumb}>
                <Link
                  href={`/${lang}${crumb.path}`}
                  className={`${styles.link}`}
                >
                  {crumb.label}
                </Link>
                {items?.length - 1 !== i && (
                  <BiSolidChevronRight className={styles.separator} />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
};

export default Breadcrumbs;
