 export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center px-6 overflow-hidden mt-18">


      {/* Background glow */}

      <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[200px] rounded-full"></div>



      <div className="relative max-w-5xl text-center">


        {/* Label */}

        <p className="text-blue-500 font-semibold tracking-widest mb-6">
          NINEBYT SOFTWARE SOLUTIONS
        </p>



        {/* Heading */}

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white">


          We build

          <span className="text-blue-500">

            {" "}scalable software{" "}

          </span>

          for modern businesses


        </h1>



        {/* Description */}

        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">

          Custom websites and applications engineered for performance,
          security, and long-term growth.

        </p>



        {/* Buttons */}

        <div className="mt-12 flex justify-center gap-6 flex-wrap">


          {/* Primary button */}
<a href="/contact" className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-md overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)]"
            >Start a Project</a>
           


 


        </div>



        {/* Trust line */}

        <p className="mt-12 text-sm text-gray-500">

          Trusted by startups and growing companies worldwide

        </p>


      </div>


    </section>
  );
}
