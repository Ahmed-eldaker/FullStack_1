import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Product from "./Product";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <p>hello from main file</p> */}
    {/* <main /> */}
    <App />
  </StrictMode>
);
