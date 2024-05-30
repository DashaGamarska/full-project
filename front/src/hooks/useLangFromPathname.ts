'use client';
import { usePathname } from 'next/navigation';
import type { Locale } from '@i18n';

export const useLangFromPathname = (): Locale => {
  const pathName = usePathname();
  const lang = pathName.split('/')[1];
  return lang as Locale;
};
