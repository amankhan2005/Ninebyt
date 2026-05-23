 export default function AboutPage() {
  return (
    <main className="bg-black text-white">


      {/* Hero Section */}

      <section className="relative py-36 px-6 text-center border-b border-white/10 overflow-hidden">


        {/* glow */}

        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>


        <div className="relative max-w-4xl mx-auto">


          <p className="text-blue-500 mb-4 font-semibold tracking-widest">
            ABOUT NINEBYT
          </p>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

            We build digital products that help

            <span className="text-blue-500"> businesses grow faster</span>

          </h1>


          <p className="text-gray-400 mt-6 text-lg">

            Ninebyt is a modern web development agency helping startups,
            founders, and companies build scalable websites and applications.

          </p>


        </div>


      </section>



      {/* Story & Mission */}

      <section className="py-28 px-6">


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">


          {/* Story */}

          <div>

            <p className="text-blue-500 font-semibold mb-4">
              OUR STORY
            </p>


            <h2 className="text-3xl font-bold mb-6">

              Built with passion for technology

            </h2>


            <p className="text-gray-400 mb-4 leading-relaxed">

              Ninebyt was founded to help businesses succeed in the modern
              digital world. We saw that many companies struggle with slow,
              outdated, and poorly designed websites.

            </p>


            <p className="text-gray-400 leading-relaxed">

              Our goal is to create fast, scalable, and modern digital
              products that deliver real business results.

            </p>


          </div>



          {/* Mission */}

          <div>

            <p className="text-blue-500 font-semibold mb-4">
              OUR MISSION
            </p>


            <h2 className="text-3xl font-bold mb-6">

              Helping businesses scale digitally

            </h2>


            <p className="text-gray-400 mb-4 leading-relaxed">

              We focus on building high-performance websites and web
              applications using modern technologies.

            </p>


            <p className="text-gray-400 leading-relaxed">

              Every project we build is designed for performance,
              scalability, and long-term success.

            </p>


          </div>


        </div>


      </section>



      {/* Stats */}

      <section className="py-28 px-6 border-y border-white/10">


        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">


          {[
            { number: "20+", label: "Projects Delivered" },
            { number: "10+", label: "Clients Worldwide" },
            { number: "2+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (


            <div key={i}>


              <h3 className="text-4xl font-bold text-blue-500 mb-2">

                {stat.number}

              </h3>


              <p className="text-gray-400">

                {stat.label}

              </p>


            </div>


          ))}


        </div>


      </section>



      {/* Why Choose */}

      <section className="py-28 px-6">


        <div className="max-w-6xl mx-auto text-center">


          <p className="text-blue-500 font-semibold mb-4">
            WHY CHOOSE US
          </p>


          <h2 className="text-4xl font-bold mb-16">

            Why businesses trust Ninebyt

          </h2>



          <div className="grid md:grid-cols-3 gap-12 text-left">


            {[

              {
                title: "Modern Technology",
                desc: "We use the latest tools to build scalable and secure products."
              },

              {
                title: "Premium Design",
                desc: "We create clean, modern designs that build trust."
              },

              {
                title: "Long-Term Support",
                desc: "We support your product even after launch."
              },

            ].map((item, i) => (


              <div key={i}
                className="border border-white/10 p-8 rounded-xl hover:border-blue-500 transition"
              >


                <h3 className="text-xl font-semibold mb-3">

                  {item.title}

                </h3>


                <p className="text-gray-400">

                  {item.desc}

                </p>


              </div>


            ))}


          </div>


        </div>


      </section>



      {/* CTA */}

      <section className="py-32 px-6 text-center border-t border-white/10">


        <h2 className="text-4xl font-bold mb-6">

          Have a project in mind?

        </h2>


        <p className="text-gray-400 mb-10">

          Let's build something amazing together.

        </p>


        <a
          href="/contact-us"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
        >

          Contact Us

        </a>


      </section>


    </main>
  );
}
