import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// @ts-expect-error TS2307 - Cannot find module x or its corresponding type declarations. ITS CSS not module
import "./index.css";

let root = document.getElementById("app");

if (root === null) {
  root = document.createElement("div");
  root.id = "app";
  document.body.appendChild(root);
}

const rootElement = createRoot(root);
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
