import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux
// import { connect } from "react";
// import { Provider } from "react-redux";

// const myStore = creatStore({})

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
