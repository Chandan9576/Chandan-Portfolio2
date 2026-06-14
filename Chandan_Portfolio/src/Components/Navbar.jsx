import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="h-20 border-b border-gray-700 flex items-center justify-between fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      {/* Logo */}
      <p className="text-3xl font-bold text-white cursor-pointer" onClick={()=>{navigate("/")}}>Chandan</p>

      {/* Nav Links */}
      <div className="bg-[#1c1c1c] h-14 w-full hidden lg:flex items-center justify-center gap-5 mx-10 rounded-full text-[17px] border border-gray-700">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full transition-all duration-200 ${
                isActive ? "bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] text-black" : "hover:bg-[#1e4142]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] h-10 lg:h-14 px-5 w-auto rounded-full text-[17px] text-black border cursor-pointer shrink-0 transition-all
        duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.25)] font-semibold flex justify-center items-center gap-2"
        onClick={()=>{navigate("/contact")}}
      >
       <FaPhoneAlt/> Let's Talk
      </button>
    </div>
  );
};

export default Navbar;
