import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {

  const links = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#services", label: "Services" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  const navigate = useNavigate();
  const [sidbarIsOpen, setSidebaeIsOpen] = useState(false);

  return (
    <>
      <div className="h-20 border-b border-gray-700 flex items-center justify-between fixed top-0 left-0 w-full z-50 backdrop-blur-lg px-5 lg:px-20">

        {/* ====== Logo ======= */}
        <p
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => {
          document.getElementById("home").scrollIntoView({behavior: "smooth",});}}
          // onClick={() => {
          //   navigate("/");
          // }}
        >
          Chandan
        </p>

        {/* ====== Nav Links ====== */}
        <div className="bg-[#1c1c1c] h-14 w-full hidden lg:flex items-center justify-center gap-10 mx-10 rounded-full text-[17px] border border-gray-700">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              // className={({ isActive }) =>
              //   `px-4 py-1.5 rounded-full transition-all duration-200 ${ isActive
              //       ? "bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] text-black"
              //       : "hover:bg-[#1e4142]"
              //   }`
              // }
              >
              {label}
            </a>
          ))}
        </div>

        {/* ====== CTA Button ====== */}
        <div className="flex gap-5">
          <button
          onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth",});}}
            className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] h-10 lg:h-14 px-5 w-auto rounded-full text-[17px] text-black border cursor-pointer shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.25)] font-semibold md:flex justify-center items-center gap-2 hidden"
            // onClick={() => {
            //   navigate("/contact");
            // }}
          >
            <FaPhoneAlt /> Let's Talk
          </button>

          <button
            className="text-3xl text-[#00f7ff] lg:hidden"
            onClick={() => setSidebaeIsOpen(true)}
          >
            <VscThreeBars />
          </button>
        </div>
      </div>


      {/* ====== sidebar ====== */}

        {sidbarIsOpen && (
          <div
            onClick={() => setSidebaeIsOpen(false)}
            className="lg:hidden fixed inset-0 backdrop-blur-lg z-40"
          />
        )}

        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-55 bg-[#141414] transform transition-transform duration-200 ${sidbarIsOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
          <button
            onClick={() => setSidebaeIsOpen(false)}
            className="absolute top-6 right-5 text-3xl text-[#00f7ff]">
            <FaTimes />
          </button>

          <div className="flex flex-col gap-5 pt-20 px-5">
              {links.map(({ to, label }) => (
                <a
                  key={to}
                  href={to}
                  onClick={()=>setSidebaeIsOpen(false)}
                  // className={({ isActive }) =>`px-4 py-1.5 rounded-full transition-all duration-200 ${ isActive ? "bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] text-black" : "hover:bg-[#1e4142]" }`}
                  >
                    {label}
                </a>
              ))}
            </div>
        </div>
    </>
  );
};

export default Navbar;
