import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CandleQuantity from '@components/components/shared/DecorationQuantity/DecorationQuantity';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { useLangFromPathname } from '@components/hooks';
import type { ProductDescription } from '@components/types';
import { useCartActionsContext, useCartContext } from '@context/CartContext';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
  deleteButtonText: string;
  id: string;
  images: string[];
  title: string;
  description?: string;
  price: number;
  slug: string;
  key: string;
  descriptionPropertyNames: ProductDescription;
  itemDeletedToast: string;
  handleDelete: ({ id, isEmbroidery }: IHandleDeleteParams) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  images,
  title,
  price,
  description,
  slug,
  deleteButtonText,
  descriptionPropertyNames: propertyNames,
  itemDeletedToast,
  handleDelete,
}) => {
  const { deleteCartItem } = useCartActionsContext();
  const { cartProducts, totalCartProducts } = useCartContext();
  const router = useRouter();
  const lang = useLangFromPathname();

  const isDecoration = slug.includes('decorations');
  const isEmbroidery = slug.includes('embroidery');

  const defineProductQuantity = () => {
    if (isEmbroidery) {
      return cartProducts.embroidery
        .filter(item => item.id === id)
        .reduce((acc, item) => acc + item.quantity, 0);
    }

    if (isDecoration) {
      return cartProducts.decorations
        .filter(item => item.id === id)
        .reduce((acc, item) => acc + item.quantity, 0);
    }
  };

  // Extract the keys of the description object
  const descriptionKeys =
    description && typeof description === 'object' && Object.keys(description);

  const defineCartItemType = () => {
    if (isEmbroidery) return 'embroidery';
    if (isDecoration) return 'decorations';
  };

  const handleRemoveCartItem = () => {
    handleDelete({
      id,
    });
    deleteCartItem({
      id,
      type: defineCartItemType()!,
      toastMessage: itemDeletedToast,
    });
    if (totalCartProducts === 1) {
      router.push(`/${lang}`);
    }
  };

  return (
    <li className={styles.card}>
      <Link href={`${slug}/${id}`}>
        <div className={styles.card__img_container}>
          <Image
            src={images[0]}
            fill
            priority
            alt={title}
            sizes="(min-width: 1230) 78px,
                    (min-width: 1024) 108px,
                    (min-width: 768px) 143px,
                    (min-width: 667px) 143px,
                    70px"
          />
        </div>
      </Link>
      <div className={styles.card__block}>
        <div className={styles.card__content}>
          <div className={styles.card__info}>
            <Link href={`${slug}/${id}`}>
              <Typography variant="bodyRegular" className={styles.card__title}>
                {title}
              </Typography>
            </Link>
            {description && typeof description === 'string' && isDecoration && (
              <Typography
                variant="bodyS"
                color="var(--cl-gray-500)"
                className={styles.card__description}
              >
                {description}
              </Typography>
            )}
            {descriptionKeys && (
              <Typography
                variant="bodyS"
                color="var(--cl-gray-500)"
                className={styles.card__description}
              >
                {/*  Loop through the keys of the description object */}
                {descriptionKeys.map((property, i) => {
                  return (
                    <span key={property}>
                      <span className={styles.pinkText}>
                        {/* Display the property value with pink text color */}
                      </span>
                      {/* Add a period if it's the last property, or a comma if not */}
                      {i === descriptionKeys.length - 1 ? (
                        <span>.</span>
                      ) : (
                        <span>, </span>
                      )}
                    </span>
                  );
                })}
              </Typography>
            )}
          </div>
          <Price price={price} />
        </div>
        <div className={styles.card__actions}>
          <CandleQuantity
            className={styles.buttonGroup}
            id={id}
            qty={Number(defineProductQuantity())}
            isCartQuantity
            type={defineCartItemType()}
          />
          <button type="button" onClick={handleRemoveCartItem}>
            <Typography variant="bodyS" className={styles.delete}>
              {deleteButtonText}
            </Typography>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
