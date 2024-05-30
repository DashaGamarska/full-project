import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import PrivacyPolicyInfo from '@components/components/PrivacyPolicyInfo/PrivacyPolicyInfo';
import type { Locale } from '@i18n';
import { getDictionary } from '@lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `CraftedElegance | ${breadcrumbs.privacyPolicy}`,
  };
}

const PrivacyPolicy = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { breadcrumbs, page } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.privacyPolicy,
            path: `/privacy-policy`,
          },
        ]}
        lang={lang}
      />
      <PrivacyPolicyInfo dict={page.privacyPolicy.info} />
    </>
  );
};

export default PrivacyPolicy;
