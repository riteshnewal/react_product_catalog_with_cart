/** Action Types */
export const ADD_UPDATE_CART_DATA = "add-cart-data";
export const GET_CART_DATA = "get-cart-data";
export const REMOVE_CART_DATA = "remove-cart-data";

export const fetchCartData = (callback, callbackError) => {

};

export const addCartReducer = (data) => {
  return {
    type: ADD_UPDATE_CART_DATA,
    payload: data,
  };
};

export const removeCartReducer = (data) => {
  return {
    type: REMOVE_CART_DATA,
    payload: data,
  };
};
