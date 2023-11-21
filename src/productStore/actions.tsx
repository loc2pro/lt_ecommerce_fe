import { ADD_PRODUCT, DELETE_PRODUCT } from './constant';
interface IProductCard {
  id: number;
  image: string;
  title: string;
  price: number;
  priceDiscount: number;
  inStock: number;
  reviews: number;
  quantity: number;
}

export const addProduct = (product: IProductCard) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product: IProductCard) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
