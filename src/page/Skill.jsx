import React, { useState, useEffect } from "react";

const Skills = () => {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFill((prev) => !prev); // toggle fill true/false
    }, 1500); // 1.5 sec me toggle
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">My technical level & experience</p>
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
  );
};

export default Skills;
