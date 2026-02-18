export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">

      {/* Glass background */}

      <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/10"></div>



      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}

        <a
          href="/"
          className="text-2xl font-semibold tracking-tight text-white"
        >
          Nine<span className="text-blue-600">byt</span>
        </a>



        {/* Menu */}

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



        {/* Contact Button */}

       <a
  href="/contact-us"
  className="group inline-flex items-center gap-2 border border-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:text-white"
>
  Contact Us Now

  {/* Arrow */}
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
    →
  </span>

</a>



      </div>

    </nav>
  );
}
