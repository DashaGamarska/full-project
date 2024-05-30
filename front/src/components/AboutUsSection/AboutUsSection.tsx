import Image from 'next/image';
import Typography from '@components/components/Typography/Typography';
import Image1 from '@images/aboutUs/Image1.jpg';
import Image2 from '@images/aboutUs/Image2.jpg';
import Image3 from '@images/aboutUs/Image3.jpg';

import Container from '../Container/Container';
import Section from '../Section/Section';

import styles from './AboutUsSection.module.scss';

interface HeroI {
  dict: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
  };
}

const AboutUsSection: React.FC<HeroI> = ({ dict }) => {
  return (
    <Section>
      <Container>
        <Typography
          variant="subheading1"
          className={styles.title}
          color="var(--cl-primary-800)"
        >
          {dict.title}
        </Typography>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.aboutUsTextWrapper}>
              <Typography variant="bodyRegular" color="var(--cl-gray-600)">
                {dict.text1}
              </Typography>
              <Typography variant="bodyRegular" color="var(--cl-gray-600)">
                {dict.text2}
              </Typography>
              <Typography variant="bodyRegular" color="var(--cl-gray-600)">
                {dict.text3}
              </Typography>
            </div>
            <div className={styles.aboutUsImagesWrapper}>
              <Image
                src={Image1}
                alt="decoration"
                width={282}
                height={285}
                className={styles.aboutUsImage}
              />
              <Image
                src={Image2}
                alt="decoration"
                width={282}
                height={285}
                className={styles.aboutUsImage}
              />
            </div>
          </div>
          <div className={styles.aboutUsImageContainer}>
            <Image
              src={Image3}
              alt="decoration"
              fill
              className={styles.aboutUsImage}
              priority
              sizes="(min-width: 1230) 486px,
                    (min-width: 1024) 976px,
                    (min-width: 768px) 720px,
                    (min-width: 667px) 619px,
                    100vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
