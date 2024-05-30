import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { ProductDetails } from '@components/types';
import { useModalContext } from '@context/ModalContext';

import styles from './SearchItem.module.scss';

export interface SearchResultProps {
  result: ProductDetails;
}

const SearchItem: React.FC<SearchResultProps> = ({ result }) => {
  const { id, slug, images, title, price } = result;
  const { toggleModal } = useModalContext();
  const pathName = usePathname();
  const lang = pathName.split('/')[1];

  const handleItemClick = () => {
    toggleModal();
  };

  return (
    <li onClick={handleItemClick}>
      <Link href={`/${lang}${slug}/${id}`} className={styles.searchLink}>
        <div className={styles.searchWrapper}>
          <Image
            src={images[0]}
            alt={title}
            width={30}
            height={32}
            className={styles.searchImage}
          />
          <Typography variant="bodyS">{title}</Typography>
        </div>
        <Price price={price} variant="secondary" />
      </Link>
    </li>
  );
};

export default SearchItem;
