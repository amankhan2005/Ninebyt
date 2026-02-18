 export default function WhyChooseUs() {
  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">


      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full top-0 right-0"></div>



      <div className="relative max-w-7xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-500 font-semibold tracking-widest mb-4">
            WHY CHOOSE NINEBYT
          </p>


          <h2 className="text-4xl md:text-5xl font-bold">

            Built for businesses that expect more

          </h2>


          <p className="text-gray-400 mt-4 max-w-xl mx-auto">

            We focus on quality, performance, and long-term success.

          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">


          {[
            {
              title: "Modern, scalable technology",
              desc: "We use modern technologies to build fast, secure, and scalable products."
            },
            {
              title: "Focus on business growth",
              desc: "We create solutions designed to help your business grow faster."
            },
            {
              title: "Premium, clean design",
              desc: "Our designs build trust and improve user experience."
            },
            {
              title: "Reliable long-term support",
              desc: "We support your product even after launch."
            }
          ].map((item, i) => (

            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500 transition duration-500 hover:translate-y-[-6px]"
            >


              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-600/10 blur-xl rounded-2xl"></div>



              {/* Number */}

              <span className="text-blue-500 font-semibold text-sm">

                0{i + 1}

              </span>



              {/* Title */}

              <h3 className="text-xl font-semibold mt-3 mb-3">

                {item.title}

              </h3>



              {/* Description */}

              <p className="text-gray-400 leading-relaxed">

                {item.desc}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}
