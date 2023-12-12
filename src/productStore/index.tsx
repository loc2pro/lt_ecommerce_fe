import { createContext, useReducer } from 'react';
import { ADD_PRODUCT, DELETE_PRODUCT } from './constant';

export interface IProductCard {
  id: number;
  image: string;
  title: string;
  price: number;
  priceDiscount: number;
  inStock: number;
  reviews: number;
  quantity: number;
  brand: string;
}

interface IState {
  products: IProductCard[];
  shoppingCart: number;
}
export const initState = {
  products: [],
  shoppingCart: 0,
};
const store = createContext<any>(initState);
const { Provider } = store;
let dispatchIns:any;
let getState: any;
const StateProductProvider = ({ children }: any) => {
  let [state, dispatch] = useReducer((state: IState, action: any) => {
    switch (action.type) {
      case ADD_PRODUCT:
        const productInCard = state.products.find((product) => {
          return product.id === action.payload.id;
        });
        if (!productInCard) {
          const presenProduct = {
            id: action.payload.id,
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            priceDiscount: action.payload.priceDiscount,
            inStock: action.payload.inStock,
            reviews: action.payload.reviews,
            brand: action.payload.brand,
            quantity: 1,
          };
          return {
            products: [...state.products, presenProduct],
            shoppingCart: state.shoppingCart + 1,
          };
        } else {
          const newCart = state.products.map((product) => {
            if (product.id === action.payload.id) {
              const updateProduct = {
                ...product,
                quantity: product.quantity + 1,
              };
              return updateProduct;
            }
            return product;
          });
          return {
            products: [...newCart],
            shoppingCart: state.shoppingCart,
          };
        }

      case DELETE_PRODUCT:
        let newCart = state.products;
        const objIndex = newCart.findIndex((product) => product.id === action.payload.id);
        newCart.splice(objIndex, 1);
        return {
          products: [...newCart],
          shoppingCart: state.shoppingCart - 1,
        };
      default:
        return state;
    }
  }, initState);
  dispatchIns = dispatch;
  getState = state;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { StateProductProvider, dispatchIns, getState, store};