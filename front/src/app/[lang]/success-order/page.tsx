import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import SuccessOrderPage from '@components/components/SuccessOrderPage/SuccessOrderPage';
import type { Locale } from '@i18n';
import { getDictionary } from '@lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    breadcrumbs,
    metaInfo: {
      successOrder: { description },
    },
  } = await getDictionary(lang);

  return {
    title: `CraftedElegance | ${breadcrumbs.successOrder}`,
    description,
  };
}

export default async function SuccessOrder({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, breadcrumbs } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.successOrder,
            path: `/success-order`,
          },
        ]}
        lang={lang}
      />
      <SuccessOrderPage dict={page.successOrder} lang={lang} />
    </>
  );
}
