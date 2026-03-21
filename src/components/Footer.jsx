"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const faqs = [
    { q: "What services do you offer?" },
    { q: "How can I book a consultation?" },
    { q: "Do you provide customized interior designs?" },
    { q: "How long does a project usually take?" },
    { q: "Do you provide online consultations?" },
    { q: "What is your pricing structure?" },
  ];

  const [open, setOpen] = useState(null);

  return (
    <footer className="bg-[#f7d5b3] py-16 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* ============ CONTACT SECTION ============ */}
        <div>
          <img src="/vasterior.webp" alt="Vasterior Logo" className="w-36 mb-6" />

          <p className="text-lg text-black leading-7 mb-4">
            Office no. - A4, First Floor , Khosla Complex,<br />
            Gagan Vihar Extension, Delhi, 110092
          </p>

          <div className="flex items-center gap-3 mb-2">
            <MdEmail className="text-xl text-black" />
            <a href="mailto:vasteriorstudio@gmail.com" className="no-underline text-black">
              vasteriorstudio@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <MdPhone className="text-xl text-black" />
            <a href="tel:+919100883355" className="no-underline text-black">
              +91 9100883355
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-black text-2xl hover:text-[#1877F2] transition"
            >
              <FaFacebookF/>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="text-black text-2xl hover:text-[#E4405F] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919100883355"
              target="_blank"
              className="text-black text-2xl hover:text-[#25D366] transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-black text-2xl hover:text-[#0077B5] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ============ QUICK LINKS ============ */}
        <div>
          <h2 className="text-3xl font-bold  text-black mb-6">Quick Links</h2>

        <div className="flex flex-col gap-4 text-lg">
  <a href="" className="text-black no-underline">Home</a>
  <a href="" className="text-black no-underline">Why Choose</a>
  <a href="" className="text-black no-underline">About Us</a>
  <a href="" className="text-black no-underline">Services</a>
  <a href="" className="text-black no-underline">Portfolio</a>
  <a href="" className="text-black no-underline">Team</a>
  <a href="" className="text-black no-underline">Contact</a>
  <a href="" className="text-black no-underline">Careers</a>
  <a href="" className="text-black no-underline">Testimonials</a>
  <a href="" className="text-black no-underline">FAQ</a>
</div>


        </div>

        {/* ============ FAQ SECTION ============ */}
        <div>
          <h2 className="text-3xl text-black font-bold mb-6">FAQs</h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-black pb-3 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg text-black">{item.q}</p>
                  <span className="text-xl text-black">{open === i ? "-" : "+"}</span>
                </div>

                {open === i && (
                  <p className="text-gray-700 mt-2">
                    This is a sample answer. You can edit this content.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ============ LOCATION SECTION ============ */}
        <div>
          <h2 className="text-3xl text-black font-bold mb-6">Our Location</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3860879650204!2d77.2907912756965!3d28.640594875643796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda45fbe8f19%3A0xf0f5c6fd1ab70fb!2sGagan%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="260"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>

          <button className="mt-6 bg-[#f7c9a9] hover:bg-[#f4b896] mx-auto block  px-6 py-3 w-40 text-black rounded-xl shadow hover:shadow-md transition font-semibold">
            Join Our Team
          </button> 
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="my-10 border-black" />

      {/* Bottom Footer */}
      <div className="flex flex-col  text-black md:flex-row justify-between text-lg">
        <p>© 2025 Vasterior. All rights reserved.</p>

        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="/privacy-policy" className="no-underline">Privacy Policy</a>
          <a href="/terms" className="no-underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
