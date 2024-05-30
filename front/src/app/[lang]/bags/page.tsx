import BagsInfo from '@components/components/BagsPage/BagsInfo/BagsInfo';
import BagsSection from '@components/components/BagsPage/BagsSection/BagsSection';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { Locale } from '@i18n';
import { fetchBags } from '@lib/api-services/fetchBags';
import { getDictionary } from '@lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation } = await getDictionary(lang);
  return {
    title: `CraftedElegance | ${navigation.bags}`,
  };
}

const Bags = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    breadcrumbs,
    page: {
      bags: { header, section, info },
    },
    general: {
      messages: { itemAdded },
    },
  } = await getDictionary(lang);
  const currentLang = convertToServerLocale(lang);
  const promise = fetchBags(currentLang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.bags,
            path: '/bags',
          },
        ]}
        lang={lang}
      />

      <BagsSection
        dict={section}
        toastMessage={itemAdded}
        bags={promise}
        lang={lang}
      />
      <BagsInfo dict={info} />
    </>
  );
};

export default Bags;
