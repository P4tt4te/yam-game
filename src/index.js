import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./store/reducers/gameReducer";
import gameHistoryReducer from "./store/reducers/gameHistoryReducer";

const store = configureStore({
  reducer: {
    gameReducer,
    gameHistoryReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
