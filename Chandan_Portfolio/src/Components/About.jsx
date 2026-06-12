import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 px-5 lg:px-25 bg-[#141414]">

      {/* ===== Image Section ====== */}
      <div className="grid items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center lg:justify-end w-full">

          {/* CYAN GLOW */}
          <div className="absolute w-[320px] h-80 md:w-105 md:h-105 bg-cyan-400/50 blur-3xl rounded-full animate-pulse"></div>

          {/* ====== IMAGE CONTAINER ====== */}
          <div className="relative w-75 h-105 md:w-95 md:h-125 rounded-4xl bg-linear-to-b from-cyan-400/30 to-transparent p-0.75 shadow-[0_0_40px_rgba(0,217,255,0.2)] overflow-hidden">
            {/* INNER BOX */}
            <div className="w-full h-full bg-[#0B1120] rounded-4xl overflow-hidden">
              <img
                src="./src/assets/chandan.jpeg"
                alt="Chandan"
                className="w-full h-full object-cover hover:scale-107 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* <button className="border border-gray-700 rounded-full lg:px-7 px-6 py-3 flex justify-center items-center gap-3 cursor-pointer hover:bg-[#00f7ff] hover:text-black duration-300 hover:shadow-xl hover:shadow-cyan-600/50">
          Donwnload CV
        </button> */}
      </div>

      {/* ===== About Me ===== */}
      <div className="flex flex-col items-center justify-center">
        {/* ------ heading ------ */}
        <div className="grid place-items-center gap-3">
          <h1 className=" text-3xl md:text-5xl text-[#00f7ff] font-extrabold ">About Me</h1>
          <div className="h-2 w-25 bg-[#00f7ff] rounded-full"></div>
        </div>

        {/* ------ About me information ------ */}
        <div className="mt-10 grid gap-5">
          <div>
            <p className="text-gray-400">
              I'm a fresher software developer with a strong foundation in full-stack web development. I have a keen eye for clean UI and efficient back-end logic. I believe in learning by doing — most of what I know comes from building real projects, breaking things, and fixing them. I'm currently looking for my first professional opportunity where I can contribute, grow, and make an impact.
            </p>
          </div>

          <div className="h-20 w-full bg-[#1a2026] rounded-lg  flex flex-col justify-center border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]">
            <div className="flex items-center justify-start gap-5 ml-5">
              <div>
                <MdCastForEducation className="text-2xl text-[#00f7ff]" />
              </div>
              <div className="">
                <p className="font-bold text-lg">Education</p>
                <p className=" text-gray-400">Computer Sciencce</p>
              </div>
            </div>
          </div>
          <div className="h-20 w-full bg-[#1a2026] rounded-lg  flex flex-col justify-center border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]">
            <div className="flex items-center justify-start gap-5 ml-5">
              <div>
                <FaLocationDot className="text-2xl text-[#00f7ff]" />
              </div>
              <div className="">
                <p className="font-bold text-lg">Location</p>
                <p className=" text-gray-400">Ranchi</p>
              </div>
            </div>
          </div>
          <div className="h-20 w-full bg-[#1a2026] rounded-lg  flex flex-col justify-center border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]">
            <div className="flex items-center justify-start gap-5 ml-5">
              <div>
                <FaBriefcase className="text-2xl text-[#00f7ff]" />
              </div>
              <div className="">
                <p className="font-bold text-lg">Experience</p>
                <p className=" text-gray-400">Fresher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
