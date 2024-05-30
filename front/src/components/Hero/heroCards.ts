import heroBg from '../../../public/images/hero/hero.webp';

export interface HeroContent {
  id: number;
  backgroundImage: string;
  headings: string[];
  buttonText: string;
}

export const generateHeroCards = (dict: {
  heading: string[][];
  buttonText: string;
}): HeroContent[] => {
  return [
    {
      id: 1,
      backgroundImage: heroBg.src,
      headings: dict.heading[0],
      buttonText: dict.buttonText,
    },
    {
      id: 2,
      backgroundImage: heroBg.src,
      headings: dict.heading[1],
      buttonText: dict.buttonText,
    },
    {
      id: 3,
      backgroundImage: heroBg.src,
      headings: dict.heading[2],
      buttonText: dict.buttonText,
    },
  ];
};
