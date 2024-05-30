export const getFilterQuery = (params: [string, string][]) => {
  return params.length
    ? params
        .map(([key, value]) =>
          key === 'page' ? `${key}=1` : `${key}=${value}`
        )
        .flat()
        .join('&')
    : '';
};
