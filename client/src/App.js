import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
