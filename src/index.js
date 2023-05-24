import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { ProductContextHandler } from "./Context/ProductContext"
import { CategoryContextHandler } from "./Context/CategoryContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextHandler>
      <CategoryContextHandler>
      <App />
      </CategoryContextHandler>
      </ProductContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
