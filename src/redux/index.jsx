import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counter";
import App from "./app.jsx";

// 自定义中间件规则
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log("[logger before]:", action);
  const result = next(action);
  console.log("[logger after]:", action, getState());
  return result;
};

const store = createStore(
  combineReducers({ counter: counterReducer }),
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("redux")
);
