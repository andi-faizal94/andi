import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <NavLink
          className={(
            { NavLink } //(isActive) --> ({isActive})
          ) =>
            NavLink
              ? "isActive NavLink cursor-pointer hover:text-gray-100"
              : "NavLink scroll-smooth"
          }
          // className="NavLink scroll-smooth"
          to="/"
          duration={500}
        >
          <h1 className="hover:text-gray-100 font-bold hover:scale-x-110">
            Andi
            <span className="text-green-400 font-bold font-serif ">
              .Faizal
            </span>{" "}
          </h1>
        </NavLink>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <NavLink
          className="NavLink scroll-smooth cursor-pointer hover:text-gray-100 hover:scale-x-110"
          to="/"
          duration={500}
        >
          Home
        </NavLink>
        <NavLink
          className="NavLink scroll-smooth cursor-pointer hover:text-gray-100 hover:scale-x-110"
          to="/about"
          duration={500}
        >
          About
        </NavLink>
        <NavLink
          className="NavLink scroll-smooth cursor-pointer hover:text-gray-100 hover:scale-x-110"
          to="/portofolio"
          duration={500}
        >
          Portofolio
        </NavLink>
        <NavLink
          className="NavLink scroll-smooth cursor-pointer hover:text-gray-100 hover:scale-x-110"
          to="/blog"
          duration={500}
        >
          Blog
        </NavLink>
        <NavLink
          className="NavLink scroll-smooth cursor-pointer hover:text-gray-100 hover:scale-x-110"
          to="/contact"
          duration={500}
        >
          Contact
        </NavLink>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <NavLink
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100"
          onClick={handleClick}
          to="/"
          duration={500}
        >
          Home
        </NavLink>
        <NavLink
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100"
          onClick={handleClick}
          to="/about"
          duration={500}
        >
          About
        </NavLink>
        <NavLink
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100"
          onClick={handleClick}
          to="/portofolio"
          duration={500}
        >
          Portofolio
        </NavLink>
        <NavLink
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100"
          onClick={handleClick}
          to="/blog"
          duration={500}
        >
          Blog
        </NavLink>
        <NavLink
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100"
          onClick={handleClick}
          to="/contact"
          duration={500}
        >
          Contact
        </NavLink>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/andifaizal94/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/andi-faizal94"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e4409d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/ical_andifaizal/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://andifz9475@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
