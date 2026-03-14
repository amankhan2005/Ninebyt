import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">


      {/* Glow */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full -top-40 -right-40"></div>



      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">


        {/* Logo */}

        <div>


          <h2 className="text-2xl font-bold mb-4 tracking-tight">

            Nine<span className="text-blue-500">byt</span>

          </h2>


          <p className="text-gray-400 text-sm leading-relaxed mb-6">

            Ninebyt is a digital agency building modern websites,
            scalable software, and digital solutions for businesses worldwide.

          </p>


          <p className="text-gray-500 text-sm">

            Built for modern businesses.

          </p>


        </div>



        {/* Links */}

        <div>

          <h3 className="font-semibold mb-5 text-white">
            Company
          </h3>


          <ul className="space-y-3 text-gray-400 text-sm">


            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>


            <li>
              <a href="/services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>


            <li>
              <a href="/about-us" className="hover:text-blue-500 transition">
                About Us
              </a>
            </li>


            <li>
              <a href="/contact-us" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>


          </ul>

        </div>



        {/* Contact */}

        <div>

          <h3 className="font-semibold mb-5">
            Contact
          </h3>


          <ul className="space-y-3 text-gray-400 text-sm">


            <li>

              <span className="text-gray-500">Email</span>

              <br />

              <a href="mailto:ninebytteam@gmail.com"
                className="hover:text-blue-500 transition">

                ninebytteam@gmail.com

              </a>

            </li>

<li>
              <span className="text-gray-500">Address</span>
              <br />
              <span className="text-gray-400">Lucknow ,India</span>
            </li>


          </ul>

        </div>



        {/* Social */}

        <div>

          <h3 className="font-semibold mb-5">
            Follow Us
          </h3>


          <div className="flex gap-4">


            <a href="#"
              className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition">

              <FaTwitter />

            </a>


            <a href="#"
              className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition">

              <FaInstagram />

            </a>


            <a href="#"
              className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition">

              <FaLinkedin />

            </a>


            <a href="#"
              className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-blue-500 hover:bg-blue-600/10 transition">

              <FaGithub />

            </a>


          </div>


        </div>


      </div>



      {/* Bottom */}

      <div className="relative border-t border-white/10">


        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">


          <p>
            © 2026 Ninebyt. All rights reserved.
          </p>


          <p className="mt-2 md:mt-0">
            Designed & Developed by Ninebyt
          </p>


        </div>


      </div>


    </footer>

  );
}
