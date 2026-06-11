import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <div className="h-20 border-b border-gray-700 flex items-center justify-between px-5 lg:px-25 fixed top-0 left-0 w-full z-50 backdrop-blur-xl">
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
                isActive ? "bg-[#00f7ff] text-black" : "hover:bg-[#274a59]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="bg-[#00f7ff] h-10 lg:h-14 px-5 w-auto rounded-full text-[17px] text-black border cursor-pointer shrink-0 transition-all
        duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.25)] font-medium"
        onClick={()=>{navigate("/contact")}}
      >
        Let's Talk
      </button>
    </div>
  );
};

export default Navbar;
