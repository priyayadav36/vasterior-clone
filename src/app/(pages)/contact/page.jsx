"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(
  () => import("react-google-recaptcha"),
  { ssr: false }
);
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleRecaptcha = (value) => {
    setCaptchaValue(value);
  };

  return (

    <section className="w-full bg-[#F7E9DB] py-20 flex flex-col items-center text-center px-4">
      <h2 className="text-5xl font-semibold text-[#1D2735] mb-6">
        Get In Touch
      </h2>
      <p className="text-lg text-[#1D2735] max-w-3xl leading-relaxed">
        Have a project in mind? We'd love to hear from you! Reach out today and 
        let's start creating a space that truly reflects your style and vision.
      </p>
    <section className="w-full bg-[#F7E9DB] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT FORM SECTION */}
        <div className="bg-[#F8E3CB] shadow-md rounded-2xl p-10">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            Send us a Message
          </h2>

          {/* FORM */}
          <form className="space-y-6 text-black">

            {/* NAME + CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full p-3 border rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* EMAIL + PROJECT TYPE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Project Type</label>
                <select className="w-full p-3 border rounded-lg focus:outline-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Ratail</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
            </div>

            {/* RECAPTCHA (v2 Checkbox) */}
            <div className="mt-4">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleRecaptcha}
              />
              {/* NOTE: This component automatically loads reCAPTCHA v2 checkbox */}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={!captchaValue}
              className="w-full bg-orange-200 text-black py-3 mt-5 rounded-lg font-medium hover:bg-red-200 transition"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-black mt-2">
              We'll get back to you within 24 hours.
            </p>
          </form>
        </div>

        {/* RIGHT CONTACT INFO SECTION */}
        <div className="bg-[#F8E3CB] shadow-md rounded-2xl p-10 text-black">
  <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

  {/* OFFICE */}
  <div className="flex items-start gap-4 mb-8">
    <div className="w-12 h-12 rounded-full bg-[#F4DCC3] flex items-center justify-center">
      <HiLocationMarker className="text-2xl text-black" />
    </div>

    <div>
      <p className="font-semibold text-left text-lg">Our Office</p>
      <p className="mt-1 text-left leading-6">
        Office no. - A4,<br />
        First Floor, Khosla Complex,<br />
        Gagan Vihar Extension,<br />
        Delhi, 110092
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4 mb-8">
    <div className="w-12 h-12 rounded-full bg-[#F4DCC3] flex items-center justify-center">
      <FaPhoneAlt className="text-xl text-black" />
    </div>

    <div>
      <p className="font-semibold text-left text-lg">Phone</p>
      <p className="mt-1 text-left">+91 9100883355</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start gap-4 mb-6">
    <div className="w-12 h-12 rounded-full bg-[#F4DCC3] flex items-center justify-center">
      <MdEmail className="text-2xl text-black" />
    </div>

    <div>
      <p className="font-semibold text-left text-lg">Email</p>
      <p className="mt-1 text-left">vasteriorstudio@gmail.com</p>
    </div>
  </div>

          <div>
            <p className="font-semibold text-left text-lg mb-2">Find Us on Map</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3860879650204!2d77.2907912756965!3d28.640594875643796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda45fbe8f19%3A0xf0f5c6fd1ab70fb!2sGagan%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="260"
              className="rounded-lg border"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
    </section>
  );
}
