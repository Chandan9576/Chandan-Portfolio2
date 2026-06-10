import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const HireAndDownloadCVButton = [
    {
      name: "Hire Me",
      icon: FaArrowRight,
      link: "",
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
      link: "https://www.linkedin.com/in/chandan-kumar-prajapati-64b870371/",
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
      link: "https://www.linkedin.com/in/chandan-kumar-prajapati-64b870371/",
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
    <div className="w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 px-5 lg:px-25">
      <div className=" flex flex-col justify-center gap-5">
        {/* Available for work section */}
        <div className="flex items-center gap-5">
          <div className="h-1 w-12 bg-[#00f7ff]"></div>
          <p
            className="text-[#00f7ff]
            uppercase
            tracking-[4px]
            text-sm
            font-semibold"
          >
            AVAILABE FOR WORK
          </p>
        </div>

        {/* Heading - chandan section */}
        <div className="space-y-1">
          <p className="font-space text-4xl font-bold leading-tight">
            Hi, I'm Chandan!
          </p>
          <p className="text-4xl lg:text-5xl font-bold text-[#00f7ff] font-space">
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

        {/* Information Div section */}
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center lg:place-items-start gap-5 md:mt-2">
          {infoDiv.map((info, index) => {
            return (
              <div
                key={index}
                className="h-25 w-full lg:w-45 bg-[#1a2026] rounded-lg  flex flex-col justify-center items-center gap-2 border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]"
              >
                <p className="text-2xl lg:text-3xl font-bold text-[#00f7ff]">
                  {info.data}
                </p>
                <p className="text-sm text-gray-400">{info.title}</p>
              </div>
            );
          })}
        </div>

        {/* Button section */}
        <div className="flex gap-5 justify-center md:justify-start md:mt-2">
          {HireAndDownloadCVButton.map((content, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.open(content.link, "_blank", "noopener,noreferrer");
                }}
                className="border border-gray-700 rounded-full lg:px-7 px-6 py-3 flex justify-center items-center gap-3 cursor-pointer hover:bg-[#00f7ff] hover:text-black duration-300 hover:shadow-xl hover:shadow-cyan-600/50"
              >
                {content.name} <content.icon />
              </button>
            );
          })}
        </div>

        {/* Social media icon section */}
        <div className="flex gap-5 lg:mt-2 md:mt-2">
          {socialMedia.map((socialMedia, index) => {
            return (
              <button
                key={index}
                className="border-gray-700 text-[20px] border p-3 rounded-xl bg-[#1a2026] text-gray-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/50 cursor-pointer"
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

      {/* Image section */}
      <div
        className="relative flex items-center justify-center lg:justify-end w-full">
        {/* CYAN GLOW */}
        <div
          className="
            absolute
            w-[320px]
            h-80

            md:w-105
            md:h-105

            bg-cyan-400/20

            blur-3xl

            rounded-full

            animate-pulse
          "
        ></div>

        {/* IMAGE CONTAINER */}
        <div className="relative w-75 h-105 md:w-95 md:h-125 rounded-4xl bg-linear-to-b from-cyan-400/30 to-transparent p-0.75 shadow-[0_0_40px_rgba(0,217,255,0.2)] overflow-hidden animate-[float_5s_ease-in-out_infinite]">
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
    </div>
  );
};

export default Home;
