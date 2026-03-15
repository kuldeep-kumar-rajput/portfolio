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
    <section className=" bg-[oklch(20.8%_0.042_265.755)]   py-20">
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
  );
};

export default Skills;
