import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
