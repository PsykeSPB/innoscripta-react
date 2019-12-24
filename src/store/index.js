import { createStore, combineReducers } from "redux";
import cart from "./cart";
import order from "./order";

export default createStore(
  combineReducers({ cart, order }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
