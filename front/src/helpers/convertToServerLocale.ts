import type { Locale } from '@i18n';

export const convertToServerLocale = (lang: Locale): ServerLocale => {
  return lang === 'uk' ? 'UA' : 'EN';
};
