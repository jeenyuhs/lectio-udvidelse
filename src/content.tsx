import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
document.body.innerHTML = "";
const _root = document.createElement("div");
document.body.appendChild(_root);

const root = createRoot(_root);
root.render(<App />);