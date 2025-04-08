import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./translations/i18n.ts";
import "./styles/index.scss";
import App from "./pages/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
