import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
