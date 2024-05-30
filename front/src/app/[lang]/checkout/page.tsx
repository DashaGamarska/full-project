import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CheckoutPage from '@components/components/CheckoutPage/CheckoutPage';
import type { Locale } from '@i18n';
import { getDictionary } from '@lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `CraftedElegance | ${breadcrumbs.checkout}`,
  };
}

export default async function Checkout({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    breadcrumbs,
    page: {
      checkout
    },
    general: { messages },
  } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.checkout,
            path: `/checkout`,
          },
        ]}
        lang={lang}
      />
      <CheckoutPage dict={checkout} toastDict={messages} />
    </>
  );
}
