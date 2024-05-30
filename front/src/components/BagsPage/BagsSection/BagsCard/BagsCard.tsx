import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import type { BagsDetailsI, ButtonsTranslation } from '@components/types';
import { Locale } from '@i18n';

import BoxImgSlider from '../BagsImgSlider/BagsImgSlider';
import BuyButton from '../BuyButton/BuyButton';

import styles from './BagsCard.module.scss';

type BagsCardProps = {
  box: BoxDetailsI;
  dict: ButtonsTranslation;
  toastMessage: string;
  lang: Locale;
};

const BagsCard: React.FC<BagsCardProps> = ({
  box,
  dict: { buyBtn, reviewBtn },
  toastMessage,
  lang,
}) => {
  const { id, images, title, price, slug, text } = box;
  return (
    <li className={styles.card}>
      <BoxImgSlider img={images} />
      <div>
        <div className={styles.content}>
          <Link href={`/${lang}${slug}/${id}`}>
            <Typography variant="subheadingBold" className={styles.title}>
              {title}
            </Typography>
          </Link>
          <Typography variant="bodyRegular" className={styles.text}>
            {text}
          </Typography>
        </div>
        <Price priceStyle={styles.price} price={price} />
        <div className={styles.button__container}>
          <BuyButton
            product={{ id, price }}
            buyBtn={buyBtn}
            toastMessage={toastMessage}
          />
          <Link href={`/${lang}${slug}/${id}`}>{reviewBtn}</Link>
        </div>
      </div>
    </li>
  );
};

export default BagsCard;
