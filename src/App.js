import React from "react";
import "./Reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Chat from "./components/Content/Chat/Chat";
import Home from "./components/Content/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page__wrapper">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
