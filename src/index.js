import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'antd-css-utilities/utility.min.css';
import "./assets/scss/main.scss";

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
