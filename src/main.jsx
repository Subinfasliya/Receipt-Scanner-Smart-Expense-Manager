import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Expenses from "./pages/Expenses.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
