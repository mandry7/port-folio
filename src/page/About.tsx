import {  useState } from "react";

import CardSkill from "components/CardSkill";

import { skills } from "data/data";
import { Skill } from "type/type";

import "assets/scss/about.scss"


const About = () => {
  const [skillList, setSkill] = useState<Skill[]>(skills);

  return (
    <div className="about-container">
      <div className="sub-container">
        <h1 className="title ">WHO AM I ?</h1>
        <p className="text-white text-xl">
          Hi guys, I am{" "}
          <span className="text-yellow-500 font-semibold">
            Mandrindra RANARIJAONA
          </span>{" "}
          from{" "}
          <span className="text-yellow-500 font-semibold">
            Antananarivo, Madagascar
          </span>{" "}
          . <br />I am currently employed as a software developer as a
          freelance. <br />I have completed my master II at ESPA.
        </p>
        <p className="text-white text-lg">
          My hobbies are: I love playing Games, Reading book, playing guitars
          and travelling
        </p>
        <p className="tought">"Never give up!".Mandrindra</p>
      </div>
      <div className="sub-container">
        <h1 className="title">My Skills</h1>
        <p className="text-white text-xl mb-10">You can find all my skills below</p>
        {skillList.length ? (
          <div className=" grid 2xl:grid-cols-4 lg:grid-cols-4 gap-8">
            {skillList.map((skill, index) => (
              <div className={skill.name}  key={skill.id + index}>
                <CardSkill {...skill} key={skill.id + index} />
              </div>
            ))}
          </div>
        ) : null}
      </div>

    </div>
  );
};

export default About;
