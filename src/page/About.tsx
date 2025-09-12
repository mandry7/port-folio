import { useState } from "react";
import CardSkill from "components/CardSkill";
import { FaGamepad, FaGuitar, FaBook } from "react-icons/fa";
import { skills } from "data/data";
import { Skill } from "type/type";

const About = () => {
  const [skillList] = useState<Skill[]>(skills);

  return (
    <div className="relative z-40 flex flex-col w-full h-screen overflow-auto">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
          <h1 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-center">
            WHO AM I?
          </h1>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* About Section */}
            <div className="bg-gray-900/80 flex flex-col gap-6 p-6 sm:p-8 md:p-10 text-white font-sans rounded-xl shadow-lg">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-500 tracking-wide">
                  Mandrindra RANARIJAONA
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-semibold mt-2 text-gray-300">
                  Freelance Software Developer
                </p>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Antananarivo, Madagascar
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-yellow-500">
                    About Me
                  </h2>
                  <p className="mt-2 text-gray-400 leading-relaxed">
                    I am a software developer with a strong foundation in a
                    variety of technologies. I hold a Master II degree from
                    ESPA, which has equipped me with the skills to tackle
                    complex challenges and deliver high-quality, innovative
                    software solutions for my clients.
                  </p>
                </div>

                <div className="border-b border-gray-700 pb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-yellow-500">
                    Education & Skills
                  </h2>
                  <ul className="mt-2 text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">&bull;</span>
                      <span>
                        Master II, ESPA: My advanced education provides me with
                        a deep understanding of modern software development
                        principles.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">&bull;</span>
                      <span>
                        Executive management and project management: Skilled in
                        managing projects from conception to completion.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-yellow-500">
                    Personal Interests
                  </h2>
                  <p className="mt-2 text-gray-400 leading-relaxed flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <FaGamepad className="text-yellow-500" /> Playing games
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBook className="text-yellow-500" /> Reading
                    </span>
                    <span className="flex items-center gap-2">
                      <FaGuitar className="text-yellow-500" /> Playing the
                      guitar
                    </span>
                    <span className="flex items-center gap-2">
                      🌍 Traveling
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start mt-6 sm:mt-8">
                <div className="animate-pulse text-yellow-500 text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 max-w-xs sm:max-w-sm md:max-w-md rounded-md border border-yellow-500 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out text-center">
                  "Never give up!" - Mandrindra
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="text-center lg:text-left">
                <h1 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  My Skills
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
                  You can find all my skills below
                </p>
              </div>

              {skillList.length ? (
                <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
                  {skillList.map((skill, index) => (
                    <div
                      key={skill.id + index}
                      className={`w-full max-w-[140px] sm:max-w-none
                        ${
                          skill.name === "react"
                            ? "animate-[wave_1s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "vue"
                            ? "animate-[wave_1.3s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "typescript"
                            ? "animate-[wave_1.6s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "javascript"
                            ? "animate-[wave_1.9s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "next"
                            ? "animate-[wave_2.2s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "node"
                            ? "animate-[wave_2.5s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "express"
                            ? "animate-[wave_2.8s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "java"
                            ? "animate-[wave_3.1s_ease_infinite]"
                            : ""
                        }
                        ${
                          skill.name === "spring"
                            ? "animate-[wave_3.3s_ease_infinite]"
                            : ""
                        }
                      `}
                    >
                      <CardSkill {...skill} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
