import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center">
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "link")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "link")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "link")}
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "link")}
        to="/portofolio"
      >
        Portofolio
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "link")}
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
}
export default Navbar;
