import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProductContext from "./ecommerce2/Contexts/ProductContext";

import CrudContext from "./ecommerce2/Contexts/CrudContext"



const client = ReactDOM.createRoot(document.getElementById('root'))

client.render(
  <React.StrictMode>


    <CrudContext>
    <ProductContext>
    <App />
    </ProductContext>
    </CrudContext>
    
  </React.StrictMode>
)