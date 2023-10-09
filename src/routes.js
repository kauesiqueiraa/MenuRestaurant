import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Menu from "pages/Menu";
import About from "pages/About";
import NotFound from "pages/NotFound";

import DefaultPage from "components/DefaultPage";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<DefaultPage />} >
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}