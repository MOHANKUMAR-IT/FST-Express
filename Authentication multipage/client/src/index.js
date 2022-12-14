import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AllRoutes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>
);