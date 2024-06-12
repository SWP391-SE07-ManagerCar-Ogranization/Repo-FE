import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProviderConfig } from "./component/ConText/CartContext";

import { ThemeProvider } from "@material-tailwind/react";

import { MaterialTailwindControllerProvider } from "./context";
import { ThemeProviderDo } from "./context/accountData";
// import GlobalStyles from "./component/GlobalStyles";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviderConfig>
    <ThemeProvider>
      <ThemeProviderDo>
      <MaterialTailwindControllerProvider>
      <App />
      </MaterialTailwindControllerProvider>
      </ThemeProviderDo>
    </ThemeProvider>
    </ThemeProviderConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
