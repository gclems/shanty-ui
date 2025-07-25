import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { App } from "./demo/app";

import "./demo/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
