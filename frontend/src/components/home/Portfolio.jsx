 import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";


export default function Portfolio() {

  const projects = [
    {
      title: "",
      category: "",
      image: project1,
    },
    {
      title: "",
      category: "",
      image: project2,
    },
    {
      title: "",
      category: "",
      image: project3,
    }
  ];



  return (

    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">


      {/* Background glow */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full top-0 left-0"></div>



      <div className="relative max-w-7xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-500 font-semibold tracking-widest mb-4">
            OUR WORK
          </p>


          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Projects we've designed and developed
            <span className="block text-blue-500">
              for our clients
            </span>
          </h2>


          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of real websites and applications crafted by Ninebyt.
          </p>

        </div>



        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-3 gap-10">


          {projects.map((project, i) => (

            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500 transition duration-500 hover:translate-y-[-10px]"
            >


              {/* Image */}

              <img
                src={project.image}
                className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
              />



              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition duration-500"></div>



              {/* Text Content */}

              <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition duration-500">


                <p className="text-sm text-blue-500 mb-1">
                  {project.category}
                </p>


                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>


              </div>



              {/* Glow effect */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-600/10 blur-xl"></div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}
