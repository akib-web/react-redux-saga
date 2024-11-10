import { CART_ACTIONS } from "./config";

export const productList = (data) => {
  console.warn('product list action', data);
  return {
    type: CART_ACTIONS.TYPES.PRODUCT_LIST,
    // data: data
  }
}