import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import LoginGuest from "./pages/LoginGuest";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginOrGuest" element={<LoginGuest />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
