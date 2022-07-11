import { combineReducers } from "redux";
import user from "../store/user/reducer";
import product from "../store/product/reducer";

export default combineReducers({
  user,
  product,
});
