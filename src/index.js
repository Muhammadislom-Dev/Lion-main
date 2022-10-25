import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@splidejs/react-splide/css";
import "./index.css";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div
           onClick={() => window.scroll(0,0)}
          className="loader"
          style={{
            fontSize: "50px",
            fontWeight: 500,
            fontFamily: "Fredoka",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top:"0",
          }}
        >
          <div className="load"></div>
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>
);
