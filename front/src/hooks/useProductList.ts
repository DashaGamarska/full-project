'use client';

import { useEffect, useState } from 'react';
import { getInitialCartProducts } from '@components/helpers';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { extractErrorMessage } from '@components/helpers/extractErrorMessage';
import { useCartContext } from '@context/CartContext';
import { fetchCartDecorations } from '@lib/api-services/fetchCartDecorations';
import { fetchCartEmbroidery } from '@lib/api-services/fetchCartEmbroidery';

import { useLangFromPathname } from './useLangFromPathname';
import { getStorageValue } from './useLocalStorage';
import { useStatusState } from './useStatusState';

export const useProductList = () => {
  const { cartProducts } = useCartContext();
  const [products, setProducts] = useState<ICartProduct[] | []>([]);

  const lang = useLangFromPathname();
  const currentLang = convertToServerLocale(lang);

  const { state, handleStatus } = useStatusState({
    isLoading: false,
    hasError: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDecorations = async (
    decorationsIds: string[],
    decorations: ICartDecoration[]
  ) => {
    try {
      if (decorationsIds.length > 0) {
        handleStatus('isLoading', true);
        const data = await fetchCartDecorations({
          lang: currentLang,
          ids: decorationsIds,
        });

        if (!Array.isArray(data)) {
          throw new Error('Error by fetching cart decorations');
        }

        const modifiedDecorations = decorations?.map(
          ({ id, quantity, price }) => {
            const decorationData = data?.find(item => item.id === id)!;
            return { ...decorationData, quantity, price };
          }
        );
        setProducts(prevProducts => [...prevProducts, ...modifiedDecorations]);
      }
    } catch (error: unknown) {
      handleStatus('hasError', true);
      const errorMessage = extractErrorMessage(error);
      console.error(errorMessage);
    } finally {
      handleStatus('isLoading', false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getEmbroidery = async (
    embroideryIds: string[],
    embroidery: ICartEmbroidery[]
  ) => {
    console.log('getEmbroidery', products);
    try {
      if (embroideryIds.length > 0) {
        handleStatus('isLoading', true);
        const data = await fetchCartEmbroidery({
          lang: currentLang,
          ids: embroideryIds,
        });

        if (!Array.isArray(data)) {
          throw new Error('Error by fetching cart embroidery');
        }

        const modifiedEmbroidery = embroidery.map(({ id, quantity, price }) => {
          const embroideryData = data.find(item => item.id === id)!;
          return { ...embroideryData, quantity, price };
        });

        console.log('modifiedEmbroidery', modifiedEmbroidery);
        
        setProducts(prevProducts => [...prevProducts, ...modifiedEmbroidery]);
        
        console.log('setProducts', products);

      }
    } catch (error: unknown) {
      handleStatus('hasError', true);
      const errorMessage = extractErrorMessage(error);
      console.error(errorMessage);
    } finally {
      handleStatus('isLoading', false);
    }
  };

  useEffect(() => {
    const initCardProducts = getInitialCartProducts();

    const cartItems = getStorageValue<ICartProducts>(
      'cartProducts',
      initCardProducts
    );

    const { embroidery, decorations } = cartItems;

    const embroideryIds = !cartProducts.embroidery.length
      ? embroidery.map(item => item.id)
      : cartProducts.embroidery.map(item => item.id);
    const decorationsIds = !cartProducts.decorations.length
      ? decorations.map(item => item.id)
      : cartProducts.decorations.map(item => item.id);

    const embroideryData = !cartProducts.embroidery.length
      ? embroidery
      : cartProducts.embroidery;
    const decorationsData = !cartProducts.decorations.length
      ? decorations
      : cartProducts.decorations;

    getDecorations(decorationsIds, decorationsData);
    getEmbroidery(embroideryIds, embroideryData);
  }, [
    cartProducts.embroidery,
    cartProducts.decorations,
    getDecorations,
    getEmbroidery,
    lang,
  ]);

  const handleDelete = ({ id, isEmbroidery }: IHandleDeleteParams) => {
    setProducts(prevItems => {
      if (!isEmbroidery) {
        return prevItems.filter(item => item.id !== id);
      } else {
        const position = prevItems.findIndex(item => item.id === id);

        return position !== -1
          ? prevItems.filter((_, index) => index !== position)
          : prevItems;
      }
    });
  };
  console.log('cartProducts', cartProducts);
  console.log('useProductList', products);

  return {
    products,
    isLoading: state.isLoading,
    handleDelete,
    hasError: state.hasError,
  };
};
