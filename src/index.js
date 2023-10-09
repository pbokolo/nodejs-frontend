import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./ui/App";
import "./ui/style/main.scss";
import store from "./model/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
