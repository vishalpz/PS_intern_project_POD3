import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import LoginGuest from "./pages/LoginGuest";
import Loading1 from "./pages/Loading1";
import SignUp from "./pages/SignUp";
import Greeting from "./pages/Greeting";
import ChatBot from "./pages/ChatBot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimationSwipe from "./comps/AnimationSwipe";
import PromptButtonContainer from "./containers/PromptButtonContainer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginOrGuest" element={<LoginGuest />} />
      <Route path="/Load1" element={<Loading1 />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Greet" element={<Greeting />} />
      <Route path="/SwipeA" component={<AnimationSwipe/>} />
      <Route path="/ChatBot" element={<ChatBot/>} />
      <Route path="/PromptB" component={<PromptButtonContainer/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
