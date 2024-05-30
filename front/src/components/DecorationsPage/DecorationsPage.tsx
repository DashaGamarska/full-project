import { Await } from '@components/helpers/Await';
import type { Locale } from '@i18n';

import DecorationsSection from '../DecorationsSection/DecorationsSection';
import Pagination from '../shared/Pagination/Pagination';
import Tabs from '../Tabs/Tabs';
import WaxDesc from '../WaxDesc/WaxDesc';

import styles from './DecorationsPage.module.scss';

interface DecorationsPageI {
  dictWax: {
    waxDesc: {
      title: string;
      text: string;
      volumeLabel?: string;
    };
  };
  dict: {
    tabs: {
      fullTitle: string[];
      abbreviatedTitle: string[];
    };
    filter: any;
  };
  lang: Locale;
  decorations: Promise<DecorationsApiResponse>;
  paginBtnDict: string;
}

const DecorationsPage: React.FC<DecorationsPageI> = ({
  dictWax,
  dict,
  lang,
  decorations,
  paginBtnDict,
}) => {
  return (
    <>
      <Tabs dict={dict} lang={lang} />
      <DecorationsSection
        dict={dict}
        decorations={decorations}
        paginBtnDict={paginBtnDict}
      />
    </>
  );
};

export default DecorationsPage;
