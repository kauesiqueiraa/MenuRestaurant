import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "pages/About";
import Dish from "pages/Dish";
import Home from "pages/Home";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";

import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

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
          <Route path="dish/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}