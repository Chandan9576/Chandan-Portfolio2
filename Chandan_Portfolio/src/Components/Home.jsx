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
      data: "0+",
    },
    {
      title: "Happy Clients",
      data: "0+",
    },
  ];

  return (
    <div className="w-full min-h-screen grid md:grid-cols-2 grid-cols-1 px-5 md:px-25">
      <div className=" flex flex-col justify-center gap-8 mt-5">
        <div>
          <p className=" text-5xl font-bold ">Hii, I'm Chandan!</p>
          <p className="text-5xl font-extrabold text-[#00f7ff]">
            Software Developer
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            provident laboriosam ex tempora, nisi quasi impedit minima ea
            blanditiis nemo esse laborum officiis debitis velit eos? Quis
            accusamus illo velit harum autem iste possimus? Rerum, cupiditate,
            nulla, voluptates aliquid minima rem repudiandae at expedita
            architecto consequuntur voluptate nobis. Quas, esse, dolor tempora
            nesciunt itaque asperiores ullam provident excepturi saepe dolores
            corporis ut. Aperiam perferendis nesciunt maxime, temporibus
            voluptatem similique voluptatibus laborum dignissimos nemo sint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center md:place-items-start gap-5">
          {infoDiv.map((info, index) => {
            return (
              <div key={index} className="h-25 w-full md:w-45 bg-[#1a2026] rounded-lg  flex flex-col justify-center items-center gap-3 border border-gray-700">
                <p className="text-4xl font-extrabold text-[#00f7ff]">
                  {info.data}
                </p>
                <p className="text-sm text-gray-400">{info.title}</p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 justify-center md:justify-start">
          {HireAndDownloadCVButton.map((content, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.open(content.link, "_blank", "noopener,noreferrer");
                }}
                className="border border-gray-700 rounded-full md:px-7 md:py-3 p-4 flex justify-center items-center gap-3 cursor-pointer hover:bg-[#00f7ff] hover:text-black duration-200 hover:shadow-xl hover:shadow-cyan-600/50"
              >
                {content.name} <content.icon />
              </button>
            );
          })}
        </div>

        <div className="flex gap-5 md:mt-2">
          {socialMedia.map((socialMedia, index) => {
            return (
              <button
                key={index}
                className="border-gray-700 text-[20px] border p-4 rounded-xl bg-[#1a2026] text-gray-400 hover:bg-green-500 duration-200 hover:text-black hover:shadow-xl hover:shadow-green-500/50 cursor-pointer"
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

      <div className="flex items-center justify-end mt-5">
        <img
          src="./src/assets/chandan.jpeg"
          alt=""
          className="md:h-140 h-100 border border-gray-700 rounded-2xl hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
