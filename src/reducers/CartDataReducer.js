import {
  ADD_UPDATE_CART_DATA,
  REMOVE_CART_DATA
} from "../actions/CartDataActions";

const blankCart = {
  id: 0,
  name: "",
  price: 0,
  image: "",
  category: "",
  quantity: 0
};

const INITIAL_STATE = { cartArray: [] };

const CartDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_UPDATE_CART_DATA:
      // Assuming this to be done in Backend, hence for local data did it at Reducer level. 
      let _cartArray = [...state.cartArray]
      let item
      if (_cartArray.length !== 0) {
        item = _cartArray.find(item => item.id === action.payload.id);
      }
      if (item) {
        item.quantity += 1;
        _cartArray = _cartArray.filter(item => item.id !== action.payload.id).concat(item);
      } else {
        _cartArray.push(action.payload)
      }
      return {
        ...state,
        cartArray: [..._cartArray],
      };
    case REMOVE_CART_DATA:
      const updatedItemList = state.cartArray.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartArray: updatedItemList,
      };
    default:
      return state;
  }
};

export default CartDataReducer
