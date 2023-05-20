import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { ProductContextHandler } from "./Context/ProductContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextHandler>
        <App />
      </ProductContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
