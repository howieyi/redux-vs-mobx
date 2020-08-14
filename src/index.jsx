import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import App from "./app.jsx";

const store = createStore(combineReducers({ counter: counterReducer }));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
