import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@i18n';
import bagsImg from '@images/Compass/bags1.jpg';
import decorationsImg from '@images/Compass/decorations1.jpg';
import embroideryImg from '@images/Compass/embroidery2.jpg';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Compass.module.scss';

interface CompassI {
  dict: {
    decorations: string;
    bags: string;
    embroidery: string;
  };
  lang: Locale;
}

const Compass: React.FC<CompassI> = ({ dict, lang }) => {
  return (
    <Section id="compass">
      <Container>
        {/* <h2>Navigation section</h2> */}
        <div className={styles.wrapper}>
          <Link
            href={`/${lang}/decorations/bracelet`}
            className={`${styles.candle} ${styles.card}`}
          >
            <Image
              src={decorationsImg}
              alt="decorations"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
              (min-width: 1024) 480px,
              (min-width: 768px) 352px,
              (min-width: 667px) 619px,
              327px"
              // fill
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.decorations}
              </Typography>
            </div>
          </Link>
          <Link
            href={`/${lang}/bags`}
            className={`${styles.box} ${styles.card}`}
          >
            <Image
              src={bagsImg}
              alt="bags"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
                    (min-width: 1024) 480px,
                    (min-width: 768px) 352px,
                    (min-width: 667px) 619px,
                    327px"
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.bags}
              </Typography>
            </div>
          </Link>
          <Link
            href={`/${lang}/embroidery`}
            className={`${styles.create} ${styles.card}`}
          >
            <Image
              src={embroideryImg}
              alt="embroidery"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
              (min-width: 1024) 480px,
              (min-width: 768px) 352px,
              (min-width: 667px) 619px,
              327px"
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.embroidery}
              </Typography>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Compass;
