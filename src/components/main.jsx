import React, { useState, useEffect } from "react";

const Main = () => {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFill((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-amber-400 drop-shadow-lg">Kuldeep</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm a passionate frontend developer skilled in
              <span className="text-amber-400 font-semibold">
                {" "}
                HTML, CSS, JavaScript & React
              </span>
              . I build responsive and modern web applications with clean UI.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-500 hover:scale-105 transition duration-300">
                Contact Me
              </button>

              <button className="border border-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="image.jpg"
                alt="Kuldeep"
                className="w-62 h-62 md:w-96 md:h-96 object-cover rounded-full  shadow-2xl hover:scale-105 transition duration-500"
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-amber-400 blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 seaction */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white">
        <div className="container mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 mt-4">
              My technical level & experience
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* HTML */}
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">HTML</h3>
                <span className="text-cyan-400 font-semibold">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-cyan-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: fill ? "90%" : "0%" }}
                ></div>
              </div>
            </div>

            {/* CSS */}
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">CSS</h3>
                <span className="text-cyan-400 font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-cyan-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: fill ? "85%" : "0%" }}
                ></div>
              </div>
            </div>

            {/* JavaScript */}
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">JavaScript</h3>
                <span className="text-cyan-400 font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-cyan-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: fill ? "75%" : "0%" }}
                ></div>
              </div>
            </div>

            {/* React */}
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">React</h3>
                <span className="text-cyan-400 font-semibold">70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-cyan-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: fill ? "70%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="image.jpg"
                alt="Kuldeep"
                className="w-42 h-42 md:w-96 md:h-96 object-cover rounded-xl   hover:scale-105 transition duration-500"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-amber-400">Me</span>
              </h2>

              <p className="text-white mb-4 leading-relaxed">
                Hello! I am <strong>Kuldeep</strong>, a passionate frontend
                developer who loves building modern and responsive websites. I
                enjoy turning complex problems into simple, beautiful and
                intuitive designs.
              </p>

              <p className="text-white mb-6 leading-relaxed">
                I have experience working with
                <strong> HTML, CSS, JavaScript, React</strong>
                and creating fully responsive web applications using
                <strong> Tailwind CSS</strong>.<strong> BootStrap CSS</strong>.
              </p>

              <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-500 transition">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-16">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold ">
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
              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A responsive calculator application built using HTML, CSS, and
                  JavaScript. It performs basic arithmetic operations like
                  addition, subtraction, multiplication, and division with a
                  clean user interface
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
              <div className="p-6">
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
              <div className="p-6">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A modern e-commerce application fetching makeup and phone
                  products via a public API. It features product listings,
                  detailed views, and a contact form for user inquiries.
                </p>
                <a href="http://e-commerce-ten-omega-61.vercel.app">
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

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white">
        <div className="container mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Contact <span className="text-amber-400">Me</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Feel free to contact me for any work or suggestions.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
