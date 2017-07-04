import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, createState } from "./state/RxState";
import reducer$ from "./reducers";

ReactDOM.render(
  <Provider state$={createState(reducer$)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
