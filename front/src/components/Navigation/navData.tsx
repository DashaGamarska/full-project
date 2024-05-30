import type { NavDictI } from '@components/types';

export const generateNavLinks = ({
  home,
  decorations,
  bracelet,
  earrings,
  necklace,
  embroidery,
  paymentAndDelivery,
  bags,
}: NavDictI) => {
  return {
    [home]: '',
    [decorations]: '/decorations',
    [bracelet]: '/decorations/sbracelet',
    [earrings]: '/decorations/earrings',
    [necklace]: '/decorations/necklace',
    [embroidery]: '/embroidery',
    [bags]: '/bags',
    [paymentAndDelivery]: '/payment-and-delivery',
  };
};
