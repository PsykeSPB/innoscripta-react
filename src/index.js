import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>This is react app now! Excellent!</div>
  </Provider>,
  document.getElementById("app")
);
