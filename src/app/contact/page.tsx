import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import Image from "next/image";
import Footer from "@/components/footer";
import Navbcon from "@/components/navbcon";

export default function Page() {
  return (
    <>
      <Navbcon />

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-5 max-w-screen-lg mx-auto" style={{ height: "auto" }}>
        <div className="flex-1 flex flex-col gap-5 items-center text-center lg:mr-5">
          <div className="w-[90%] md:w-[378px] font-bold text-2xl md:text-4xl lg:text-5xl text-[#252B42] leading-normal">
            Get in touch <br /> today!
          </div>
          <div className="text-base md:text-lg text-[#737373] leading-normal">
            We know how large objects will act, <br /> but things on a small scale.
          </div>
          <div className="flex flex-col items-center text-base md:text-lg gap-4">
            <p>
              <strong>Phone:</strong> +451 215 215
            </p>
            <p>
              <strong>Fax:</strong> +451 215 215
            </p>
          </div>
          <div className="flex gap-3 text-xl mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2]">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2]">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F]">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-sm lg:max-w-md mx-auto">
          <Image className="w-full h-auto object-cover" src="/f1.jpg" alt="Card 1" height={500}  width={400}/>
        </div>
      </div>

      {/* Visit Our Office Section */}
      <div className="text-center my-10 p-5">
        <h6 className="text-xs md:text-sm font-bold text-[#252B42] mb-4">VISIT OUR OFFICE</h6>
        <h2 className="text-lg md:text-2xl font-bold text-[#252B42]">
          We help small businesses <br /> with big ideas
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-5 my-10">
        <div className="w-full sm:w-[300px] p-5 text-center text-sm font-bold text-[#252B42] bg-white">
          <div className="text-blue-400 text-3xl mx-auto mb-4">
            <FaPhoneAlt />
          </div>
          <h3>georgia.young@example.com</h3>
          <p>Get Support</p>
          <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-md">Submit Request</button>
        </div>
        <div className="w-full sm:w-[300px] p-5 text-center bg-[#252B42] text-white">
          <div className="text-blue-400 text-3xl mx-auto mb-4">
            <FaMapMarkerAlt />
          </div>
          <h3>georgia.young@example.com</h3>
          <p>Get Support</p>
          <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-md">Submit Request</button>
        </div>
        <div className="w-full sm:w-[300px] p-5 text-center text-sm font-bold text-[#252B42] bg-white">
          <div className="text-blue-400 text-3xl mx-auto mb-4">
            <FaEnvelope />
          </div>
          <h3>georgia.young@example.com</h3>
          <p>Get Support</p>
          <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-md">Submit Request</button>
        </div>
      </div>

      {/* Let’s Talk Section */}
      <div className="text-center my-10">
        <Image className="w-10 h-10 mx-auto" src="/f3.png" alt="Arrow 2" height={300}  width={300}/> 
        <h5 className="text-sm font-bold text-[#252B42] mt-4">WE CANT WAIT TO MEET YOU</h5>
        <p className="text-2xl md:text-4xl font-bold text-[#252B42] mt-2">Let’s Talk</p>
        <button className="mt-4 px-6 py-3 bg-blue-400 text-white rounded-md">Try it Free Now</button>
      </div>

      <Footer />
    </>
  );
}