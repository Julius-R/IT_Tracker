import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/styles.sass";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
