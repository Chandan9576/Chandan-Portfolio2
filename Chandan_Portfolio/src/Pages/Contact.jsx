import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  const contactFormInput = [
    {
      name: "name",
      placeholder: "Enter Your Name",
      type: "text",
      icon: FaUser,
    },
    {
      name: "email",
      placeholder: "Enter Your Email",
      type: "email",
      icon: MdEmail,
    },
    {
      name: "phone",
      placeholder: "Enter Your Phone",
      type: "number",
      icon: FaPhoneAlt,
    },
  ];

  const contactInfoDiv = [
    {
      icon: MdEmail,
      title: "Email",
      titleInfo: "chandan95765@gmail.com",
      link: "mailto:chandan95765@gmail.com",
      hyperLink: "Send Email",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      titleInfo: "+91 9576456165",
      link: "tel:9576456165",
      hyperLink: "Call Now",
    },
    {
      icon: FaLocationDot,
      title: "Location",
      titleInfo: "Ranchi, Jharkhand",
      link: "",
      hyperLink: "View on Map",
    },
    {
      icon: FaLinkedinIn,
      title: "Linkdein",
      titleInfo: "Chandan",
      link: "https://www.linkedin.com/in/chandan-kumar-prajapati-64b870371/",
      hyperLink: "Message",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const object = {
        access_key: "30f0e5f5-1c72-478f-952f-7c2912b94d82",
        ...formData,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to sent message!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    } finally {
      setloading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen grid grid-cols-1 place-content-center gap-10  px-5 lg:px-20 py-10 ">
      {/* ====== Contact Heading Section ====== */}
      <div className="grid place-items-center gap-3">
        <h1 className=" text-3xl md:text-5xl  bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] bg-clip-text text-transparent font-extrabold">
          Get In Touch
        </h1>
        <div className="h-1 w-25 bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] rounded-full"></div>
      </div>

      {/* ====== Contact Form Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10">

        {/* ----- Info Div ----- */}
        <div className="flex flex-col gap-6 justify-center items-center lg:px-20">
          {contactInfoDiv.map((items, index) => {
            const Icon = items.icon;
            return (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-xl h-35 w-full rounded-2xl flex items-center gap-10 px-5 border border-gray-700 hover:border-[#00f7ff]  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)]"
              >
                <div className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] size-15 rounded-full grid place-items-center">
                  <Icon className="text-[#000000] text-3xl font-bold p-0.75"></Icon>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">{items.title}</p>
                  <p className="text-gray-400 wrap-anywhere">{items.titleInfo}</p>
                  <p
                    className="text-[#00f7ff] cursor-pointer hover:underline"
                    onClick={() => {
                      window.open(items.link, "_blank", "noopener,noreferrer");
                    }}
                  >
                    {items.hyperLink}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ----- contact form ----- */}
        <div className="grid place-items-center w-full lg:px-20">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl w-full border border-gray-700 h-full pb-5">
            <form
              onSubmit={handleOnSubmit}
              className="grid grid-cols-1 place-content-center gap-10 pt-10 px-7"
            >
              {contactFormInput.map((items, index) => {
                const Icon = items.icon;

                return (
                  <div key={index} className="relative w-full">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></Icon>
                    <input
                      required
                      type={items.type}
                      name={items.name}
                      value={formData[items.name]}
                      onChange={handleOnChange}
                      placeholder={items.placeholder}
                      className="border border-[#00f7ff] outline-none w-full p-3 pl-10 rounded-lg focus:bg-cyan-400/10"
                    />
                  </div>
                );
              })}

              <div className="relative w-full">
                <FaMessage className="absolute left-4 top-4.5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleOnChange}
                  placeholder="Enter Your Message"
                  className="border border-[#00f7ff] outline-none w-full p-3 pl-10 rounded-lg  focus:bg-[#000000]"
                ></textarea>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="bg-linear-to-r from-[#00f7ff] via-[#00c1c7] to-[#00999e] font-bold rounded-lg text-black w-full p-3 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed "
                >
                  {loading ? "Sending..." : "Send Message"}{" "}
                  <FaTelegramPlane className="text-xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
