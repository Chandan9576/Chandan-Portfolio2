import React from "react";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { SiDotnet } from "react-icons/si";
import ShineCard from "../Components/ShineCard";

const Services = () => {
  const service = [
    {
      icon: FaReact,
      title: "Frontend Development",
      summary:
        "Building responsive, modern, and user-friendly web interfaces using React, JavaScript, and Tailwind CSS.",
      key: [
        "Responsive Design",
        "Perfomance Optimized",
        "Seo Friendly",
      ],
    },
    {
      icon: SiDotnet,
      title: "Full Stack Web Development",
      summary:
        "Developing complete web applications using React, ASP.NET Core, databases, and REST APIs.",
      key: [
        "End-to-End Apps",
        "Query Optimization",
        "Data Security",
        "Database Design",
      ],
    },
    {
      icon: MdApi,
      title: "Backend API Development",
      summary:
        "Creating secure and scalable REST APIs with ASP.NET Core, Entity Framework Core, and JWT Authentication.",
      key: [
        "RESTful APIs",
        "Clean Architecture",
        "Error Handling",
        "Secure Endpoints",
      ],
    },
    {
      icon: FaDatabase,
      title: "Database Design & Management",
      summary:
        "Designing and managing SQL Server and MongoDB databases for efficient data storage and retrieval.",
      key: [
        "Data Modeling",
        "Query Optimization",
        "Data Security",
        "Database Design",
      ],
    },
    {
      icon: MdSecurity,
      title: "Authentication & Security",
      summary:
        "Implementing JWT Authentication, Role-Based Authorization, and secure user access control.",
      key: [
        "JWT Auth",
        "Role Based Authorization",
        "Protected Routes",
        "Secure Access",
      ],
    },
    {
      icon: FaPython,
      title: "Python Automation & Data Analytics",
      summary:
        "Building data-driven applications and dashboards using Python, Pandas, NumPy, Matplotlib, and Streamlit.",
      key: [
        "Data Analysis",
        "Data Visualization",
        "Dashboard Development",
        "Automation",
      ],
    },
  ];

  return (
    <section id="services" className="w-full min-h-screen grid grid-cols-1 place-items-center gap-10  px-5 lg:px-20 py-10 ">
      {/* ====== Services Heading Section ====== */}
      <div className="grid place-items-center gap-3">
        <h1 className=" text-3xl md:text-5xl  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent font-extrabold ">
          What I Do
        </h1>
        <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
      </div>

      {/* ====== Services Section ======= */}
      <div className="w-full flex flex-wrap lg:grid-cols-3 gap-7 lg:w-fit lg:gap-10 justify-center">
        {service.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-4 h-100 w-full lg:w-90 bg-black/30 backdrop-blur-xl rounded-xl border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)] px-5">
              <div className="flex flex-col items-center justify-center gap-5 ">
                <div
                  className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] size-18 rounded-full grid place-items-center"
                >
                  <Icon className="text-[#000000] text-3xl font-bold "></Icon>
                </div>
                <span className="font-bold text-xl">{category.title}</span>
                <span className="text-gray-400 text-center">
                  {category.summary}
                </span>

                <div className="flex gap-2 flex-wrap justify-center">
                  {category.key.map((items, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-cyan-400/10 border border-[#02c3c9] text-[#02c3c9] text-sm px-4 py-1.5 rounded-full cursor-default"
                      >
                        {items}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
