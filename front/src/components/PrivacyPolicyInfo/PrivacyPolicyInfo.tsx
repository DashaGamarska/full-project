import React from 'react';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './PrivacyPolicyInfo.module.scss';

interface PrivacyPolicyInfoProps {
  dict: {
    title: string;
    sections: {
      subTitle: string;
      texts: string[];
    }[];
  };
}

const PrivacyPolicyInfo: React.FC<PrivacyPolicyInfoProps> = ({ dict }) => {
  return (
    <>
      <Section className={styles.privacySection}>
        <Container>
          <Typography
            variant="subheadingRegular"
            className={styles.privacyTitle}
          >
            {dict.title}
          </Typography>
          {dict.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <Typography variant="bodyL" className={styles.privacySubTitle}>
                {section.subTitle}
              </Typography>
              {section.texts.map((text, textIndex) => (
                <Typography
                  key={textIndex}
                  variant="bodyRegular"
                  className={
                    sectionIndex === dict.sections.length - 1 &&
                    textIndex === section.texts.length - 1
                      ? ''
                      : styles.privacyText
                  }
                >
                  {text}
                </Typography>
              ))}
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPolicyInfo;
