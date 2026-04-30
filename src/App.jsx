import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Skills from "./pages/Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Social from "./pages/Social/Social";
import Settings from "./Settings/Settings";
import ClickRipple from "./components/ClickRipple";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  
  return (
    <>
      <Header showHint={isHomePage} />
      <ClickRipple />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info />} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/social" element={<Social />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App