import { useFetch } from '../useFetch';

export const useFetchProduct = (productId: string | undefined) => {
  return useFetch(`/products/${productId}`);
};
