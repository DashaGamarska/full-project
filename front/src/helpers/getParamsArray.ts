export const getParamsArray = (
  searchParamsValues: IterableIterator<[string, string]>
) => {
  const params = [];
  for (const entry of searchParamsValues) {
    params.push(entry);
  }
  return params;
};
