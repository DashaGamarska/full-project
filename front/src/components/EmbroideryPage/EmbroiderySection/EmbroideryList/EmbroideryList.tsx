import type {
  EmbroideryDetailsI,
  EmbroiderySectionProps,
} from '@components/types';

import EmbroideryCard from '../EmbroideryCard/EmbroideryCard';

import styles from './EmbroideryList.module.scss';

const EmbroideryList = async ({
  dict,
  embroidery,
  toastMessage,
  lang,
}: EmbroiderySectionProps) => {
  const items = await embroidery;
  return (
    <ul className={styles.list}>
      {items &&
        items.map((embroidery: EmbroideryDetailsI) => (
          <EmbroideryCard
            key={embroidery.id}
            embroidery={embroidery}
            dict={dict}
            toastMessage={toastMessage}
            lang={lang}
          />
        ))}
    </ul>
  );
};

export default EmbroideryList;
