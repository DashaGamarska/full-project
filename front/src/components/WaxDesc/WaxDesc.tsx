import Image from 'next/image';

import bg from '../../../public/images/candles/wax_bg.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './WaxDesc.module.scss';

interface WaxDescI {
  dict: {
    title: string;
    text: string;
  };
  className?: string;
}

const WaxDesc: React.FC<WaxDescI> = ({ dict, className }) => {
  return (
    <Section id={styles.section} className={`${className || ''}`}>
      <Container>
        <div className={styles.body}>
          <Image
            priority
            src={bg}
            alt="Вид зверху на палаючу свічку на чорному фоні, яка стоїть на дерев'яній колодці"
            sizes="100vw"
            className={styles.img}
          />
          <div className={styles.content}>
            <Typography variant="bodyXLHeavy" className={styles.title}>
              {dict?.title}
            </Typography>
            <Typography variant="bodyXL" className={styles.text}>
              {dict?.text}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WaxDesc;
