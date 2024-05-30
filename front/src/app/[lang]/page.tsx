import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
import Subscription from '@components/components/Subscription/Subscription';
import type { Locale } from '@i18n';
import { getDictionary } from '@lib/utils/dictionary';

import Compass from '../../components/Compass/Compass';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation } = await getDictionary(lang);
  return {
    title: `CraftedElegance | ${navigation.home}`,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    page: {
      home: { hero, about, compass, subscription },
      checkout: {
        form: {
          errorMessages: { emailReq, validEmail },
        },
      },
    },
    general: {
      messages: { successSubscription, failedRequest },
    },
  } = await getDictionary(lang);
  return (
    <>
      <Hero dict={hero} />
      <AboutUsSection dict={about} />
      <Compass dict={compass} lang={lang} />
      <Subscription
        dict={{ subscription, emailReq, validEmail }}
        toastDict={{ successSubscription, failedRequest }}
      />
    </>
  );
}
