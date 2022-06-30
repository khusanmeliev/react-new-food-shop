import { createStore } from "redux";
import reducer from "../store/reducers/productReducer";

const store = createStore(reducer);

export default store;
