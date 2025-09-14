
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { SelectionProvider } from "./contexts/SelectionContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SelectionProvider>
  </React.StrictMode>
);
