import React, { useState } from "react";
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

  const [sidbarIsOpen, setSidebaeIsOpen] = useState(false);

  return (
    <>
      <div className="h-20  flex items-center justify-between fixed top-0 left-0 w-full z-50 px-5 lg:px-20 backdrop-blur-md border-b border-gray-700">

        {/* ====== Logo ======= */}
        <p
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => {
          document.getElementById("home").scrollIntoView({behavior: "smooth",});}}>
          Chandan
        </p>

        {/* ====== Nav Links ====== */}
        <div className="bg-black/30 h-14 w-full hidden lg:flex items-center justify-center gap-10 mx-10 rounded-full text-[17px] border border-gray-700">
          {links.map(({ to, label }) => (
            <a key={to} href={to} >
              {label}
            </a>
          ))}
        </div>

        {/* ====== CTA Button ====== */}
        <div className="flex gap-5">
          <button
          onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth",});}}
            className="font-mono bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] h-10 lg:h-14 px-5 w-auto rounded-xl text-[17px] text-black border cursor-pointer shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.25)] font-semibold md:flex justify-center items-center gap-2 hidden" >
            <FaPhoneAlt /> Let's Talk
          </button>

          <button className="text-3xl text-[#00f7ff] lg:hidden border border-gray-700 p-2 rounded-lg"
            onClick={() => setSidebaeIsOpen(true)}>
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

        <div className={`lg:hidden fixed top-0 right-0 h-screen w-55 md:w-1/2 bg-black/80 transform transition-transform duration-200 ${sidbarIsOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
          <button
            onClick={() => setSidebaeIsOpen(false)}
            className="absolute top-6 right-7 text-3xl text-[#00f7ff] border border-gray-700 p-2 rounded-lg">
            <FaTimes />
          </button>

          <div className="flex flex-col gap-5 pt-20 px-5">
              {links.map(({ to, label }) => (
                <a
                  key={to}
                  href={to}
                  onClick={()=>setSidebaeIsOpen(false)}>
                    {label}
                </a>
              ))}
            </div>
        </div>
    </>
  );
};

export default Navbar;
