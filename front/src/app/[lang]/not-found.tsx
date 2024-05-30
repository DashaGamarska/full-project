'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import CustomLink from '@components/components/shared/CustomLink/CustomLink';
import Typography from '@components/components/Typography/Typography';
import { Locale } from '@i18n';
import notFoundImg from '@images/icons/not-found.svg';
import { getDictionary } from '@lib/utils/dictionary';

import styles from './not-found.module.scss';

interface DictionaryState {
  text: string;
  linkText: string;
  altText: string;
}

export default function NotFound() {
  const [dictionary, setDictionary] = useState<DictionaryState | null>(null);
  const pathName = usePathname();
  const lang: Locale = pathName ? (pathName.split('/')[1] as Locale) : 'uk';

  useEffect(() => {
    async function fetchData() {
      try {
        const { page } = await getDictionary(lang);
        setDictionary(page.notFound);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [lang]);

  return (
    <Section id={styles.notFound}>
      <Container className={styles.notFound__container}>
        <Typography variant="subheding4" color="var(--cl-primary-500)">
          404
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.notFound__text}
        >
          {dictionary?.text}
        </Typography>
        <Image
          src={notFoundImg}
          alt={
            dictionary?.altText ||
            'An image of a young boy holding a lit decoration close to his chest, creating a warm and intimate atmosphere.'
          }
          sizes="(min-width: 1230px) 190px, 
          (min-width: 768px) 198px,
          110px"
        />
        <CustomLink variant="secondary" href={`/${lang}`}>
          {dictionary?.linkText}
        </CustomLink>
      </Container>
    </Section>
  );
}
