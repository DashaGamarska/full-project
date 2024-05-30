import Image from 'next/image';
import type { Locale } from '@i18n';

import candleImg from '../../../public/images/icons/candles-vectorportal.svg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import CustomLink from '../shared/CustomLink/CustomLink';
import Typography from '../Typography/Typography';

import styles from './SuccessOrderPage.module.scss';

interface SuccessOrderPageProps {
  dict: {
    thankYouMessage: string;
    text: string;
    buttonText: string;
    altText: string;
  };
  lang: Locale;
}

const SuccessOrderPage = ({
  dict: { thankYouMessage, text, buttonText, altText },
  lang,
}: SuccessOrderPageProps) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div>
          <Typography
            variant="bodyXLHeavy"
            color="var(--cl-primary-700)"
            className={styles.thank_you_message}
          >
            {thankYouMessage}
          </Typography>
          <Typography
            variant="bodyRegular"
            color="var(--cl-gray-500)"
            className={styles.text}
          >
            {text}
          </Typography>
        </div>
        <CustomLink
          variant="primary"
          href={`/${lang}#compass`}
          className={styles.link}
        >
          {buttonText}
        </CustomLink>
        <Image
          src={candleImg}
          alt={altText}
          sizes="(min-width: 1230px) 228px,
          (min-width: 1024) 196px, 160px"
          className={styles.img}
        />
      </Container>
    </Section>
  );
};

export default SuccessOrderPage;
