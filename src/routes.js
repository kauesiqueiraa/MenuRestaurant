import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "components/Navbar";

import Home from "pages/Home";
import Menu from "pages/Menu";
import About from "pages/About";
import DefaultPage from "components/DefaultPage";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<DefaultPage />} >
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
          </Route>
          
        </Routes>
      </Router>
    </main>
  );
}