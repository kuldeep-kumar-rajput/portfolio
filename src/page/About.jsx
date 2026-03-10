import React from "react";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="image.jpg"
                alt="About Kuldeep"
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-amber-400">Me</span>
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Hello! I am <strong>Kuldeep</strong>, a passionate frontend
                developer who loves building modern and responsive websites. I
                enjoy turning complex problems into simple, beautiful and
                intuitive designs.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                I have experience working with
                <strong> HTML, CSS, JavaScript, React</strong>
                and creating fully responsive web applications using
                <strong> Tailwind CSS</strong>.
              </p>

              <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-500 transition">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
