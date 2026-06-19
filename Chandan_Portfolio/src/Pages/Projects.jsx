import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {

  const projetcsData = [
    {
      name:"CRUD Based Application",
      summary:"Developed a scalable full-stack web application with React and ASP.NET Core, enabling efficient data management through complete CRUD functionality and RESTful APIs.",
      technology:["ReactJs","ASP.NET Core","SQl Server"],
      image:"https://cdn.dribbble.com/userupload/6601662/file/original-011c3602759da2b346239aff18f117b1.png?resize=1504x1128&vertical=center",
      githublink:"https://github.com/Chandan9576/CRUD-Operation-Using-React-ASP.NET-Core",
      liveurl:"https://crud-operation-api-ech0dcazfyf8gzdw.centralindia-01.azurewebsites.net/"
    },
    {
      name:"Smart Study Tracker",
      summary:"Created a data-driven study management platform using Python, Streamlit, and MongoDB to help users track progress, organize study sessions, and improve productivity.",
      technology:["Pyhton","Streamlit","MonogoDB"],
      image:"https://i.pinimg.com/736x/84/ca/50/84ca50bdbe1bc8c5bc70e2fa5433ca5e.jpg",
      githublink:"https://github.com/Chandan9576/OJT2-Python-Project",
      liveurl:"https://smart-study-tracker-ojt2.streamlit.app/"
    },
    {
      name:"Portfolio Website",
      summary:"Built a modern and responsive developer portfolio featuring project showcases, technical skills, and service highlights with a focus on performance and user experience.",
      technology:["ReactJs"],
      image:"https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg",
      githublink:"https://github.com/Chandan9576/Chandan-Portfolio2",
      liveurl:""
    },
    // {
    //   name:"Portfolio Website",
    //   summary:"Built a modern and responsive developer portfolio featuring project showcases, technical skills, and service highlights with a focus on performance and user experience.",
    //   technology:["ReactJs"],
    //   image:"https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg",
    //   githublink:"https://github.com/Chandan9576/Chandan-Portfolio2",
    //   liveurl:""
    // },
    // {
    //   name:"Portfolio Website",
    //   summary:"Built a modern and responsive developer portfolio featuring project showcases, technical skills, and service highlights with a focus on performance and user experience.",
    //   technology:["ReactJs"],
    //   image:"https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg",
    //   githublink:"https://github.com/Chandan9576/Chandan-Portfolio2",
    //   liveurl:""
    // },
    // {
    //   name:"Portfolio Website",
    //   summary:"Built a modern and responsive developer portfolio featuring project showcases, technical skills, and service highlights with a focus on performance and user experience.",
    //   technology:["ReactJs"],
    //   image:"https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg",
    //   githublink:"https://github.com/Chandan9576/Chandan-Portfolio2",
    //   liveurl:""
    // }
  ]


  return (
    <section id='projects' className="w-full min-h-screen grid grid-cols-1 place-items-center gap-10 px-5 lg:px-20 py-10">

      {/* ====== Projects Heading Section ====== */}
      <div className="grid place-items-center gap-3">
        <h1 className=" text-3xl md:text-5xl  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent font-extrabold ">
          Projects
        </h1>
        <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
      </div>

      {/* ====== Projects Section ======= */}
      <div className="w-full flex flex-wrap lg:grid-cols-3 gap-7 lg:w-fit lg:gap-10 justify-center">
        {projetcsData.map((category, index) => {
          const Image = category.image
          return (
            <div key={index} className="flex flex-col items-start justify-center gap-4 h-120 w-full lg:w-95 bg-black/30 backdrop-blur-xl rounded-xl border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)] overflow-hidden">

              <div className="group relative w-full h-full overflow-hidden">

                {/* ------ image ------ */}

                <img
                  src={Image}
                  alt="Chandan"
                  className="w-full h-full object-cover group-hover:scale-120 transition-all duration-300 object-center"
                />
                <div className="absolute inset-0 bg-[#00f7ff]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 h-full w-full flex justify-center items-center gap-4">
                <button onClick={()=>{window.open(category.liveurl, "_blank","noopener,noreferrer",)}}>
                  <HiExternalLink className='bg-black rounded-full text-[45px] p-3  text-gray-400 cursor-pointer' />
                </button>
                <button onClick={()=>{window.open(category.githublink,"_blank", "noopener,noreferrer",)}}>
                  <IoLogoGithub className='bg-black rounded-full text-[45px] p-3  text-gray-400 cursor-pointer' />
                </button>
                
                </div>

              </div>

              {/* ------ summray div ------ */}
              <div className=' h-full w-full flex flex-col items-center gap-3 px-5'>
                <span className='text-xl font-bold'>{category.name}</span>
                <span className='text-gray-400'>{category.summary}</span>
                <div className="flex gap-2 flex-wrap justify-center  text-center">
                  {category.technology.map((items, index) => {
                    return (
                      <span key={index}
                        className="bg-cyan-400/10 border border-[#02c3c9] text-[#02c3c9] text-sm px-4 py-1.5 rounded-full cursor-default">
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
  )
}

export default Projects
