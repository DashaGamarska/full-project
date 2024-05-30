'use client';
import Image from 'next/image';
import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { useLangFromPathname } from '@components/hooks';

import type { DecorationDetailsI } from '../../../types';

import styles from './DecorationItemCard.module.scss';

const DecorationItemCard: React.FC<DecorationDetailsI> = ({
  id,
  images,
  description,
  price,
  slug,
  name,
}) => {
  const lang = useLangFromPathname();

  return (
    <li className={styles.card}>
      <Link href={`/${lang}${slug}/${id}`}>
        <div className={styles.img_container}>
          {images && images.length > 0 && (
            <Image
              src={images[0]}
              fill
              priority
              alt={name}
              sizes="(min-width: 1230) 282px,
                    (min-width: 1024) 312px,
                    (min-width: 768px) 224px,
                    (min-width: 667px) 300px,
                    154px"
            />
          )}
        </div>
        <Typography
          variant="bodyRegular"
          className={styles.title}
          title={name}
        >
          {name}
        </Typography>
      </Link>
      <Price price={price} />
    </li>
  );
};

export default DecorationItemCard;
