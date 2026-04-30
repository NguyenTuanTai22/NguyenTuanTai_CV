import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Social from "./pages/Social/Social";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  )
}

export default App