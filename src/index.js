import React from "react";
import ReactDOM from "react-dom";
// import { StrictMode } from "react";
// import {createRoot} from "react-dom/client"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
// const container = document.getElementById("root");

// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);