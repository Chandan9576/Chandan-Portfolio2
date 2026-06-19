import React from "react";
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaPython,FaGitAlt,FaGithub,} from "react-icons/fa";
import {SiTailwindcss,SiDotnet,SiMongodb,SiNumpy,SiPandas,SiStreamlit,SiPostman,SiCplusplus,SiC} from "react-icons/si";
import {MdApi,MdSecurity,} from "react-icons/md";
import {TbBrandCSharp,TbFileTypeSql } from "react-icons/tb";
import {LuNetwork,} from "react-icons/lu";
import {PiTreeStructureBold,} from "react-icons/pi";
import {BsDatabaseFillGear,} from "react-icons/bs";
import { BsDatabaseFill } from "react-icons/bs";
import TiltCard from "../Components/TiltCard";

const Skills = () => {

  const skillData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "C#", icon: TbBrandCSharp },
        { name: "ASP.NET Core", icon: SiDotnet },
        { name: "RESTful APIs", icon: MdApi },
        { name: "ASP.NET Core Web API", icon: MdApi },
        { name: "Entity Framework Core", icon: BsDatabaseFillGear },
        { name: "Authentication & Authorization", icon: MdSecurity },
        // { name: "JWT Authentication", icon: MdSecurity },
        // { name: "Role Based Authorization", icon: MdSecurity },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "SQL Server", icon: BsDatabaseFill },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },

    {
      title: "Python & Data Science",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "NumPy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
        { name: "Matplotlib", icon: FaPython },
        { name: "Streamlit", icon: SiStreamlit },
      ],
    },

    {
      title: "Computer Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", icon: PiTreeStructureBold },
        { name: "OOP", icon: TbBrandCSharp },
        { name: "Computer Networks", icon: LuNetwork },
        { name: "Operating Systems", icon: BsDatabaseFillGear },
        { name: "Problem Solving", icon: PiTreeStructureBold },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: FaGithub },
        { name: "Visual Studio", icon: SiDotnet },
        { name: "Postman", icon: SiPostman },
      ],
    },

    {
      title: "Languages",
      skills: [
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "SQL", icon: TbFileTypeSql },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full min-h-screen grid place-items-center gap-10 px-5 lg:px-20 py-10">

      {/* ====== Skill Heading Section ====== */}
      <div className="grid place-items-center gap-3">
        <h1 className=" text-3xl md:text-5xl  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent font-extrabold ">
          Skills & Expertise
        </h1>
        <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
      </div>

      {/* ====== Skills Section ====== */}
      <div className="w-full flex flex-wrap lg:grid-cols-3 gap-7 lg:w-fit lg:gap-10 justify-center">
        {skillData.map((category, index) => {
          return (
            <TiltCard
              key={index}
              className="flex flex-col  items-start gap-4 h-80 w-full pt-7 px-5 lg:w-100 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 cursor-pointer">

              <div className="flex items-center justify-center w-full">
                <span className="text-[#00f7ff] text-xl font-bold">
                  {category.title}
                </span>
              </div>

              {category.skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                    <div key={index} className="flex items-center gap-4">
                      <Icon className="text-[#00f7ff] text-xl" />
                      <span>{skill.name}</span>
                      <div className="flex-1 h-1.75 w-30 bg-[#293a3b] rounded-full">
                        <div className="w-3/4 h-full bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e]  rounded-full"></div>
                      </div>
                      {/* <div className="h-1.75 w-20 bg-[#00f7ff] rounded-4xl"></div> */}
                    </div>
                  );
              })}
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}

export default Skills


