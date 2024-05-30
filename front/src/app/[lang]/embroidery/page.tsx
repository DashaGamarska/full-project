import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import EmbroideryInfo from '@components/components/EmbroideryPage/EmbroideryInfo/EmbroideryInfo';
import EmbroiderySection from '@components/components/EmbroideryPage/EmbroiderySection/EmbroiderySection';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import type { Locale } from '@i18n';
import { fetchEmbroidery } from '@lib/api-services/fetchEmbroidery';
import { getDictionary } from '@lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `CraftedElegance | ${breadcrumbs.embroidery}`,
  };
}

const Embroidery = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    breadcrumbs,
    page: {
      embroidery: { section, info },
    },
    general: {
      messages: { itemAdded },
    },
  } = await getDictionary(lang);
  const currentLang = convertToServerLocale(lang);
  const promise = await fetchEmbroidery(currentLang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.embroidery,
            path: `/embroidery`,
          },
        ]}
        lang={lang}
      />

      <EmbroiderySection
        dict={section}
        toastMessage={itemAdded}
        embroidery={promise}
        lang={lang}
      />
      <EmbroideryInfo dict={info} />
    </>
  );
};

export default Embroidery;
