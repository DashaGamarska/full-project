export const convertStringToNumber = (
  value: string | string[] | undefined,
  defaultValue: number
) => {
  if (typeof value === 'string') {
    const convertedValue = Number(value);
    return isNaN(convertedValue) ? defaultValue : convertedValue;
  }
  return defaultValue;
};
