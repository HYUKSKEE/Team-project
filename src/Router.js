import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  </BrowserRouter>;
}
