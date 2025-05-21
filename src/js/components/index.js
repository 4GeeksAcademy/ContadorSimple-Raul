 import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";
import Home from "./component/home.jsx";

// Este div con id="app" ya lo genera Vite en el HTML base
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Home />);
