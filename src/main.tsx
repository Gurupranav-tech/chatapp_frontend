import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SectionsProvider from "./contexts/SectionsContext";
import ConversationsContext from "./contexts/ConversationsContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SectionsProvider>
      <ConversationsContext>
        <App />
      </ConversationsContext>
    </SectionsProvider>
  </StrictMode>,
);
