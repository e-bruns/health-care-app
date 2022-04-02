import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
