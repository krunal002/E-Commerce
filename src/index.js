import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { ProductContextHandler } from "./Context/ProductContext";
import { CategoryContextHandler } from "./Context/CategoryContext";
import { LoginContextHandler } from "./Context/LoginContext";
import { CartContextHandler } from "./Context/CartContext";
import { WishlishContextHandler } from "./Context/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextHandler>
        <CategoryContextHandler>
          <LoginContextHandler>
            <CartContextHandler>
              <WishlishContextHandler>
                <App />
              </WishlishContextHandler>
            </CartContextHandler>
          </LoginContextHandler>
        </CategoryContextHandler>
      </ProductContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
