import { CART_ACTIONS } from "./config";

export const addToCart = (data) => {
  console.warn('addToCart action is called:',data);
  return {
    type: CART_ACTIONS.TYPES.ADD_TO_CART,
    data: data
  };
}
export const removeFromCart = (data) => {
  console.warn('removeFromCart action is called:',data);
  return {
    type: CART_ACTIONS.TYPES.REMOVE_FROM_CART,
    data: data
  };
}
export const emptyCart = (data) => {
  console.warn('removeFromCart action is called:',data);
  return {
    type: CART_ACTIONS.TYPES.EMPTY_CART,
    data: data
  };
}