"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const SubLinks = [
  {
    id: 1,
    name: "INTERIOR DESIGNING",
    href: "/services/interior",
  },
  {
    id: 2,
    name: "VASTU CONSULTATION",
    href: "/services/vastu",
  },
  {
    id: 3,
    name: "INTERIOR STYLING & MATERIAL CONSULTATION",
    href: "/services/styling",
  },
  {
    id: 4,
    name: "SPATIAL PLANNING",
    href: "/services/spatial",
  },
  {
    id: 5,
    name: "WEDDING DESIGNING",
    href: "/services/wedding",
  },
  {
    id: 6,
    name: "PMC SERVICES",
    href: "/services/pmc",
  },
  {
    id: 7,
    name: "SMART HOMES",
    href: "/services/smart",
  },
  {
    id: 8,
    name: "FURNITURE SOURCING",
    href: "/services/furniture",
  },
];


  return (
    <div className="w-full ">
      {/* ---------------- TOP BAR ---------------- */}
      <div className="bg-white border-b text-black w-full py-2 px-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <Link
            href="tel:+919100883355"
            className="hover:text-blue-600 cursor-pointer transition ml-25"
          >
            📞 +91 9100883355
          </Link>

          <Link
            href="mailto:vasteriorstudio@gmail.com"
            className="hover:text-blue-600 cursor-pointer transition "
          >
            ✉️ vasteriorstudio@gmail.com
          </Link>
        </div>
      </div>

      {/* ---------------- NAV BAR ---------------- */}
      <nav className="bg-[#F4D8BD] w-full   px-6 py-4 shadow flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3  ml-21 ">
          <img src="/icon.webp" className="w-[140px] h-[79px]" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center   gap-7 font-medium ">
          <Link
            href="/"
            className="hover:text-red-700 cursor-pointer  text-black ml-8"
          >
            HOME{" "}
          </Link>
          <Link
            href="/about"
            className="hover:text-red-700 cursor-pointer text-black"
          >
            {" "}
            ABOUT US{" "}
          </Link>

          {/* SERVICES DROPDOWN */}
          {/* SERVICES DROPDOWN */}
          <li
  className="relative"
  onMouseEnter={() => setOpenServices(true)}
  onMouseLeave={() => setOpenServices(false)}
>
  <Link
    href='/services'
    className="flex items-center gap-1 cursor-pointer text-black"
  >
    SERVICES <ChevronDown size={18} />
  </Link>

  {openServices && (
    <ul className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50">
      {SubLinks.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href || "/"}
            className="block w-full px-4 py-2 rounded text-black font-medium hover:bg-[#f4caa4] transition"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>


          <Link
            href="/portfolio"
            className="hover:text-red-700 cursor-pointer text-black"
          >
            {" "}
            PORTFOLIO{" "}
          </Link>

          <Link
            href="/video"
            className="hover:text-red-700 cursor-pointer text-black"
          >
            {" "}
            VIDEOS
          </Link>
          <Link
            href="/team"
            className="hover:text-red-700 cursor-pointer text-black"
          >
            TEAM
          </Link>
          <Link
            href="/blog"
            className="hover:text-red-700 cursor-pointer text-black"
          >
            BLOGS
          </Link>
          <Link href='/testimonials' className="hover:text-red-700 cursor-pointer text-black">
            TESTIMONIALS
         </Link>
          <Link href='contact' className="hover:text-red-700 cursor-pointer text-black">
            CONTACT
          </Link>
        </ul>

        {/* CTA BUTTON */}
        <Link href='quote'
        className="hidden md:block bg-[#C9A883] px-5 py-2 rounded-lg text-sm font-semibold">
          GET A QUOTE
       
        </Link>

        {/* Mobile menu icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </nav>

      {/* ------------- MOBILE MENU ------------- */}
      {mobileMenu && (
        <div className="md:hidden bg-white w-full px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>HOME</li>
            <li>ABOUT US</li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => setOpenServices(!openServices)}
              >
                SERVICES <ChevronDown size={18} />
              </button>

              {openServices && (
                <ul className="pl-4 mt-2 flex flex-col gap-2">
                  <li>Architecture</li>

                  <button
                    className="flex justify-between w-full"
                    onClick={() => setOpenSub(!openSub)}
                  >
                    Interior Design <ChevronDown size={14} />
                  </button>

                  {openSub && (
                    <ul className="pl-4 flex flex-col gap-2">
                      <li>Residential</li>
                      <li>Commercial</li>
                      <li>Modular Kitchen</li>
                    </ul>
                  )}

                  <li>Renovation</li>
                </ul>
              )}
            </li>

            <li>PORTFOLIO</li>
            <li>VIDEOS</li>
            <li>TEAM</li>
            <li>BLOGS</li>
           <li>TESTIMONIALS</li> 
            <li>CONTACT</li>

            <button className="mt-4 bg-[#C9A883] px-5 py-2  rounded-lg">
              GET A QUOTE
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
