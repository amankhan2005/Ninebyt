 export default function ServicesPage() {
  return (
    <main className="bg-black text-white">


      {/* Hero */}

      <section className="py-36 px-6 text-center border-b border-white/10">


        <p className="text-blue-500 font-semibold tracking-widest mb-4">
          OUR SERVICES
        </p>


        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">

          Digital solutions designed to help your
          <span className="text-blue-500"> business grow and scale</span>

        </h1>


        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">

          We create modern websites, software, and digital experiences
          that deliver real, measurable results.

        </p>


      </section>



      {/* Core Services */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


          {/* Website Development */}

          <div className="border border-white/10 p-10 rounded-xl hover:border-blue-500 transition">

            <h2 className="text-2xl font-semibold mb-4">
              Website Development
            </h2>


            <ul className="text-gray-400 space-y-2 mb-6">

              <li>Mobile-responsive and modern design</li>
              <li>Fast loading and optimized performance</li>
              <li>Secure and scalable architecture</li>
              <li>Built for SEO and business growth</li>

            </ul>


            <p className="text-gray-400">

              We build professional websites that help businesses create a
              strong online presence and convert visitors into customers.

            </p>

          </div>



          {/* SEO */}

          <div className="border border-white/10 p-10 rounded-xl hover:border-blue-500 transition">

            <h2 className="text-2xl font-semibold mb-4">
              Search Engine Optimization
            </h2>


            <ul className="text-gray-400 space-y-2 mb-6">

              <li>Improve rankings on Google</li>
              <li>Increase organic traffic</li>
              <li>Optimize speed and performance</li>
              <li>Build trust and visibility</li>

            </ul>


            <p className="text-gray-400">

              Our SEO strategies help your business get discovered by the
              right audience and grow consistently.

            </p>

          </div>



          {/* SaaS */}

          <div className="border border-white/10 p-10 rounded-xl hover:border-blue-500 transition">

            <h2 className="text-2xl font-semibold mb-4">
              SaaS Development
            </h2>


            <ul className="text-gray-400 space-y-2 mb-6">

              <li>Scalable cloud-based applications</li>
              <li>Secure and reliable systems</li>
              <li>Custom dashboards and platforms</li>
              <li>Easy integration with business tools</li>

            </ul>


            <p className="text-gray-400">

              We develop powerful software solutions designed to scale with
              your business.

            </p>

          </div>



          {/* Digital Experience */}

          <div className="border border-white/10 p-10 rounded-xl hover:border-blue-500 transition">

            <h2 className="text-2xl font-semibold mb-4">
              Design & Digital Experience
            </h2>


            <ul className="text-gray-400 space-y-2 mb-6">

              <li>Modern and clean UI/UX design</li>
              <li>Conversion-focused layouts</li>
              <li>Brand-focused digital experiences</li>
              <li>Optimized user interaction</li>

            </ul>


            <p className="text-gray-400">

              We create premium digital experiences that leave a lasting
              impression.

            </p>

          </div>


        </div>

      </section>



      {/* Why Our Approach */}

      <section className="py-28 px-6 border-t border-white/10">


        <div className="max-w-5xl mx-auto text-center">


          <h2 className="text-4xl font-bold mb-16">

            Our approach

          </h2>



          <div className="grid md:grid-cols-3 gap-10 text-left">


            <div>

              <h3 className="text-blue-500 font-semibold mb-3">
                Innovation
              </h3>

              <p className="text-gray-400">
                Using modern technology to build future-ready solutions.
              </p>

            </div>



            <div>

              <h3 className="text-blue-500 font-semibold mb-3">
                Attention to detail
              </h3>

              <p className="text-gray-400">
                Every element is crafted with precision.
              </p>

            </div>



            <div>

              <h3 className="text-blue-500 font-semibold mb-3">
                Long-term results
              </h3>

              <p className="text-gray-400">
                Built to grow and scale with your business.
              </p>

            </div>


          </div>


        </div>

      </section>



      {/* CTA */}

      <section className="py-32 text-center border-t border-white/10">


        <h2 className="text-4xl font-bold mb-6">

          Ready to build your project?

        </h2>


        <p className="text-gray-400 mb-10">

          Let's create something exceptional together.

        </p>


        <a
          href="/contact-us"
          className="bg-blue-600 px-10 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
        >

          Contact Us

        </a>


      </section>


    </main>
  );
}
