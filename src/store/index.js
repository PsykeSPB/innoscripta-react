import { createStore, combineReducers } from "redux";
import cart from "./cart";

export default createStore(
  combineReducers({ cart }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
