export const generateFilteredQueryString = (
  params: [string, string][],
  value: string
): string => {
  const filteredParams = params
    .filter(([_, val]) => val !== value)
    .map(([key, value]) => (key === 'page' ? `${key}=1` : `${key}=${value}`))
    .flat();

  return filteredParams.join('&');
};
