import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {

  const faqs = [
    {
      q: "What services does Ninebyt offer?",
      a: "We design and develop modern websites, web applications, and automation solutions tailored to your business needs.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most websites are completed within 1 to 3 weeks depending on the complexity and requirements.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we work with clients worldwide including startups, agencies, and businesses.",
    },
    {
      q: "Will my website be mobile friendly?",
      a: "Absolutely. Every website we build is fully responsive and optimized for all devices.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer ongoing support, maintenance, and updates after project completion.",
    },
    {
      q: "How can I start a project with Ninebyt?",
      a: "Simply contact us through the contact section and we’ll discuss your project requirements.",
    },
  ];



  const [openIndex, setOpenIndex] = useState(null);



  return (

    <section className="py-24 bg-black text-white px-6">


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">


        {/* Left */}

        <div>

          <p className="text-green-500 font-medium mb-4">
            FAQ
          </p>


          <h2 className="text-4xl md:text-5xl font-semibold mb-6">

            Frequently asked questions

          </h2>


          <p className="text-gray-400 mb-8 max-w-md">

            Everything you need to know about working with Ninebyt.

          </p>


          <a
            href="#contact"
            className="inline-block border border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-black transition"
          >
            Contact Us
          </a>


        </div>



        {/* Right */}

        <div className="space-y-4">


          {faqs.map((item, index) => (

            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >


              {/* Question */}

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left font-medium hover:bg-white/5 transition"
              >

                {item.q}


                <span className="text-green-500">

                  {openIndex === index ? <FaMinus /> : <FaPlus />}

                </span>


              </button>



              {/* Answer */}

              <div
                className={`px-5 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 pb-5 text-gray-400"
                    : "max-h-0"
                }`}
              >

                {item.a}

              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}
