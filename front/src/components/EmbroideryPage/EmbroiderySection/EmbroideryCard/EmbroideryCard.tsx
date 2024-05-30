import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import type { ButtonsTranslation, EmbroideryDetailsI } from '@components/types';
import { Locale } from '@i18n';

import BuyButton from '../BuyButton/BuyButton';
import EmbroideryImgSlider from '../EmbroideryImgSlider/EmbroideryImgSlider';

import styles from './EmbroideryCard.module.scss';

type EmbroideryCardProps = {
  embroidery: EmbroideryDetailsI;
  dict: ButtonsTranslation;
  toastMessage: string;
  lang: Locale;
};

const EmbroideryCard: React.FC<EmbroideryCardProps> = ({
  embroidery,
  dict: { buyBtn, reviewBtn },
  toastMessage,
  lang,
}) => {
  const { id, name, images, price, description, slug } = embroidery;
  console.log('name', name);
  console.log('images', images);
  
  return (
    <li className={styles.card}>
      <EmbroideryImgSlider img={images} />
      <div>
        <div className={styles.content}>
          <Link href={`/${lang}${slug}/${id}`}>
            <Typography variant="subheadingBold" className={styles.title}>
              {name}
            </Typography>
          </Link>
          <Typography variant="bodyRegular" className={styles.text}>
            {description}
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

export default EmbroideryCard;
