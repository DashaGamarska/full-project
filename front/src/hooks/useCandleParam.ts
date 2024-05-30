'use client';
import { useState } from 'react';
import { getInitParamCandle } from '@components/helpers';
import { CustomCandleDescription } from '@components/types';

export const useCandleParam = () => {
  const [paramCandle, setParamCandle] = useState<CustomCandleDescription>(
    getInitParamCandle()
  );

  const handleChangeCandleParam = (key: string, param: number) => {
    setParamCandle({ ...paramCandle, [key]: param });
  };

  return {
    paramCandle,
    handleChangeCandleParam,
  };
};
