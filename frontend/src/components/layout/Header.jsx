 import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 w-full z-50">


      {/* Glass background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/10"></div>



      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-semibold tracking-tight text-white z-50"
        >
          Nine<span className="text-blue-600">byt</span>
        </a>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white/80 text-sm font-medium">

          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="/about-us" className="hover:text-blue-600 transition">
            About Us
          </a>

          <a href="/services" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="/contact-us" className="hover:text-blue-600 transition">
            Contact Us
          </a>

        </div>



        {/* Desktop Button */}
        <a
          href="/contact-us"
          className="hidden md:inline-flex group items-center gap-2 border border-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700"
        >
          Contact Us
          <span className="transition-transform group-hover:translate-x-2">
            →
          </span>
        </a>



        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
        >

          {open ? (

            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" stroke="currentColor">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />

            </svg>

          ) : (

            // Hamburger
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" stroke="currentColor">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />

            </svg>

          )}

        </button>


      </div>



      {/* Mobile Menu */}
      <div className={`

        md:hidden
        absolute w-full bg-black/95 backdrop-blur-lg
        transition-all duration-300 overflow-hidden

        ${open ? "max-h-96 border-b border-white/10" : "max-h-0"}

      `}>

        <div className="flex flex-col px-6 py-6 gap-6 text-white">


          <a href="/" onClick={()=>setOpen(false)} className="hover:text-blue-600">
            Home
          </a>

          <a href="/about-us" onClick={()=>setOpen(false)} className="hover:text-blue-600">
            About Us
          </a>

          <a href="/services" onClick={()=>setOpen(false)} className="hover:text-blue-600">
            Services
          </a>

          <a href="/contact-us" onClick={()=>setOpen(false)} className="hover:text-blue-600">
            Contact Us
          </a>



          {/* Mobile Button */}
          <a
            href="/contact-us"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-center"
          >
            Contact Us →
          </a>


        </div>

      </div>


    </nav>

  );

}
