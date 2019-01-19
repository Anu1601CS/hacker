import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import tasks from "./reducers";
import App from "./components/App";
import initialData from "../data/items.json";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let data = initialData;

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

if (
  localStorage.getItem("cart") != "" &&
  localStorage.getItem("cart") != null
) {
  let restoreData = JSON.parse(localStorage.getItem("cart"));
  if(restoreData.length > 0){
    data = restoreData;
  }
}

const store = createStore(tasks, data, composeEnhancers(applyMiddleware(thunk, ...middleware)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
