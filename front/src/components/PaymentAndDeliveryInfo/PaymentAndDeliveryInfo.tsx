import { BsBoxSeam } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './PaymentAndDeliveryInfo.module.scss';

interface PaymentAndDeliveryInfoProps {
  dict: {
    header: {
      title: string;
    };
    paymentOptions: {
      subTitle: string;
      description: string;
    };
    deliveryOptions: {
      subTitle: string;
      time: string;
      methods: {
        title: string;
        availableMethods: string[];
      };
      paymentInfo: string;
    };
  };
}

const PaymentAndDeliveryInfo: React.FC<PaymentAndDeliveryInfoProps> = ({
  dict,
}) => {
  const { header, paymentOptions, deliveryOptions } = dict;
  const { subTitle, time, methods, paymentInfo } = deliveryOptions;

  return (
    <Section className={styles.paymentSection}>
      <Container>
        <Typography variant="subheadingBold" className={styles.sectionTitle}>
          {header.title}
        </Typography>
        <div className={styles.paymentWrapper}>
          <div className={styles.paymentOptions}>
            <div className={styles.iconCircle}>
              <BsCreditCard className={styles.iconCard} />
            </div>
            <Typography
              variant="bodyL"
              color="var(--cl-primary-700)"
              className={styles.paymentTitle}
            >
              {paymentOptions.subTitle}
            </Typography>
            <Typography variant="bodyRegular" color="var(--cl-gray-600)">
              {paymentOptions.description}
            </Typography>
          </div>

          <div className={styles.deliveryOptions}>
            <div className={styles.iconCircle}>
              <BsBoxSeam className={styles.iconBox} />
            </div>
            <Typography
              variant="bodyL"
              color="var(--cl-primary-700)"
              className={styles.paymentTitle}
            >
              {subTitle}
            </Typography>
            <Typography variant="bodyRegular" color="var(--cl-gray-600)">
              {time}
            </Typography>

            <div>
              <Typography variant="bodyRegular" color="var(--cl-gray-600)">
                {methods.title}
              </Typography>
              <ul>
                {methods.availableMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>

            <Typography
              variant="bodyRegular"
              color="var(--cl-gray-600)"
              className={styles.paymentInfo}
            >
              {paymentInfo}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PaymentAndDeliveryInfo;
