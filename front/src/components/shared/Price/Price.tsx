import Typography from '@components/components/Typography/Typography';

import styles from './Price.module.scss';

const Price = ({
  priceContainerClassName,
  priceStyle,
  price = 550,
  variant = 'primary',
}: {
  priceContainerClassName?: string;
  priceStyle?: string;
  price?: number;
  variant?: 'primary' | 'secondary';
}) => {
  const isPrimary = variant === 'primary';

  const priceClass = isPrimary ? styles.primary : styles.secondary;
  const spanClass = isPrimary ? styles.primarySpan : styles.secondarySpan;

  return (
    <div
      className={`${styles.price__container} ${
        priceContainerClassName || ''
      } ${priceClass}`}
    >
      <Typography
        variant={isPrimary ? 'subheadingMobile' : 'bodyS'}
        color={isPrimary ? 'var(--cl-primary-500)' : 'var(--cl-gray-700)'}
        className={`${priceStyle || ''} ${variant}`}
      >
        {price}
      </Typography>
      <span className={spanClass}>&#8372;</span>
    </div>
  );
};

export default Price;
