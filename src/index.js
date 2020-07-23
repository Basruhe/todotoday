import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import "./index.css";
// import { PersistGate } from 'redux-persist/integration/react'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={nul} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
