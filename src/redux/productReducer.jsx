import { CART_ACTIONS } from "./config";

export const productData = (data = [] , action) => {
  console.warn('productList reducer is called',data,action);

  switch (action.type) {
    case CART_ACTIONS.TYPES.SET_PRODUCT_LIST:
      console.warn('SET_PRODUCT_LIST const is called',action);
      return action.data;

    default:
      return data;
  }
}