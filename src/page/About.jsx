import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-800 py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="image.jpg" // replace with your image
              alt="Kuldeep"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-amber-400">Me</span>
            </h2>

            <p className="mb-4 leading-relaxed">
              Hello! I am <strong>Kuldeep</strong>, a passionate frontend
              developer who loves building modern and responsive websites. I
              enjoy turning complex problems into simple, beautiful, and
              intuitive designs.
            </p>

            <p className="mb-6 leading-relaxed">
              I have experience working with
              <strong> HTML, CSS, JavaScript, React</strong> and creating fully
              responsive web applications using
              <strong> Tailwind CSS</strong> and <strong>Bootstrap CSS</strong>.
            </p>

            <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-500 transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
