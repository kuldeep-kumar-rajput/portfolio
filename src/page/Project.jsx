import React from "react";

const Project = () => {
  return (
    <>
      {/* Projects Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-16">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              My <span className="text-amber-400">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Here are some of the projects I have built.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Calculator */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="calculator.png"
                alt="Calculator Project"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col p-6 ">
                <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A simple calculator built using HTML, CSS & JavaScript.
                </p>
                <a href="https://calculator-drab-zeta.vercel.app">
                  <button className="text-amber-400 hover:underline">
                    View Project
                  </button>
                </a>
                <a href="https://github.com/kuldeep-kumar-rajput/calculator.git">
                  <button className="text-amber-400 hover:underline">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            {/* Meme Generator */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="weather.jpg"
                alt="weather project"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">weather-app</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A modern and responsive contact form built using React and
                  Tailwind CSS. It includes form validation and a clean UI
                  design for better user experience
                </p>
                <a href=" https://kuldeep-kumar-rajput.github.io/weather-app/">
                  <button className="text-amber-400 hover:underline">
                    View Project
                  </button>
                </a>
                <a href="https://github.com/kuldeep-kumar-rajput/weather-app.git">
                  <button className="text-amber-400 hover:underline">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            {/* Game */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="memes.png"
                alt="memes Project"
                className="h-40  w-full object-cover"
              />
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">memes Generate</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Generate funny memes dynamically using a public API. Users can
                  customize text and create unique memes instantly.
                </p>
                <a href="http://memes-generator-beige.vercel.app">
                  <button className="text-amber-400 hover:underline">
                    View Project
                  </button>
                </a>
                <a href="https://github.com/kuldeep-kumar-rajput/memes-generator.git">
                  <button className="text-amber-400 hover:underline">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="iphone.png"
                alt="E-Commerce Project"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col p-6 ">
                <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A fully responsive e-commerce website built with React.
                </p>
                <a href="http://e-commerce-eight-self-29.vercel.app">
                  <button className="text-amber-400 hover:underline">
                    View Project
                  </button>
                </a>
                <a href="https://github.com/kuldeep-kumar-rajput/e-commerce.git">
                  <button className="text-amber-400 hover:underline">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
