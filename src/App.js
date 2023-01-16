import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddStudent from "./pages/addStudent";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddStudent" element={<AddStudent />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
