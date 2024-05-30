import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { PiPhoneThin } from 'react-icons/pi';
import type { NavDictI } from '@components/types';
import type { Locale } from '@i18n';
import Logo from '@images/icons/logo.svg';

import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Typography from '../Typography/Typography';

import styles from './Footer.module.scss';

interface FooterI {
  lang: Locale;
  dict: {
    contact: string;
    privacyPolicy: string;
    copyright: string;
  };
  navDict: NavDictI;
}

const PHONE_NUMBER = '+38 093 222 33 44';
const EMAIL_ADDRESS = 'craftedElegance@gmail.com';

const Footer: React.FC<FooterI> = ({ lang, dict, navDict }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Image src={Logo} alt="Logo" width={110} height={74} />
          <Navigation
            variant="footer"
            className={styles.footerNavigation}
            lang={lang}
            navDict={navDict}
          />
          <div>
            <Typography
              variant="bodyL"
              color="var(--cl-gray-700)"
              className={styles.contactUsText}
            >
              {dict.contact}
            </Typography>
            <address>
              <ul className={styles.addressList}>
                <li className={styles.addressItem}>
                  <a
                    className={styles.addressLink}
                    href={`tel:${PHONE_NUMBER}`}
                  >
                    <PiPhoneThin style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      className={styles.addressTypography}
                    >
                      {PHONE_NUMBER}
                    </Typography>
                  </a>
                </li>
                <li className={styles.addressItem}>
                  <a
                    className={styles.addressLink}
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
                    <CiMail style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      className={styles.addressTypography}
                    >
                      {EMAIL_ADDRESS}
                    </Typography>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className={styles.copyright}>
          <Link href="/privacy-policy" className={styles.copyrightLink}>
            <Typography variant="bodyRegular" className={styles.hoverableText}>
              {dict.privacyPolicy}
            </Typography>
            <div className={styles.copyWrapper}>
              <Typography variant="bodyRegular">{dict.copyright}</Typography>
              <div className={styles.copyrightCraftedElegance}>
                <AiOutlineCopyrightCircle
                  style={{ width: 16, height: 16 }}
                ></AiOutlineCopyrightCircle>
                <Typography variant="bodyRegular">
                  2024 CraftedElegance
                </Typography>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
