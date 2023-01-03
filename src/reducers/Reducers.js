import { combineReducers } from "redux";
import CartDataReducer from "./CartDataReducer";

export const reducers = combineReducers({
  cartData: CartDataReducer,
});
