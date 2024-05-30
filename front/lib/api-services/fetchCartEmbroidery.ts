import { BASE_URL } from '@components/constants';
import { EmbroideryDetailsI } from "@components/types";

export const fetchCartEmbroidery = async ({
  lang,
  ids,
}: CartApiRequest): Promise<EmbroideryDetailsI[]> => {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(ids),
  });

  if (!response.ok) throw new Error('Error by fetching cart embroidery.');
  const data = await response.json();
  console.log("data", data);
  return data;
};
