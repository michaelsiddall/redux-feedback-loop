import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Initial feedback information
const initialFeedback = {
  feeling: "",
  understanding: "",
  support: "",
  comments: "",
};

const feedbackCategory = (state = initialFeedback, action) => {
  if (action.type === "SET_FEELING") {
    return {
      ...state,
      feeling: action.payload,
    };
  }
  if (action.type === "SET_UNDERSTANDING") {
    return {
      ...state,
      understanding: action.payload,
    };
  }
  if (action.type === "SET_SUPPORT") {
    return {
      ...state,
      support: action.payload,
    };
  }
  if (action.type === "SET_COMMENT") {
    return {
      ...state,
      comment: action.payload,
    };
  }
  return state;
};

const myStore = createStore(
  combineReducers({
    feedbackCategory,
  })
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
