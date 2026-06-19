import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import profileImg from "../assets/chandanPortfolio.jpeg";

const Home = () => {
  const HireAndDownloadCVButton = [
    {
      name: "Hire Me",
      icon: FaArrowRight,
      link: "mailto:chandan95765@gmail.com",
    },
    {
      name: "Download CV",
      icon: FaDownload,
      link: "https://drive.google.com/file/d/15ZXzSQIlj0WyyL0Rfu06U3sGjeu9Pl5D/view?usp=drive_link",
    },
  ];

  const socialMedia = [
    {
      icon: FaWhatsapp,
      link: "https://wa.me/919576456165",
    },
    {
      icon: IoLogoGithub,
      link: "https://github.com/Chandan9576",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/chandan-kumar-prajapati-64b870371/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/https__chandan?igsh=aG02bnV2cmQ2NXQz",
    },
  ];

  const infoDiv = [
    {
      title: "Projects Completed",
      data: "3+",
    },
    {
      title: "Years Experience",
      data: "Fresher",
    },
    {
      title: "Commitment",
      data: "100%",
    },
  ];

  return (
    <section id="home" className="w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 px-5 lg:px-20 py-30 gap-15">
      <div className=" flex flex-col justify-center gap-5">

        {/* ====== Available for work section ====== */}
        <div className="flex items-center gap-5">
          <div className="h-1 w-12 bg-[#00f7ff]"></div>
          <p
            className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent
            uppercase
            tracking-[2px]
            text-lg
            font-semibold font-space"
          >
            AVAILABE FOR WORK
          </p>
        </div>

        {/* ====== Heading - chandan section ====== */}
        <div className="space-y-1">
          <h1 className="font-space text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm Chandan!
          </h1>
          <p className="font-space text-3xl md:text-5xl font-bold bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1000,
                "Problem Solver",
                1000,
                "Open to Work",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            ></TypeAnimation>
          </p>
          <p className="text-lg font-light ">
            Passionate software developer and recent graduate, eager to turn academic knowledge into real-world impact. I enjoy building clean, responsive web applications and love solving problems through code. Ready to learn fast, contribute from day one, and grow with a great team.
          </p>
        </div>

        {/* ====== Information Div section ======= */}
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center lg:place-items-start gap-5 md:mt-2">
          {infoDiv.map((info, index) => {
            return (
              <div
                key={index}
                className="h-30 w-full flex flex-col justify-center items-center gap-2 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-2xl p-6  cursor-context-menu hover:border-[#00f7ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]">
                  
                <p className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent">
                  {info.data}
                </p>
                <p className="text-sm text-gray-400">{info.title}</p>
              </div>
            );
          })}
        </div>

        {/* ====== Button section ====== */}
        <div className="flex gap-5 justify-center md:justify-start md:mt-2">
          {HireAndDownloadCVButton.map((content, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.open(content.link, "_blank", "noopener,noreferrer");
                }}
                className="px-2 md:px-5 py-3 border border-gray-700 flex items-center justify-center gap-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#00f7ff] before:to-[#00999e] hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white"
              >
                {content.name} <content.icon />
              </button>
            );
          })}
        </div>

        {/* ====== Social media icon section ====== */}
        <div className="flex gap-5 lg:mt-2 md:mt-2">
          {socialMedia.map((socialMedia, index) => {
            return (
              <button
                key={index}
                className="p-3 border border-gray-700 flex items-center justify-center gap-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-110 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#00f7ff] before:to-[#00999e] hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white text-[20px]"
                onClick={() => {
                  window.open(
                    socialMedia.link,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                <socialMedia.icon />
              </button>
            );
          })}
        </div>
      </div>

      {/* ====== Image section ====== */}
      <div
        className="relative flex items-center justify-center lg:justify-end w-full">
        {/* CYAN GLOW */}
        <div className="absolute w-[320px] h-80 md:w-105 md:h-105 bg-cyan-400/20 blur-3xl rounded-full animate-pulse">

        </div>

        {/* ====== IMAGE CONTAINER ====== */}
        <div className="relative w-75 h-105 md:w-95 md:h-125 rounded-4xl bg-linear-to-b from-cyan-400/30 to-transparent p-0.75 shadow-[0_0_40px_rgba(0,217,255,0.2)] overflow-hidden animate-[float_4s_ease-in-out_infinite]">
          {/* INNER BOX */}
          <div className="w-full h-full bg-[#0B1120] rounded-4xl overflow-hidden">
            <img
              src={profileImg}
              alt="Chandan"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
