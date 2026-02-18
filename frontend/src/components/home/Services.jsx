 export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-20 px-6 overflow-hidden">


      {/* Background glow */}

      <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full top-0 left-0"></div>



      <div className="relative max-w-7xl mx-auto">


        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-blue-500 font-semibold tracking-widest mb-4">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            Services we provide

          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">

            Helping businesses grow with modern digital solutions.

          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">


          {[
            {
              title: "Web Design",
              desc: "Modern, responsive, and high-converting websites designed to grow your business."
            },

            {
              title: "Digital Marketing",
              desc: "Targeted marketing strategies to increase traffic, leads, and brand visibility."
            },

            {
              title: "Social Media Management",
              desc: "Professional content and management to grow your audience and engagement."
            }

          ].map((service, i) => (


            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500 transition duration-500 hover:translate-y-[-10px]"
            >


              {/* Glow */}

              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>



              {/* Number */}

              <span className="text-blue-500 text-lg font-semibold">

                0{i + 1}

              </span>



              {/* Title */}

              <h3 className="text-2xl font-semibold mt-4 mb-3">

                {service.title}

              </h3>



              {/* Description */}

              <p className="text-gray-400">

                {service.desc}

              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}
