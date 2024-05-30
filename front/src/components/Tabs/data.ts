type dataI = {
  fullTitle: string[];
  abbreviatedTitle: string[];
};

export type tabsI = {
  fullTitle: string;
  abbreviatedTitle: string;
  link: string;
};

export const tabsData = (data: dataI) => {
  return [
    {
      fullTitle: data.fullTitle[0],
      abbreviatedTitle: data.abbreviatedTitle[0],
      link: '/candles/soy-candles',
    },
    {
      fullTitle: data.fullTitle[1],
      abbreviatedTitle: data.abbreviatedTitle[1],
      link: '/candles/coconut-candles',
    },
    {
      fullTitle: data.fullTitle[2],
      abbreviatedTitle: data.abbreviatedTitle[2],
      link: '/candles/palm-candles',
    },
  ];
};

