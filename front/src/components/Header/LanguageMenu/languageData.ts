import flagEN from '../../../../public/images/icons/flag-UK.svg';
import flagUA from '../../../../public/images/icons/flag-ukraine.svg';

export interface ILanguage {
  id: string;
  lang: string;
  value: string;
  icon: string;
}

const languageData: ILanguage[] = [
  {
    id: '1',
    lang: 'UA',
    value: 'uk',
    icon: flagUA.src,
  },
  {
    id: '2',
    lang: 'EN',
    value: 'en',
    icon: flagEN.src,
  },
];

export default languageData;
