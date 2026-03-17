import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFill((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.number
    ) {
      alert("please form fill kro");
      return;
    }
    alert("Message sent successfully!");
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "", number: "" });
  };

  return (
    <>
      <section className="min-h-screen flex items-center bg-[oklch(20.8%_0.042_265.755)]">
        <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left"> 
           <h1 className="text-4xl text-white md:text-6xl font-extrabold leading-tight mb-4 opacity-0 translate-y-10 animate-[slideUp_1s_ease-out_forwards]">
            Hi, I'm{" "}
           <span className="text-amber-400 drop-shadow-lg">Kuldeep</span>
           </h1>
             <p className="text-white text-lg mb-5 leading-relaxed opacity-0 translate-y-10 animate-[slideUp_1s_ease-out_forwards]">
            I'm a passionate frontend developer skilled in
            <span className="text-amber-400 font-semibold">
             HTML, CSS, JavaScript & React
             </span>
             . I build responsive and modern web applications with clean UI.
              </p>
            <div className="flex justify-center md:justify-start gap-4 mt-15">
              <Link to="/contact">
                <button className="bg-amber-400 text-black px-8 py-3 w-40 rounded-full font-semibold shadow-lg hover:bg-amber-500 hover:scale-105 transition duration-300">
                Contact 
                </button>
              </Link>
              
              <button className="border border-amber-400 text-white px-8 py-3 w-40 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition duration-300">
               Portfolio
               </button>

              
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="image.jpg"
                alt="Kuldeep"
                className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-2xl  shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 seaction */}
      <section className=" bg-[oklch(20.8%_0.042_265.755)]   py20">
        <div className="container mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              MY <span className="text-amber-300">SKILLS</span>
            </h2>
            <p className="text-white mt-4 text-lg">
              My technical level & experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { name: "HTML", level: 80 },
              { name: "CSS", level: 70 },
              { name: "JavaScript", level: 60 },
              { name: "React", level: 50 },
              { name: "Tailwind CSS", level: 70 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transition-all duration-1000 ease-out"
                    style={{ width: fill ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-[oklch(20.8%_0.042_265.755)] py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-20 ">
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

      {/* Contact Section */}
      <section className="bg-[oklch(20.8%_0.042_265.755)] py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Contact <span className="text-amber-400">Me</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Feel free to contact me for any work or suggestions.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-gray-200 shadow-xl rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              {/* Email */}
              <div>
                <span className="block text-gray-700 font-medium mb-2">
                  +91
                </span>
                <input
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="+91"
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
