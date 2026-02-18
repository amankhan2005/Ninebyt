 export default function About() {
  return (
    <section className="relative py-20 bg-black text-white px-6 overflow-hidden">


      {/* Glow Background */}

      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full -top-40 -left-40"></div>



      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">


        {/* LEFT SIDE */}

        <div>


          {/* Label */}

          <p className="text-blue-500 font-semibold tracking-widest mb-4">

            ABOUT NINEBYT

          </p>



          {/* Heading */}

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

            We build digital solutions

            <span className="text-blue-500 block">

              that help businesses grow

            </span>

          </h2>



          {/* Description */}

          <p className="text-gray-400 text-lg mb-6 leading-relaxed">

            <span className="text-white font-semibold">Ninebyt</span> is a modern digital agency helping businesses
            establish a strong online presence through high-quality design,
            technology, and strategy.

          </p>



          <p className="text-gray-400 text-lg leading-relaxed">

            We focus on building scalable, high-performance digital products
            designed for long-term success.

          </p>



          {/* Stats */}

          <div className="flex gap-12 mt-12">


            {[
              { number: "20+", label: "Projects Delivered" },
              { number: "10+", label: "Clients" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, i) => (


              <div key={i} className="group cursor-pointer">


                <h3 className="text-4xl font-bold text-blue-500 transition group-hover:scale-110">

                  {stat.number}

                </h3>


                <p className="text-gray-500 text-sm">

                  {stat.label}

                </p>


              </div>


            ))}


          </div>


        </div>



        {/* RIGHT CARD */}


        <div className="relative group">


          {/* Glow Border */}


          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>



          {/* Card */}


          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl transition duration-500 group-hover:translate-y-[-5px]">


            <h3 className="text-2xl font-semibold mb-6">

              What we do at

              <span className="text-blue-500"> Ninebyt</span>

            </h3>



            <ul className="space-y-5 text-gray-400">


              {[
                "Professional web design for modern businesses",
                "Digital marketing strategies that drive growth",
                "Social media management and brand building",
                "High-performance and scalable solutions",
                "Reliable long-term technical support"
              ].map((item, i) => (


                <li
                  key={i}
                  className="transition group-hover:translate-x-2 duration-300"
                >

                  {item}

                </li>


              ))}


            </ul>


          </div>


        </div>



      </div>


    </section>
  );
}
