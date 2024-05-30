export const buildFilterQuery = (name: string, value: string | string[]) => {
  if (typeof value === 'string') {
    return `${name}=${value}`;
  }
  return value.map(value => `${name}=${value}`).join('&');
};
