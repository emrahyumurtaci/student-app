import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddStudent from "./pages/addStudent";
import About from "./pages/about";
import EditStudent from "./pages/editStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/EditStudent" element={<EditStudent />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
