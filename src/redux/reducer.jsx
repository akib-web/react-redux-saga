import { CART_ACTIONS } from "./config";

export const cartData = (data = [] , action) => {
  console.warn('cartdata reducer is called',data,action);

  switch (action.type) {
    case CART_ACTIONS.TYPES.ADD_TO_CART:
      console.warn('ADD_TO_CART const is called',action);
      return [action.data, ...data];

    case CART_ACTIONS.TYPES.REMOVE_FROM_CART:
      console.warn('REMOVE_FROM_CART const is called',data);
      // Use slice to create a new array without mutating the original state const 
      data = data.filter((item)=>item.id !== action.data);
      return [ ...data ];

    case CART_ACTIONS.TYPES.EMPTY_CART:
      console.warn('EMPTY_CART const is called',data);
      data = [];
      return [ ...data ];

    default:
      return data;
  }
}