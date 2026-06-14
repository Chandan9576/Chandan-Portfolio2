import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {


  const contactForm = [
    {placeholder:"Enter Your Name",type:"text",icon:FaUser},
    {placeholder:"Enter Your Email",type:"email",icon:MdEmail},
    {placeholder:"Enter Your Phone",type:"number",icon:FaPhoneAlt},
  ]


  const contactInfo = [
    {
      icon:MdEmail ,
      placeholder:"Email",
      titleInfo:"chandan95765@gmail.com",
      link:"",
      showText:"Send Email"
    },
    {
      icon:FaPhoneAlt ,
      placeholder:"Phone",
      titleInfo:"+91 9576456165",
      link:"",
      showText:"Call Now"
    },
    {
      icon:FaLocationDot ,
      placeholder:"Location",
      titleInfo:"Ranchi, Jharkhand",
      link:"",
      showText:"View on Map"
    },
    {
      icon:FaLinkedinIn,
      placeholder:"Linkdein",
      titleInfo:"Chandan",
      link:"",
      showText:"Message"
    },
  ]

  const handleContactForm = () => {
      console.log("form submited")
  }

  return (
    <div className="w-full min-h-screen grid grid-cols-1 place-content-center gap-10 bg-[#141414]">

      {/* ====== Contact Heading Section ====== */}
      <div className="grid place-items-center gap-3">
        <h1 className=" text-3xl md:text-5xl  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent font-extrabold ">
          Get In Touch
        </h1>
        <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
      </div>

      {/* ====== Contact Form Heading Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-10'>

          {/* ----- Info Div ----- */}
          <div className='flex flex-col gap-6 justify-center items-center'>

            {
              contactInfo.map((items,index)=>{
                const Icon = items.icon
                return(
                  <div className='bg-[#1a2026] h-35 w-full lg:w-130 rounded-2xl flex items-center gap-10 px-5 border border-gray-700'>
                    <div className='bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] size-15 rounded-full grid place-items-center'>
                      <Icon className="text-[#000000] text-3xl font-bold p-0.75"></Icon>
                    </div>

                    <div className='flex flex-col gap-1'>
                      <p className='font-bold text-lg'>{items.placeholder}</p>
                      <p className='text-gray-400'>{items.titleInfo}</p>
                      <p className='text-[#00f7ff] cursor-pointer hover:underline'>{items.showText}</p>
                    </div>
                    
                  </div>
                )
              })
            }

          </div>

          {/* ----- contact form ----- */}
          <div className='grid place-items-center w-full'>

            <div className='bg-[#1a2026] rounded-2xl w-full lg:w-130 border border-gray-700 h-full'>
                <form action="handleContactForm" className='grid grid-cols-1 place-content-center gap-10 pt-10 px-7'>


                  {
                    contactForm.map((items,index)=>{

                      const Icon = items.icon

                      return(
                        <div className='relative w-full'>
                          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></Icon>
                          <input required type={items.type} placeholder={items.placeholder} className='border border-[#00f7ff] outline-none w-full p-3 pl-10 rounded-lg focus:bg-[#000000]'/>
                          
                        </div>
                      )
                    })
                  }

                  <div className='relative w-full'>
                    <FaMessage className="absolute left-4 top-1/3 -translate-y-1/2 text-gray-400"/>
                    <textarea placeholder='Enter Your Message' className='border border-[#00f7ff] outline-none w-full p-3 pl-10 rounded-lg  focus:bg-[#000000]'></textarea>
                  </div>

                  <div >
                    <button type='submit' className='bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] font-bold rounded-lg text-black w-full p-3 flex justify-center items-center gap-2 cursor-pointer'>Send Message <FaTelegramPlane className='text-xl'/></button>
                  </div> 

                </form>

            </div>
          </div>

      </div>
      
    </div>
  )
}

export default Contact
