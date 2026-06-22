import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import profileImg from "../assets/chandanPortfolio.jpeg";

const About = () => {

  const aboutinfo = [
    {titile:"Education",info:"Bachelor of Science - Information Technology",icon:MdCastForEducation},
    {titile:"Experience",info:"Fresher",icon:FaBriefcase},
    {titile:"Location",info:"Ranchi, Jharkhand",icon:FaLocationDot}
  ]

  return (
    <section id="about" className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10  px-5 lg:px-20 py-10 place-items-start md:place-items-center">

      {/* ===== Image Section ====== */}
      <div className="md:flex place-items-center hidden">

        <div className="relative flex items-center justify-center w-full">

          {/* CYAN GLOW */}
          <div className="absolute w-[320px] h-80 md:w-105 md:h-105 bg-cyan-400/50 blur-3xl rounded-full animate-pulse"></div>

          {/* ====== IMAGE CONTAINER ====== */}
          <div className="relative w-75 h-105 md:w-95 md:h-125 rounded-4xl bg-linear-to-b from-cyan-400/30 to-transparent p-0.75 shadow-[0_0_40px_rgba(0,217,255,0.2)] overflow-hidden">
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
      </div>

      {/* ===== About Me ===== */}

      <div className="flex flex-col gap-10 justify-center items-center ">
        {/* ------ heading ------ */}
        <div className="grid place-items-center gap-3">
          <h1 className=" text-3xl md:text-5xl font-extrabold  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent">About Me</h1>
          <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
        </div>

        {/* ------ About me information ------ */}
        <div className="grid gap-5">
          <div>
            <p className="text-gray-400">
              I'm a fresher software developer with a strong foundation in full-stack web development. I have a keen eye for clean UI and efficient back-end logic. I believe in learning by doing — most of what I know comes from building real projects, breaking things, and fixing them. I'm currently looking for my first professional opportunity where I can contribute, grow, and make an impact.
            </p>
          </div>


          {
            aboutinfo.map((items,index)=>{
              const Icon = items.icon
              return(
                <div key={index} className="h-25 w-full bg-black/30 backdrop-blur-xl rounded-lg  flex flex-col justify-center border border-white/25 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]">
                  <div className="flex items-center justify-start gap-5 ml-5">
                    <div>
                      <Icon className="text-2xl text-[#00f7ff]" />
                    </div>
                    <div className="">
                      <p className="font-bold text-lg">{items.titile}</p>
                      <p className=" text-gray-400">{items.info}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
          <div>
            <button onClick={()=>{window.open("https://drive.google.com/file/d/15ZXzSQIlj0WyyL0Rfu06U3sGjeu9Pl5D/view?usp=drive_link","_blank", "noopener,noreferrer")}} className="px-5 py-3 border border-white/25 flex items-center justify-center gap-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#00f7ff] before:to-[#00999e] hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white bg-black/30">Download CV <FaDownload /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
