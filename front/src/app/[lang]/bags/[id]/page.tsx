

import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { generateMetadata } from '@components/components/helpers/generateMetadata';
import { fetchBagsById } from '@lib/api-services/fetchBagsById';
import { fetchSimilarProducts } from '@lib/api-services/fetchSimilarProducts';
import { getDictionary } from '@lib/utils/dictionary';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import type { Locale } from '@i18n';

const Modal = dynamic(() => import('@components/components/Modal/Modal'), { ssr: false }); // Use dynamic import for Modal with ssr: false

const BagsDetailsPage = dynamic(() => import('@components/components/Modal/Modal')); // Adjust this to your BagsDetailsPage import

interface BagsDetailsProps {
  lang: Locale;
  id: string;
}

const BagsDetails: FC<BagsDetailsProps> = ({ lang, id }) => {
const { data: bagsData } = fetchBagsById({ id, slug: 'some-slug-value', currentLang: convertToServerLocale(lang) });
   // const { data: similarProductsData } = fetchSimilarProducts({ id, slug: 'some-slug-value', currentLang: convertToServerLocale(lang) });
    const { data: dictionaryData } = getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: dictionaryData.breadcrumbs.bags,
            path: '/bags',
          },
          {
            label: bagsData.name,
            path: `/bags/${bagsData.id}`,
          },
        ]}
        lang={lang}
      />
      <BagsDetailsPage
        product={bagsData}
        buttonsDict={dictionaryData.general.buttons}
        toastMessages={dictionaryData.general.messages}
        productDescriptionDict={dictionaryData.productDescription}
        configuratorDict={dictionaryData.page.embroidery?.configurator || {}}
      />
      <Modal
        active={true} // Adjust this based on your logic to show the modal
        setActive={() => {}} // Implement setActive function
      >
     
      </Modal>
    </>
  );
};

export default BagsDetails;
