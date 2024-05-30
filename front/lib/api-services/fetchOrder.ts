import { convertToServerLocale } from "@components/helpers/convertToServerLocale";
import { Locale } from "@i18n*";

export const sendOrder = async (order: {}, lang: Locale) => {


  const response = await fetch(`/api/checkout/orders?lang=${convertToServerLocale(lang)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  if (response.status !== 200 ) {
    throw new Error('Failed to fetch data');
  };
};

