import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { PageProvider } from "./context/PageProvider.tsx";
import { DarkProvider } from "./context/DarkModeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkProvider>
      <PageProvider>
        <Router />
      </PageProvider>
    </DarkProvider>
  </StrictMode>
);
