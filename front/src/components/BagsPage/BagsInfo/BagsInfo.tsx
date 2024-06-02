import Image from 'next/image';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

import bg from '../../../../public/images/candles/img-1.jpg';

import styles from './BagsInfo.module.scss';

interface BagsInfoI {
  dict: {
    title: string;
    text: string;
  };
}

const BagsInfo: React.FC<BagsInfoI> = ({ dict }) => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.body}>
          <Image
            priority
            src={bg}
            alt="Свічка у скляній тарі"
            sizes="100vw"
            className={styles.img}
          />
          <div className={styles.content}>
            <Typography variant="bodyLBold" className={styles.title}>
              {dict.title}
            </Typography>
            <Typography variant="bodyL24" className={styles.text}>
              {dict.text}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BagsInfo;
