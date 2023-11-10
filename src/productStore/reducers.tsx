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

interface IState {
  products: IProductCard[];
  shoppingCart: number;
}
export const initState = {
  products: [],
  shoppingCart: 0,
};

const cartReducer = (state: IState, action: any) => {
  switch (action) {
    case ADD_PRODUCT:
      const productInCard = state.products.find((product) => {
        product.id === action.payload.id;
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
          quantity: 1,
        };
        return {
          products: [...state.products, action.payload],
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
      }

    case DELETE_PRODUCT:
      let newCart = state.products;
      const objIndex = newCart.findIndex((product) => product.id === action.payload.id);
      newCart.slice(objIndex, 1);
      return {
        products: [...newCart],
        shoppingCart: state.shoppingCart - 1,
      };
    default:
      break;
  }
};
export default cartReducer;