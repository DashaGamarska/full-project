'use client';
import { useState } from 'react';
import Typography from '@components/components/Typography/Typography';
import { ButtonsDictI, EmbroideryDetailsI } from '@components/types';

import AccordionSection from '../AccordionSection/AccordionSection';
import BuyButtons from '../BuyButtons/BuyButtons';
import DecorationQuantity from '../DecorationQuantity/DecorationQuantity';

import styles from './Description.module.scss';

interface DescriptionProps {
  product: EmbroideryDetailsI;
  id: string;
  buttonsDict: ButtonsDictI;
  toastMessages: IToastMessages;
  productDescriptionDict: IProductDescriptionDict;
  embroidery?: EmbroideryDetailsI[];
}

const Description: React.FC<DescriptionProps> = ({
  product,
  id,
  buttonsDict,
  toastMessages,
  productDescriptionDict,
  embroidery,
}) => {
  const [quantity, setQuantity] = useState(1);

  const { id: productId, name, description, price, slug } = product;

  const { price: priceDict, quantity: quantityDict } = productDescriptionDict;

  const isEmbroideryPage = id === 'embroidery_details';

  return (
    <div className={styles.descriptionWrapper}>
      <div className={styles.productWrapper}>
        <Typography
          variant="bodyXLHeavy"
          color="var(--cl-primary-800)"
          className={styles.title}
        >
          {name}
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.description}
        >
          {description}
        </Typography>
        <div className={styles.costWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            {priceDict}:
          </Typography>
          <div className={styles.cost}>
            <Typography
              variant="subheadingMobile"
              color="var(--cl-primary-500)"
            >
              {price}
            </Typography>
            <span className={styles.costSymbol}>&#8372;</span>
          </div>
        </div>
        <div className={styles.quantity}>
          <Typography variant="button" color="var(--cl-gray-500)">
            {quantityDict}:
          </Typography>
          <DecorationQuantity qty={quantity} setQuantity={setQuantity} />
        </div>
        <BuyButtons
          product={{
            id: productId,
            slug,
            quantity,
            price,
          }}
          buttonsDict={buttonsDict}
          toastMessages={toastMessages}
        />
        {isEmbroideryPage && (
          <div className={styles.accordion}>
            {embroidery &&
              embroidery.map((component, index) => (
                <AccordionSection
                  key={index}
                  title={component.name}
                  content={component.description}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
