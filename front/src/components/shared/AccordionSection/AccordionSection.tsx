'use client';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Typography from '@components/components/Typography/Typography';

import styles from './AccordionSection.module.scss';

interface AccordionSectionProps {
  title: string;
  content: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.accordionSection}>
      <div className={styles.accordionHeader} onClick={toggleExpanded}>
        <Typography variant="subheadingMobile" color="var(--cl-primary-800)">
          {title}
        </Typography>
        <span className={styles.toggleIcon}>
          {expanded ? <FiMinus /> : <FiPlus />}
        </span>
      </div>
      {expanded && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default AccordionSection;
