interface IUpdateItemValuesParams {
  item: IFilterItem;
  value: string;
}

export const updateItemValues = ({ item, value }: IUpdateItemValuesParams) => {
  const isParamIncluded = item.values.includes(value);
  return {
    ...item,
    values: isParamIncluded
      ? item.values.filter(item => item !== value)
      : [...item.values, value],
  };
};
